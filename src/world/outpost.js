import * as THREE from 'three'
import { Batch, createMaterials, glowTexture, floorTexture, makeSprite } from './materials.js'
import { Props } from './props.js'
import { createDoor } from './doors.js'

/* -------------------------------------------------------------------------- */
/* Outpost 09 layout                                                          */
/* -------------------------------------------------------------------------- */
export const ROOMS = {
  lab: { x: 0, z: 0, w: 22, d: 18 },
  storage: { x: 0, z: -27, w: 16, d: 12 },
  maintenance: { x: 27, z: 0, w: 12, d: 14 },
  research: { x: -17, z: 0, w: 12, d: 10 },
  extraction: { x: 0, z: 22, w: 14, d: 14 },
}

export const PATROLS = {
  lab: [
    { x: -6.5, z: 5.0 }, { x: 5.5, z: 5.2 }, { x: 6.4, z: -5.2 }, { x: -6.4, z: -5.0 },
  ],
  storage: [
    { x: 0.0, z: -13.5 }, { x: 0.0, z: -18.5 }, { x: 0.0, z: -24.5 },
    { x: 4.0, z: -27.0 }, { x: 4.5, z: -31.0 }, { x: -4.0, z: -30.5 }, { x: -3.5, z: -25.0 },
  ],
}

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)) }

/* -------------------------------------------------------------------------- */
/* Circle / AABB collision                                                    */
/* -------------------------------------------------------------------------- */
export function circleHits(colliders, x, z, r) {
  for (let i = 0; i < colliders.length; i++) {
    const c = colliders[i]
    if (!c.solid) continue
    if (x + r < c.minX || x - r > c.maxX || z + r < c.minZ || z - r > c.maxZ) continue
    const nx = clamp(x, c.minX, c.maxX)
    const nz = clamp(z, c.minZ, c.maxZ)
    const dx = x - nx
    const dz = z - nz
    if (dx * dx + dz * dz < r * r) return c
  }
  return null
}

export function isBlocked(colliders, x, z, r = 0.34) {
  return !!circleHits(colliders, x, z, r)
}

export function resolveMovement(colliders, pos, dx, dz, r = 0.36) {
  if (dx !== 0) {
    const nx = pos.x + dx
    if (!circleHits(colliders, nx, pos.z, r)) pos.x = nx
    else {
      // gentle slide step
      const step = Math.sign(dx) * Math.max(0.01, Math.abs(dx) * 0.3)
      if (!circleHits(colliders, pos.x + step, pos.z, r)) pos.x += step
    }
  }
  if (dz !== 0) {
    const nz = pos.z + dz
    if (!circleHits(colliders, pos.x, nz, r)) pos.z = nz
    else {
      const step = Math.sign(dz) * Math.max(0.01, Math.abs(dz) * 0.3)
      if (!circleHits(colliders, pos.x, pos.z + step, r)) pos.z += step
    }
  }
}

function segmentAABB(x1, z1, x2, z2, c) {
  const dx = x2 - x1
  const dz = z2 - z1
  let tmin = 0, tmax = 1
  for (const [p, d, min, max] of [[x1, dx, c.minX, c.maxX], [z1, dz, c.minZ, c.maxZ]]) {
    if (Math.abs(d) < 1e-8) {
      if (p < min || p > max) return false
    } else {
      let t1 = (min - p) / d
      let t2 = (max - p) / d
      if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp }
      tmin = Math.max(tmin, t1)
      tmax = Math.min(tmax, t2)
      if (tmin > tmax) return false
    }
  }
  return true
}

export function segmentBlocked(colliders, x1, z1, x2, z2) {
  for (let i = 0; i < colliders.length; i++) {
    const c = colliders[i]
    if (c.sight === false || c.solid === false) continue
    if (segmentAABB(x1, z1, x2, z2, c)) return true
  }
  return false
}

/* -------------------------------------------------------------------------- */
/* World                                                                      */
/* -------------------------------------------------------------------------- */
export class Outpost {
  constructor(scene, quality = 'medium') {
    this.scene = scene
    this.quality = quality
    this.mats = createMaterials()
    this.batch = new Batch()
    this.glowTex = glowTexture()
    this.colliders = []
    this.interactables = []
    this.doors = []
    this.anims = []
    this.pointLights = []
    this.lootAnchors = {}
    this.extractionActive = false
    this.time = 0

    this.props = new Props({
      scene,
      mats: this.mats,
      batch: this.batch,
      addCollider: (x, z, sx, sz, opts) => this.addCollider(x, z, sx, sz, opts),
      interactables: this.interactables,
      glowTex: this.glowTex,
      addAnim: (fn) => this.anims.push(fn),
    })

    this.build()
    this.batch.flush(scene)
    this.createLights()
    this.createSky()

    if (quality !== 'low') this.props.dust(quality === 'high' ? 210 : 150)
  }

  addCollider(x, z, sx, sz, opts = {}) {
    const c = {
      minX: x - sx / 2, maxX: x + sx / 2,
      minZ: z - sz / 2, maxZ: z + sz / 2,
      solid: opts.solid !== false,
      sight: opts.sight !== false,
      name: opts.name || '',
    }
    this.colliders.push(c)
    return c
  }

  floor(x, z, w, d, material) {
    this.batch.box(w, 0.18, d, material, x, -0.09, z)
  }

  ceiling(x, z, w, d) {
    this.batch.box(w, 0.16, d, this.mats.ceiling, x, 4.36, z)
    // structural beams
    const alongX = w > d
    if (alongX) {
      for (let i = 0; i < 3; i++) this.batch.box(w, 0.16, 0.24, this.mats.trimDark, x, 4.2, z - d / 2 + 1.4 + i * (d - 2.8) / 2)
    } else {
      for (let i = 0; i < 3; i++) this.batch.box(0.24, 0.16, d, this.mats.trimDark, x - w / 2 + 1.4 + i * (w - 2.8) / 2, 4.2, z)
    }
  }

  wall(x, z, sx, sz, opts = {}) {
    const h = opts.h || 4.2
    const alongX = sx > sz
    this.batch.box(sx, h, sz, this.mats.wall, x, h / 2, z)
    // baseboard
    this.batch.box(sx + 0.06, 0.42, sz + 0.06, this.mats.wallDark, x, 0.21, z)
    // top rail
    this.batch.box(sx + 0.08, 0.12, sz + 0.08, this.mats.trim, x, h - 0.12, z)
    // emissive service strip
    const stripMat = opts.accent === 'orange' ? this.mats.emissiveOrange
      : opts.accent === 'red' ? this.mats.emissiveRed
        : opts.accent === 'none' ? null : this.mats.emissiveCyanDim
    if (stripMat) {
      if (alongX) {
        this.batch.box(sx * 0.94, 0.028, 0.025, stripMat, x, 0.72, z + sz / 2 + 0.02)
        this.batch.box(sx * 0.94, 0.028, 0.025, stripMat, x, 0.72, z - sz / 2 - 0.02)
      } else {
        this.batch.box(0.025, 0.028, sz * 0.94, stripMat, x + sx / 2 + 0.02, 0.72, z)
        this.batch.box(0.025, 0.028, sz * 0.94, stripMat, x - sx / 2 - 0.02, 0.72, z)
      }
    }
    // modular recessed panels + ribs on both faces
    const len = alongX ? sx : sz
    const n = Math.min(6, Math.max(1, Math.floor(len / 2.6)))
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n - 0.5
      if (alongX) {
        const px = x + t * (len - 0.8)
        this.batch.box(1.15, 2.3, 0.035, this.mats.wallPanel, px, 2.2, z + sz / 2 + 0.015)
        this.batch.box(1.15, 2.3, 0.035, this.mats.wallPanel, px, 2.2, z - sz / 2 - 0.015)
        this.batch.box(0.08, 3.25, sz + 0.07, this.mats.trimDark, x + (i / n - 0.5) * len, 1.9, z)
      } else {
        const pz = z + t * (len - 0.8)
        this.batch.box(0.035, 2.3, 1.15, this.mats.wallPanel, x + sx / 2 + 0.015, 2.2, pz)
        this.batch.box(0.035, 2.3, 1.15, this.mats.wallPanel, x - sx / 2 - 0.015, 2.2, pz)
        this.batch.box(sx + 0.07, 3.25, 0.08, this.mats.trimDark, x, 1.9, z + (i / n - 0.5) * len)
      }
    }
    this.addCollider(x, z, sx, sz, { sight: true, name: 'wall' })
  }

  lintel(x, z, sx, sz, opts = {}) {
    this.batch.box(sx, 1.3, sz, this.mats.wall, x, 3.55, z)
    this.batch.box(sx + 0.04, 0.08, sz + 0.04, this.mats.trim, x, 2.93, z)
    if (opts.accent !== false) {
      const alongX = sx > sz
      if (alongX) this.batch.box(sx * 0.8, 0.03, 0.02, this.mats.emissiveCyanDim, x, 3.05, z + sz / 2 + 0.02)
      else this.batch.box(0.02, 0.03, sz * 0.8, this.mats.emissiveCyanDim, x + sx / 2 + 0.02, 3.05, z)
    }
  }

  build() {
    const m = this.mats
    const p = this.props

    // large subfloor to catch shadows / hide the void
    this.batch.box(90, 0.12, 90, m.floorMetal, 6, -0.2, -2)

    /* -------------------------------- LAB -------------------------------- */
    this.floor(0, 0, 22, 18, m.floorLab)
    this.ceiling(0, 0, 22, 18)
    this.wall(-6.2, -9, 9.6, 0.4, { accent: 'orange' })
    this.wall(6.2, -9, 9.6, 0.4, { accent: 'orange' })
    this.wall(-6.2, 9, 9.6, 0.4, { accent: 'orange' })
    this.wall(6.2, 9, 9.6, 0.4, { accent: 'orange' })
    this.wall(-11, -5.2, 0.4, 7.6)
    this.wall(-11, 5.2, 0.4, 7.6)
    this.wall(11, -5.2, 0.4, 7.6)
    this.wall(11, 5.2, 0.4, 7.6)
    this.lintel(0, -9, 2.8, 0.4)
    this.lintel(0, 9, 2.8, 0.4)
    this.lintel(-11, 0, 0.4, 2.8)
    this.lintel(11, 0, 0.4, 2.8)

    // lighting
    p.ceilingLamp(-6, -3.5, 'cyan', 1.0)
    p.ceilingLamp(6, -3.5, 'cyan', 1.0)
    p.ceilingLamp(-6, 4.5, 'white', 0.9)
    p.ceilingLamp(6, 4.5, 'white', 0.9)
    p.ceilingLamp(0, 0, 'cyan', 1.2)

    // centrepiece
    p.holoTable(0, 0.4)

    // desks and monitors
    p.desk(-7.5, -7.55, 0, { w: 3.4 })
    p.monitor(-8.4, 1.1, -7.5, 0, 0)
    p.monitor(-7.1, 1.1, -7.5, 0, 1, 0.9)
    p.chair(-8.4, -6.3, 0)
    p.terminal(-4.3, 0, -8.0, 0, {
      id: 'lab-log',
      source: 'LAB-01 // PERSONAL ARCHIVE',
      title: 'THE LAST SHIFT',
      label: 'Read Dr. Voss’s archive',
      body: 'DR. E. VOSS — SHIFT LOG 447\n\n<warn>02:13</warn> — Deep-core resonance is holding at 8.2 terahertz. Project ECHO is stable. Or it was.\n\n<warn>03:41</warn> — Unit K-7 walked a patrol route through a sealed bulkhead. I have never seen a security unit ignore architecture. I am logging this off-grid.\n\n<b>04:02</b> — Something answered our signal. Not the relay. Something below the array.\n\nRECOVERY NOTE: The research evidence I left on this desk must reach extraction. Security card is in the storage bay.',
    })

    p.desk(7.9, -7.4, 0, { w: 2.8 })
    p.monitor(8.2, 1.1, -7.35, 0, 2)
    p.chair(8.2, -6.2, Math.PI)
    p.desk(9.65, 3.9, Math.PI / 2, { w: 2.6 })
    p.monitor(9.6, 1.1, 3.8, -Math.PI / 2, 1)
    p.chair(8.6, 3.8, Math.PI / 2)

    // server wall
    for (let i = 0; i < 3; i++) p.serverRack(-10.15, -5.8 + i * 1.55, Math.PI / 2, i === 1 ? 1 : 0)
    p.serverRack(10.15, -4.6, -Math.PI / 2, 1)
    p.serverRack(10.15, -3.2, -Math.PI / 2, 0)

    // crates / equipment
    p.crate(-8.7, 7.0, 1.45, { material: m.crate })
    p.crate(-7.0, 7.5, 1.1, { material: m.crateOlive })
    p.barrel(-5.4, 7.8)
    p.crate(7.7, 2.3, 1.3, { material: m.crateDark })
    p.contact(0.5, 6.3, 3.5, 3.5)
    p.cable(-8.5, -6.5, -4.5, -4.0)
    p.cable(-4.5, -4.0, 0.7, 2.0)
    p.cable(8.5, -6.4, 6.0, -2.0)
    p.conduit(-8, 8.4, 5, 0, m.emissiveOrange)
    p.conduit(8, 8.4, 5, 0, m.emissiveOrange)

    // hide spot
    p.locker(10.2, 7.0, -Math.PI / 2, { id: 'hide-lab', label: 'Hide in lab service locker' })

    // signs
    p.sign('LAB-01', 'CENTRAL RESEARCH', 0, 3.42, -8.77, 0, 2.4, 0.7)
    p.sign('RESEARCH', 'LEVEL 4 CLEARANCE', -10.77, 3.42, 0, Math.PI / 2, 2.2, 0.7, '#ffa14d')
    p.sign('EXTRACTION', 'PAD 09 // SOUTH', 0, 3.42, 8.77, Math.PI, 2.4, 0.7)
    p.sign('EAST ACCESS', 'MAINTENANCE BAY', 10.77, 3.42, 0, -Math.PI / 2, 2.2, 0.7)
    p.sign('CAUTION', 'AUTONOMOUS SECURITY ACTIVE', 4.0, 2.75, 8.77, Math.PI, 3.0, 0.62, '#ffa14d')

    /* ------------------------------ RESEARCH ----------------------------- */
    this.floor(-17, 0, 12, 10, m.floorResearch)
    this.ceiling(-17, 0, 12, 10)
    this.wall(-23, 0, 0.4, 10, { accent: 'red' })
    this.wall(-17, -5, 12, 0.4, { accent: 'none' })
    this.wall(-17, 5, 12, 0.4, { accent: 'none' })
    p.ceilingLamp(-19.5, -2.8, 'cyan', 0.8)
    p.ceilingLamp(-14.5, 2.8, 'red', 0.7)
    p.warningLight(-11.75, 2.8, 1.65, 0xff3a30)
    p.warningLight(-11.75, 2.8, -1.65, 0xff3a30)

    p.specimenTank(-20.0, -3.25, 0x5fffc8)
    p.specimenTank(-20.0, 3.25, 0x65d8ff)
    p.serverRack(-13.2, -4.1, Math.PI / 2, 0)
    p.desk(-15.8, 4.15, 0, { w: 2.4 })
    p.monitor(-15.8, 1.1, 4.1, Math.PI, 2)
    p.chair(-15.8, 3.1, Math.PI)
    p.terminal(-22.2, 0, 0, Math.PI / 2, {
      id: 'research-log',
      source: 'RESEARCH // PROJECT ECHO',
      title: 'PROJECT ECHO',
      label: 'Access Project ECHO terminal',
      body: 'PROJECT ECHO // CONTAINMENT REPORT\n\nSubject 09 was recovered from the array substrate. It emits a structured signal through solid matter.\n\n<b>Directive 12:</b> The quantum core is not equipment. It is a key. Do not let it leave the outpost.\n\n<warn>Addendum:</warn> The directive has been overridden by Recovery Command. The core is now a priority asset. Extract it.\n\nNOTE: Security core has locked this wing. External keycard required.',
    })
    // research pedestal
    this.batch.cyl(0.72, 0.9, 0.22, 12, m.trimDark, -15.5, 0.11, 0)
    this.batch.cyl(0.28, 0.4, 0.95, 10, m.trim, -15.5, 0.65, 0)
    this.batch.addGeo(new THREE.TorusGeometry(0.55, 0.03, 4, 18), m.emissiveCyan, [-15.5, 1.18, 0], [Math.PI / 2, 0, 0])
    const pedGlow = p.sprite(-15.5, 1.35, 0, 0x6ce8ff, 1.8, 0.28)
    this.anims.push((dt, t) => { pedGlow.material.opacity = 0.2 + Math.sin(t * 2) * 0.07 })
    this.addCollider(-15.5, 0, 1.6, 1.8, { sight: false })
    // hazard stripe & cables
    p.conduit(-17, 4.55, 8, 0, m.emissiveOrange)
    p.cable(-22.5, 2.5, -18.0, 4.2)
    p.cable(-21.0, -2.0, -14.0, -4.2)
    p.pipe(-22.6, 3.55, -4.6, -12.2, 3.55, -4.6, 0.1, m.pipe)
    p.pipe(-22.6, 3.55, 4.6, -12.2, 3.55, 4.6, 0.1, m.pipe)
    p.sign('RESEARCH', 'QUARANTINE // NO ENTRY', -17, 3.0, -4.76, 0, 3.0, 0.65, '#ff5a55')
    p.sign('CONTAINMENT', 'PROJECT ECHO', -22.76, 2.9, 2.9, Math.PI / 2, 2.4, 0.6, '#ff5a55')

    /* ------------------------------- STORAGE ----------------------------- */
    this.floor(0, -27, 16, 12, m.floorStorage)
    this.ceiling(0, -27, 16, 12)
    this.wall(-4.7, -21, 6.6, 0.4, { accent: 'orange' })
    this.wall(4.7, -21, 6.6, 0.4, { accent: 'orange' })
    this.wall(-8, -27, 0.4, 12, { accent: 'orange' })
    this.wall(8, -27, 0.4, 12, { accent: 'orange' })
    this.wall(0, -33, 16, 0.4, { accent: 'orange' })
    this.lintel(0, -21, 2.8, 0.4)
    p.ceilingLamp(-4, -24, 'orange', 0.85)
    p.ceilingLamp(4, -30, 'orange', 0.85)
    p.ceilingLamp(0, -27, 'white', 0.8)
    p.warningLight(0, 3.0, -32.7, 0xff7a2a)
    p.warningLight(-7.75, 2.5, -22.2, 0xff7a2a)

    p.shelf(-7.2, -25.0, Math.PI / 2, 4.2)
    p.shelf(-7.2, -30.4, Math.PI / 2, 4.0)
    p.shelf(7.2, -27.3, Math.PI / 2, 5.2)
    p.shelf(4.4, -23.0, 0, 3.4)
    p.crateStack(2.6, -26.0, 0.9, { rot: 0.2 })
    p.crate(-3.0, -30.2, 1.5, { material: m.crate })
    p.crate(-1.3, -30.3, 0.9, { material: m.crateOlive })
    p.crate(6.4, -31.4, 1.3, { material: m.crateDark })
    p.barrel(6.6, -22.0)
    p.barrel(5.7, -22.3, { color: m.crate })
    p.pipeCluster(-2, -32.6, 0, 3)
    p.pipe(7.75, 3.0, -24, 7.75, 3.0, -30, 0.13, m.pipe)
    p.pipe(7.75, 2.7, -24, 7.75, 2.7, -30, 0.08, m.pipeDark)
    p.cable(-7.0, -22.2, 3.4, -23.0)
    p.crateHide(5.2, -28.2, 0, { id: 'hide-storage' })
    p.containerBox(4.0, -23.4, 0.28, 'storage-keycard', 'keycard', 'Search security crate')
    p.containerBox(-5.9, -22.3, -0.18, 'storage-tools', 'battery', 'Search tool crate')
    p.terminal(7.25, 0, -22.5, -Math.PI / 2, {
      id: 'storage-log',
      source: 'SECURITY GRID // STORAGE 02',
      title: 'UNIT DEPLOYMENT',
      label: 'Read security grid status',
      body: 'SECURITY GRID // AUTONOMOUS UNITS\n\n<warn>K-7:</warn> ONLINE — central lab patrol\n<warn>K-9:</warn> ONLINE — storage / north access\n\nVisual recognition protocol active. Concealment lockers are authorized for personnel use.\n\nSecurity override card stored in crate B-4. Clearance remains under command lock.\n\n<warn>NOTE:</warn> Units will investigate sound and last-known position. They are not omniscient. Break contact.',
    })
    p.sign('STORAGE 02', 'CARGO // SECURE', 0, 3.42, -20.77, 0, 2.6, 0.7, '#ffa14d')
    p.sign('AUTHORIZED', 'PERSONNEL ONLY', 7.76, 2.7, -25.8, -Math.PI / 2, 2.2, 0.6, '#ffa14d')

    /* ----------------------------- MAINTENANCE --------------------------- */
    this.floor(27, 0, 12, 14, m.floorMaint)
    this.ceiling(27, 0, 12, 14)
    this.wall(21, -4.2, 0.4, 5.6, { accent: 'orange' })
    this.wall(21, 4.2, 0.4, 5.6, { accent: 'orange' })
    this.wall(33, 0, 0.4, 14, { accent: 'orange' })
    this.wall(27, -7, 12, 0.4, { accent: 'orange' })
    this.wall(27, 7, 12, 0.4, { accent: 'orange' })
    this.lintel(21, 0, 0.4, 2.8)
    p.ceilingLamp(27, -3.8, 'orange', 0.9)
    p.ceilingLamp(27, 3.2, 'white', 0.8)
    p.generator(29.0, -3.5)
    p.workbench(26.8, 6.0, 0)
    p.toolRack(32.75, 2.1, 0, -Math.PI / 2)
    p.toolRack(23.2, 2.0, -7.75, 0)
    p.locker(22.4, -6.55, 0, { id: 'hide-maint', label: 'Hide in maintenance locker' })
    p.containerBox(31.2, -6.3, 0, 'maint-supply', 'medkit', 'Search medical locker')
    p.barrel(32.0, 5.8, { color: m.crate })
    p.barrel(31.1, 6.1)
    p.crate(23.0, 6.1, 1.2, { material: m.crateOlive })
    p.pipeWork(24.4, -5.7)
    p.pipe(22.6, 3.0, 6.5, 32.4, 3.0, 6.5, 0.14, m.pipe)
    p.pipe(22.6, 2.65, 6.1, 32.4, 2.65, 6.1, 0.08, m.pipeDark)
    p.cable(22.2, 4.0, 31.8, 4.2)
    p.warningLight(32.7, 2.9, 0.0, 0xff7a2a)
    p.terminal(30.2, 0, 6.15, Math.PI, {
      id: 'maint-log',
      source: 'ENGINEERING // POWER SUBSYSTEM',
      title: 'GRID FAILURE',
      label: 'Access power grid terminal',
      body: 'POWER SUBSYSTEM // DIAGNOSTIC\n\nPrimary tap: <warn>UNSTABLE</warn>\nExtraction pad: <b>HOLDING</b>\nLocal battery reserves: NOMINAL\n\nSecurity units are drawing from the emergency bus. Their optical sensors are tuned for movement in low light.\n\nRECOVERY ADVICE: Sprinting drains suit energy. The battery cell in this bay will recharge your lamp. Use cover, not firepower.',
    })
    p.sign('MAINTENANCE', 'SERVICE BAY 03', 20.77, 3.42, 0, -Math.PI / 2, 2.6, 0.7, '#ffa14d')
    p.sign('DANGER', 'HIGH VOLTAGE // GENERATOR', 27, 2.8, -6.78, 0, 3.2, 0.7, '#ffa14d')

    /* ------------------------------ CORRIDORS ---------------------------- */
    this.floor(0, -15, 4, 12, m.floorHall)
    this.ceiling(0, -15, 4, 12)
    this.wall(-2, -15, 0.4, 12)
    this.wall(2, -15, 0.4, 12)
    p.ceilingLamp(0, -12.2, 'cyan', 0.62)
    p.ceilingLamp(0, -16.2, 'cyan', 0.62)
    p.ceilingLamp(0, -19.0, 'orange', 0.62)
    p.pipe(-1.72, 3.2, -9.5, -1.72, 3.2, -20.5, 0.1, m.pipe)
    p.pipe(-1.72, 2.9, -9.5, -1.72, 2.9, -20.5, 0.06, m.pipeDark)
    p.pipe(1.72, 3.15, -9.5, 1.72, 3.15, -20.5, 0.08, m.pipe)
    p.sign('SEC-02', 'AUTHORIZED ACCESS', 1.77, 2.6, -14.5, -Math.PI / 2, 2.2, 0.6)

    this.floor(16, 0, 10, 4, m.floorHall)
    this.ceiling(16, 0, 10, 4)
    this.wall(16, -2, 10, 0.4)
    this.wall(16, 2, 10, 0.4)
    p.ceilingLamp(14.0, 0, 'cyan', 0.6)
    p.ceilingLamp(18.0, 0, 'cyan', 0.6)
    p.pipe(11.5, 3.2, -1.72, 20.5, 3.2, -1.72, 0.1, m.pipe)
    p.pipe(11.5, 2.92, -1.72, 20.5, 2.92, -1.72, 0.06, m.pipeDark)
    p.conduit(16, 1.78, 8, 0, m.emissiveCyanDim)

    this.floor(0, 12, 4, 6, m.floorHall)
    this.ceiling(0, 12, 4, 6)
    this.wall(-2, 12, 0.4, 6)
    this.wall(2, 12, 0.4, 6)
    p.ceilingLamp(0, 12, 'cyan', 0.6)
    p.pipe(-1.72, 3.2, 9.5, -1.72, 3.2, 14.8, 0.1, m.pipe)
    p.pipe(1.72, 3.2, 9.5, 1.72, 3.2, 14.8, 0.1, m.pipe)

    /* ------------------------------ EXTRACTION --------------------------- */
    this.floor(0, 22, 14, 14, m.floorExtract)
    this.wall(-4.2, 15, 5.6, 0.4, { accent: 'orange' })
    this.wall(4.2, 15, 5.6, 0.4, { accent: 'orange' })
    this.wall(-7, 22, 0.4, 14, { accent: 'orange' })
    this.wall(7, 22, 0.4, 14, { accent: 'orange' })
    this.wall(0, 29, 14, 0.4, { accent: 'orange' })
    this.lintel(0, 15, 2.8, 0.4)
    p.extractionPad(0, 22.1)
    p.railing(-6.45, 22.2, 12.0, Math.PI / 2)
    p.railing(6.45, 22.2, 12.0, Math.PI / 2)
    p.dropship(4.55, 26.4, -0.22)
    p.crate(-5.15, 26.7, 1.35, { material: m.crate })
    p.crate(-5.35, 25.25, 0.95, { material: m.crateOlive })
    p.crate(5.2, 17.0, 1.1, { material: m.crateDark })
    p.barrel(-5.6, 17.3)
    p.warningLight(0, 3.0, 15.25, 0xff7a2a)
    p.warningLight(-6.7, 2.5, 27.4, 0xff7a2a)
    p.warningLight(6.7, 2.5, 27.4, 0xff7a2a)
    p.sign('EXTRACTION', 'PAD 09 // RECOVERY', 0, 2.9, 28.77, Math.PI, 4.2, 1.1)
    p.sign('HOLD', 'AWAIT EXTRACTION LOCK', -6.76, 2.5, 19.4, Math.PI / 2, 2.2, 0.6, '#ffa14d')

    // distant silhouettes beyond the pad
    this.batch.box(3.2, 20, 3.2, m.wallDark, -17, 10, 34)
    this.batch.box(2.0, 14, 2.0, m.wallDark, 20, 7, 33)
    this.batch.box(4.0, 8, 4.0, m.wallDark, 25, 4, 22)
    p.sprite(-17, 20.4, 34, 0xff3a30, 1.4, 0.65)
    p.sprite(20, 14.4, 33, 0xff3a30, 1.1, 0.55)

    /* -------------------------------- DOORS ------------------------------ */
    const doorDefs = [
      { x: 0, z: -9, axis: 'x', locked: false, name: 'lab-north' },
      { x: 0, z: 9, axis: 'x', locked: false, name: 'lab-south' },
      { x: 0, z: -21, axis: 'x', locked: false, name: 'storage' },
      { x: 11, z: 0, axis: 'z', locked: false, name: 'lab-east' },
      { x: 21, z: 0, axis: 'z', locked: false, name: 'maintenance' },
      { x: -11, z: 0, axis: 'z', locked: true, name: 'research' },
    ]
    for (const d of doorDefs) {
      this.doors.push(createDoor({
        scene: this.scene, mats: m, batch: this.batch, addCollider: (...a) => this.addCollider(...a),
        glowTex: this.glowTex, ...d,
      }))
    }
    this.researchDoor = this.doors.find((d) => d.name === 'research')
    this.interactables.push({
      kind: 'door', id: 'research-door', x: -10.4, y: 1.2, z: 0, radius: 2.4,
      label: 'Research wing sealed — requires security keycard',
    })

    /* ---------------------------- INTERACTABLES -------------------------- */
    this.interactables.push({
      kind: 'extraction', id: 'extraction', x: 0, y: 1.2, z: 22.1, radius: 3.3,
      label: 'Initiate extraction',
    })

    /* ------------------------------ LOOT ANCHORS ------------------------- */
    this.lootAnchors = {
      'doc-lab': { x: -7.2, y: 1.18, z: -7.35 },
      'component-lab': { x: 7.7, y: 1.3, z: 2.3 },
      'doc-storage': { x: -3.0, y: 1.55, z: -30.2 },
      'component-storage': { x: -6.9, y: 1.72, z: -26.0 },
      'module-research': { x: -15.5, y: 1.4, z: 0 },
      'cell-maint': { x: 25.4, y: 1.12, z: 5.9 },
      'cell-extract': { x: -5.15, y: 1.38, z: 26.7 },
    }
  }

  /* ------------------------------------------------------------------------ */
  createLights() {
    const m = this.scene
    const hemi = new THREE.HemisphereLight(0x3f7992, 0x080d10, 1.15)
    m.add(hemi)
    this.hemi = hemi

    const dir = new THREE.DirectionalLight(0xaee2f8, 1.9)
    dir.position.set(18, 28, 16)
    dir.target.position.set(0, 0, -6)
    dir.castShadow = this.quality !== 'low'
    dir.shadow.mapSize.set(this.quality === 'high' ? 2048 : 1024, this.quality === 'high' ? 2048 : 1024)
    dir.shadow.camera.left = -34
    dir.shadow.camera.right = 34
    dir.shadow.camera.top = 38
    dir.shadow.camera.bottom = -38
    dir.shadow.camera.near = 1
    dir.shadow.camera.far = 90
    dir.shadow.bias = -0.0012
    dir.shadow.normalBias = 0.02
    m.add(dir)
    m.add(dir.target)
    this.dirLight = dir

    const addPoint = (color, intensity, distance, x, y, z) => {
      const l = new THREE.PointLight(color, intensity, distance, 2)
      l.position.set(x, y, z)
      l.castShadow = false
      m.add(l)
      this.pointLights.push(l)
      return l
    }
    this.labLight = addPoint(0x6ce8ff, 58, 30, 0, 3.65, 0.5)
    this.labFill = addPoint(0x3da4bd, 30, 20, 0, 3.6, -6.0)
    this.storageLight = addPoint(0xff9c4a, 50, 24, 0, 3.55, -27)
    this.maintLight = addPoint(0xffb05c, 46, 22, 27, 3.55, 0.5)
    this.researchLight = addPoint(0x6ce8ff, 40, 20, -17, 3.5, 0)
    this.extractLight = addPoint(0x6ce8ff, 65, 34, 0, 3.2, 22)

    // subtle flicker
    this.anims.push((dt, t) => {
      this.labLight.intensity = 58 + Math.sin(t * 7.1) * 1.4
      this.storageLight.intensity = 50 + Math.sin(t * 3.3 + 1) * 1.2
      this.maintLight.intensity = 46 + Math.sin(t * 5.2 + 2) * 1.1
      this.extractLight.intensity = (this.extractionActive ? 85 : 65) + Math.sin(t * 2.4) * 2.0
    })
  }

  createSky() {
    const starGeo = new THREE.BufferGeometry()
    const n = 420
    const pos = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2
      const r = 55 + Math.random() * 30
      const y = 8 + Math.random() * 55
      pos[i * 3] = Math.cos(a) * r
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = Math.sin(a) * r
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
      color: 0xbfe7f2, size: 0.34, sizeAttenuation: true, transparent: true, opacity: 0.75, depthWrite: false, fog: false,
    }))
    this.scene.add(stars)

    const moon = makeSprite(this.glowTex, 0xbfeaff, 15, 0.75)
    moon.position.set(26, 31, 48)
    this.scene.add(moon)
    const moonCore = makeSprite(this.glowTex, 0xffffff, 5, 0.9)
    moonCore.position.copy(moon.position)
    this.scene.add(moonCore)
    this.stars = stars
  }

  /* ------------------------------------------------------------------------ */
  unlockResearchDoor() {
    if (!this.researchDoor || this.researchDoor.unlocked) return false
    this.researchDoor.unlock()
    const it = this.interactables.find((i) => i.id === 'research-door')
    if (it) it.label = 'Research wing unlocked'
    return true
  }

  openContainer(id) {
    const state = this.props.containers.get(id)
    const it = this.interactables.find((i) => i.kind === 'container' && i.id === id)
    if (it) it.opened = true
    if (state) state.opened = true
  }

  setExtractionActive(active) {
    this.extractionActive = active
    if (this.extractLight) {
      this.extractLight.color.set(active ? 0xffa14d : 0x6ce8ff)
      this.extractLight.intensity = active ? 85 : 65
    }
  }

  setQuality(q) {
    this.quality = q
    if (this.stars) this.stars.visible = q !== 'low'
    if (this.dirLight) this.dirLight.castShadow = q !== 'low'
    // quality only changes shadow resolution on next frame; acceptable at runtime
    if (this.dirLight && q !== 'low') {
      this.dirLight.shadow.mapSize.set(q === 'high' ? 2048 : 1024, q === 'high' ? 2048 : 1024)
      if (this.dirLight.shadow.map) { this.dirLight.shadow.map.dispose(); this.dirLight.shadow.map = null }
    }
  }

  /* ------------------------------------------------------------------------ */
  update(dt, playerPos, enemies) {
    this.time += dt
    const t = this.time

    for (const d of this.doors) d.update(dt, t, playerPos, enemies)
    for (const fn of this.anims) fn(dt, t)

    for (const w of this.props.warningSprites) {
      if (!w.active) continue
      w.sprite.material.opacity = w.base * (0.55 + Math.sin(t * w.speed + w.phase) * 0.35)
    }

    for (const c of this.props.containers.values()) {
      const target = c.opened ? 1 : 0
      c.open = (c.open || 0) + (target - (c.open || 0)) * Math.min(1, dt * 4)
      c.lid.rotation.x = -c.open * 1.35
      c.spr.material.opacity = c.opened ? 0.05 : 0.2 + Math.sin(t * 2.5) * 0.04
    }

    // screen shimmer (shared materials)
    const shimmer = 0.9 + Math.sin(t * 16) * 0.02 + Math.sin(t * 2.1) * 0.03
    this.mats.screenA.color.setScalar(shimmer)
    this.mats.screenB.color.setScalar(shimmer * 0.97)
    this.mats.screenC.color.setScalar(shimmer * 1.02)
  }
}
