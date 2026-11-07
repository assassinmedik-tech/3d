import * as THREE from 'three'
import { makeSprite, signTexture, rand } from './materials.js'

/* -------------------------------------------------------------------------- */
/* Prop factory — every prop shares tiny geometries and materials.            */
/* -------------------------------------------------------------------------- */
export class Props {
  constructor({ scene, mats, batch, addCollider, interactables, glowTex, addAnim }) {
    this.scene = scene
    this.m = mats
    this.batch = batch
    this.addCollider = addCollider
    this.interactables = interactables
    this.glowTex = glowTex
    this.addAnim = addAnim
    this.containers = new Map()
    this.warningSprites = []
    this.screens = []
  }

  contact(x, z, sx, sz) {
    this.batch.shadow(x, z, sx, sz, this.m.shadow)
  }

  sprite(x, y, z, color, scale = 1.4, opacity = 0.65) {
    const s = makeSprite(this.glowTex, color, scale, opacity)
    s.position.set(x, y, z)
    this.scene.add(s)
    return s
  }

  /* ----------------------------- crates ---------------------------------- */
  crate(x, z, size = 1.2, options = {}) {
    const { y = 0, rot = 0, material = this.m.crate, lid = true, label = true, shadow = true } = options
    const h = size * 0.92
    this.batch.box(size, h, size, material, x, y + h / 2, z, rot)
    // corner rails
    const t = 0.075
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      this.batch.box(t, h + 0.03, t, this.m.trimDark, x + sx * (size / 2 - t / 2), y + h / 2, z + sz * (size / 2 - t / 2), rot)
    }
    if (lid) {
      this.batch.box(size * 0.94, 0.06, size * 0.94, this.m.trimDark, x, y + h + 0.02, z, rot)
      this.batch.box(size * 0.5, 0.035, 0.12, this.m.hazard, x, y + h + 0.06, z + size * 0.26, rot)
    }
    if (label) {
      this.batch.box(size * 0.38, size * 0.22, 0.02, this.m.hazard, x, y + h * 0.55, z + size / 2 + 0.03, rot)
      // stencil bars
      this.batch.box(size * 0.22, 0.03, 0.025, this.m.rubber, x, y + h * 0.55 + 0.06, z + size / 2 + 0.045, rot)
    }
    if (shadow) this.contact(x, z, size * 1.4, size * 1.4)
    if (rot === 0 || Math.abs(Math.sin(rot)) < 0.01) this.addCollider(x, z, size, size, { sight: h > 1.7 })
    else this.addCollider(x, z, size, size, { sight: h > 1.7 })
    return y + h
  }

  crateStack(x, z, scale = 1, options = {}) {
    const { rot = 0, material = this.m.crate } = options
    const s = 1.25 * scale
    this.crate(x, z, s, { rot, material })
    this.crate(x + s * 0.65, z + s * 0.12, s * 0.78, { y: 0, rot, material })
    this.crate(x + s * 0.3, z - s * 0.3, s * 0.9, { y: s * 0.92, rot, material })
    return s * 0.92 + s * 0.82
  }

  barrel(x, z, options = {}) {
    const { color = this.m.crateOlive, y = 0 } = options
    this.batch.cyl(0.36, 0.38, 1.1, 10, color, x, y + 0.55, z)
    this.batch.cyl(0.39, 0.39, 0.06, 10, this.m.trimDark, x, y + 0.18, z)
    this.batch.cyl(0.39, 0.39, 0.06, 10, this.m.trimDark, x, y + 0.92, z)
    this.batch.cyl(0.3, 0.3, 0.03, 10, this.m.emissiveOrange, x, y + 1.12, z)
    this.addCollider(x, z, 0.8, 0.8, { sight: false })
    this.contact(x, z, 1.1, 1.1)
  }

  desk(x, z, rot = 0, options = {}) {
    const { w = 2.6, d = 0.95, h = 1.0, material = this.m.trimDark } = options
    const alongX = Math.abs(Math.cos(rot)) > 0.5
    const sx = alongX ? w : d
    const sz = alongX ? d : w
    this.batch.box(sx, 0.1, sz, material, x, h, z, rot)
    this.batch.box(sx * 0.94, 0.04, sz * 0.9, this.m.floorMetal, x, h + 0.06, z, rot)
    // legs
    for (const a of [-1, 1]) for (const b of [-1, 1]) {
      this.batch.box(0.08, h, 0.08, this.m.trim, x + a * (sx / 2 - 0.12), h / 2, z + b * (sz / 2 - 0.12), rot)
    }
    // modesty panel
    this.batch.box(sx * 0.8, 0.5, 0.06, this.m.wallDark, x, h - 0.35, z + (alongX ? 0 : 0), rot)
    this.batch.box(sx * 0.5, 0.03, 0.03, this.m.emissiveCyanDim, x, h - 0.1, z + (alongX ? sz / 2 - 0.02 : 0), rot)
    this.contact(x, z, sx * 1.3, sz * 1.8)
    this.addCollider(x, z, sx, sz, { sight: false })
    return h + 0.1
  }

  monitor(x, y, z, rot = 0, variant = 0, scale = 1) {
    const screenMat = variant === 1 ? this.m.screenB : variant === 2 ? this.m.screenC : this.m.screenA
    const g = new THREE.Group()
    g.position.set(x, y, z)
    g.rotation.y = rot
    // stand + neck
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.16 * scale, 0.2 * scale, 0.04, 8), this.m.trimDark)
    base.position.y = 0.02
    const neck = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.26, 0.07), this.m.trim)
    neck.position.set(0, 0.15, -0.05)
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.78 * scale, 0.5 * scale, 0.07), this.m.screenBlack)
    frame.position.set(0, 0.48 * scale, 0.02)
    frame.rotation.x = -0.08
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.68 * scale, 0.4 * scale), screenMat)
    screen.position.set(0, 0.48 * scale, 0.06)
    screen.rotation.x = -0.08
    g.add(base, neck, frame, screen)
    this.scene.add(g)
    this.screens.push({ mesh: screen, base: 1, phase: Math.random() * 6.28 })
    return g
  }

  chair(x, z, rot = 0) {
    this.batch.cyl(0.34, 0.34, 0.09, 8, this.m.rubber, x, 0.46, z, 0, rot)
    this.batch.box(0.09, 0.42, 0.09, this.m.trimDark, x, 0.22, z, rot)
    this.batch.cyl(0.3, 0.34, 0.06, 8, this.m.trimDark, x, 0.05, z)
    this.batch.box(0.62, 0.55, 0.09, this.m.crateDark, x, 0.86, z + (Math.cos(rot) > 0.5 ? 0.34 : -0.34), rot)
    this.contact(x, z, 1.1, 1.1)
  }

  /* ----------------------------- storage --------------------------------- */
  shelf(x, z, rot = 0, width = 3.2, options = {}) {
    const { h = 2.5 } = options
    const alongX = Math.abs(Math.cos(rot)) > 0.5
    const sx = alongX ? width : 0.8
    const sz = alongX ? 0.8 : width
    this.batch.box(0.1, h, 0.1, this.m.trim, x - sx / 2, h / 2, z - sz / 2, rot)
    this.batch.box(0.1, h, 0.1, this.m.trim, x + sx / 2, h / 2, z - sz / 2, rot)
    this.batch.box(0.1, h, 0.1, this.m.trim, x - sx / 2, h / 2, z + sz / 2, rot)
    this.batch.box(0.1, h, 0.1, this.m.trim, x + sx / 2, h / 2, z + sz / 2, rot)
    for (let i = 0; i < 3; i++) {
      const y = 0.35 + i * 0.85
      this.batch.box(sx, 0.07, sz, this.m.floorMetal, x, y, z, rot)
      // crates & bins on shelf
      const n = 3
      for (let j = 0; j < n; j++) {
        const bx = (alongX ? x - width * 0.32 + j * width * 0.32 : x)
        const bz = (alongX ? z : z - width * 0.32 + j * width * 0.32)
        if (Math.random() > 0.18) {
          this.batch.box(0.52, 0.38, 0.5, Math.random() > 0.5 ? this.m.crate : this.m.crateDark, bx, y + 0.22, bz, rot)
          if (Math.random() > 0.5) this.batch.box(0.18, 0.04, 0.02, Math.random() > 0.5 ? this.m.hazard : this.m.emissiveOrange, bx, y + 0.24, bz + 0.26, rot)
        }
      }
    }
    this.batch.box(sx, 0.04, 0.12, this.m.emissiveCyanDim, x, h - 0.08, z + sz / 2, rot)
    this.addCollider(x, z, sx, sz, { sight: true })
    this.contact(x, z, sx * 1.15, sz * 2)
  }

  serverRack(x, z, rot = 0, variant = 0) {
    const w = 1.15, h = 2.35, d = 0.85
    const alongX = Math.abs(Math.cos(rot)) > 0.5
    const sx = alongX ? w : d
    const sz = alongX ? d : w
    this.batch.box(sx, h, sz, this.m.wallDark, x, h / 2, z, rot)
    this.batch.box(sx * 0.92, h * 0.9, 0.04, this.m.floorMetal, x, h / 2, z + (alongX ? sz / 2 : 0), rot)
    for (let i = 0; i < 7; i++) {
      this.batch.box(sx * 0.72, 0.05, 0.03, this.m.trim, x, 0.35 + i * 0.26, z + (alongX ? sz / 2 + 0.02 : 0), rot)
      if (i % 2 === 0) this.batch.box(0.04, 0.02, 0.025, i === 2 ? this.m.emissiveOrange : this.m.emissiveCyan, x + sx * 0.28, 0.35 + i * 0.26, z + (alongX ? sz / 2 + 0.04 : 0), rot)
    }
    this.batch.box(sx * 0.4, 0.03, 0.04, this.m.emissiveCyanDim, x, h - 0.12, z + (alongX ? sz / 2 + 0.03 : 0), rot)
    this.batch.box(0.05, 0.05, 0.05, variant === 1 ? this.m.emissiveOrange : this.m.emissiveCyan, x + sx * 0.3, h - 0.14, z + (alongX ? sz / 2 + 0.03 : 0), rot)
    this.addCollider(x, z, sx, sz, { sight: true })
    this.contact(x, z, sx * 1.4, sz * 1.5)
  }

  /* ------------------------------ pipes ---------------------------------- */
  pipe(x1, y1, z1, x2, y2, z2, radius = 0.11, material = this.m.pipe) {
    const a = new THREE.Vector3(x1, y1, z1)
    const b = new THREE.Vector3(x2, y2, z2)
    const mid = a.clone().add(b).multiplyScalar(0.5)
    const dir = b.clone().sub(a)
    const len = dir.length()
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
    const e = new THREE.Euler().setFromQuaternion(q)
    this.batch.addGeo(new THREE.CylinderGeometry(radius, radius, len, 8), material, [mid.x, mid.y, mid.z], [e.x, e.y, e.z])
    return mid
  }

  pipeCluster(x, z, rot = 0, count = 3) {
    const alongX = Math.abs(Math.cos(rot)) > 0.5
    for (let i = 0; i < count; i++) {
      const off = i * 0.24
      if (alongX) {
        this.pipe(x - 2.4, 3.2 - off, z, x + 2.4, 3.2 - off, z, 0.09 + (i % 2) * 0.03, i % 2 ? this.m.pipe : this.m.pipeDark)
      } else {
        this.pipe(x, 3.2 - off, z - 2.4, x, 3.2 - off, z + 2.4, 0.09 + (i % 2) * 0.03, i % 2 ? this.m.pipe : this.m.pipeDark)
      }
    }
  }

  conduit(x, z, length, rot = 0, color = this.m.emissiveCyanDim) {
    const alongX = Math.abs(Math.cos(rot)) > 0.5
    const sx = alongX ? length : 0.04
    const sz = alongX ? 0.04 : length
    this.batch.box(sx, 0.035, sz, color, x, 0.08, z, rot)
  }

  cable(x1, z1, x2, z2, y = 0.05) {
    const dx = x2 - x1, dz = z2 - z1
    const len = Math.hypot(dx, dz)
    const ry = Math.atan2(dx, dz)
    this.pipe(x1, y, z1, x2, y, z2, 0.025, this.m.rubber)
    this.batch.box(0.05, 0.03, 0.05, this.m.trimDark, x1, y, z1)
    this.batch.box(0.05, 0.03, 0.05, this.m.trimDark, x2, y, z2)
    void len; void ry
  }

  /* ------------------------------ lighting ------------------------------- */
  ceilingLamp(x, z, color = 'cyan', size = 1.0, options = {}) {
    const mat = color === 'orange' ? this.m.emissiveOrange : color === 'white' ? this.m.emissiveWhite : color === 'red' ? this.m.emissiveRed : this.m.emissiveCyan
    const poolMat = color === 'orange' ? this.m.poolOrange : this.m.poolWhite
    this.batch.box(0.24, 0.08, 2.2 * size, this.m.trimDark, x, 4.12, z)
    this.batch.box(0.16, 0.04, 1.9 * size, mat, x, 4.065, z)
    this.sprite(x, 3.98, z, color === 'orange' ? 0xffab5c : color === 'white' ? 0xd6f8ff : 0x6ce8ff, 2.3 * size, 0.22)
    // pool of light on the floor
    this.batch.addGeo(
      new THREE.PlaneGeometry(3.4 * size, 5.4 * size),
      poolMat,
      [x, 0.018, z],
      [-Math.PI / 2, 0, 0],
    )
    if (options.fixture !== false) {
      for (const s of [-1, 1]) this.batch.box(0.06, 0.3, 0.06, this.m.trimDark, x + s * 0.7 * size, 4.18, z + 1.04 * size)
    }
  }

  warningLight(x, y, z, color = 0xff7a2a, options = {}) {
    const mat = color === 0xff3a30 ? this.m.emissiveRed : this.m.emissiveOrange
    this.batch.box(0.2, 0.12, 0.1, this.m.trimDark, x, y, z)
    this.batch.box(0.13, 0.06, 0.02, mat, x, y, z + 0.06)
    const spr = this.sprite(x, y, z + 0.12, color, 1.0, 0.55)
    this.warningSprites.push({ sprite: spr, base: 0.55, phase: Math.random() * 6.2, speed: options.speed || 2.2, active: true })
  }

  sign(text, sub, x, y, z, ry, w = 1.8, h = 0.56, accent = '#6ce8ff') {
    const mat = new THREE.MeshBasicMaterial({
      map: signTexture(text, sub, accent), transparent: true, side: THREE.DoubleSide,
      depthWrite: false,
    })
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat)
    mesh.position.set(x, y, z)
    mesh.rotation.y = ry
    this.scene.add(mesh)
    return mesh
  }

  /* --------------------------- interactive props -------------------------- */
  terminal(x, y, z, rot, data) {
    const g = new THREE.Group()
    g.position.set(x, y, z)
    g.rotation.y = rot
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.9, 0.7), this.m.trimDark)
    base.position.y = 0.45
    const collar = new THREE.Mesh(new THREE.BoxGeometry(1.12, 0.06, 0.76), this.m.trim)
    collar.position.y = 0.93
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.94, 0.62, 0.1), this.m.screenBlack)
    frame.position.set(0, 1.22, 0.05)
    frame.rotation.x = -0.26
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 0.5), this.m.screenA)
    screen.position.set(0, 1.23, 0.115)
    screen.rotation.x = -0.26
    const led = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.025, 0.03), this.m.emissiveCyan)
    led.position.set(0, 0.98, 0.37)
    const glow = makeSprite(this.glowTex, 0x6ce8ff, 1.5, 0.24)
    glow.position.set(0, 1.24, 0.22)
    g.add(base, collar, frame, screen, led, glow)
    this.scene.add(g)
    this.addCollider(x, z, 1.2, 0.85, { sight: false })
    this.contact(x, z, 1.6, 1.2)
    const it = {
      kind: 'terminal', id: data.id, x, y: y + 1.2, z, radius: 2.1,
      label: data.label || 'Access terminal', title: data.title, source: data.source, body: data.body,
      used: false,
    }
    this.interactables.push(it)
    return it
  }

  locker(x, z, rot = 0, options = {}) {
    const { id = 'hide-locker', label = 'Hide in service locker', type = 'locker', hideOffset = 0.25 } = options
    const w = 1.05, h = 2.45, d = 0.72
    const alongX = Math.abs(Math.cos(rot)) > 0.5
    const sx = alongX ? w : d
    const sz = alongX ? d : w
    this.batch.box(sx, h, sz, this.m.wallDark, x, h / 2, z, rot)
    this.batch.box(sx * 1.08, 0.08, sz * 1.12, this.m.trim, x, h - 0.02, z, rot)
    this.batch.box(sx * 1.04, 0.06, sz * 1.08, this.m.trimDark, x, 0.04, z, rot)
    // door split & vent (front face is the local +Z transformed by rot)
    const fx2 = Math.sin(rot), fz2 = Math.cos(rot)
    const faceOffX = fx2 * (sx / 2 + 0.016)
    const faceOffZ = fz2 * (sz / 2 + 0.016)
    if (alongX) {
      this.batch.box(sx * 0.98, h * 0.92, 0.025, this.m.wallPanel, x + faceOffX, h / 2, z + faceOffZ)
    } else {
      this.batch.box(0.025, h * 0.92, sz * 0.98, this.m.wallPanel, x + faceOffX, h / 2, z + faceOffZ)
    }
    for (let i = 0; i < 5; i++) {
      if (alongX) this.batch.box(0.4, 0.025, 0.02, this.m.rubber, x + faceOffX * 1.35, 1.75 + i * 0.05, z + faceOffZ * 1.35)
      else this.batch.box(0.02, 0.025, 0.4, this.m.rubber, x + faceOffX * 1.35, 1.75 + i * 0.05, z + faceOffZ * 1.35)
    }
    const handleX = x + faceOffX * 3.2 + (alongX ? 0.3 : 0)
    const handleZ = z + faceOffZ * 3.2 + (alongX ? 0 : 0.3)
    this.batch.box(0.08, 0.24, 0.06, this.m.emissiveCyan, handleX, 1.2, handleZ)
    this.batch.box(0.18, 0.04, 0.02, this.m.emissiveOrange, x - faceOffX * 2.4, 2.2, z - faceOffZ * 2.4)
    this.addCollider(x, z, sx, sz, { sight: true })
    this.contact(x, z, sx * 1.5, sz * 1.8)
    const it = {
      kind: 'hide', id, label, type,
      x: x + fx2 * (type === 'locker' ? 0.65 : hideOffset),
      y: 1.2,
      z: z + fz2 * (type === 'locker' ? 0.65 : hideOffset),
      radius: 2.0,
      hidePos: { x: x + fx2 * 0.35, z: z + fz2 * 0.35, yaw: Math.atan2(-fx2, -fz2) },
      hideType: type,
    }
    this.interactables.push(it)
    return it
  }

  crateHide(x, z, rot = 0, options = {}) {
    const { id = 'hide-crates' } = options
    this.crate(x, z, 1.4, { rot, material: this.m.crateDark })
    this.crate(x + 1.3, z + 0.2, 1.4, { rot, material: this.m.crate })
    this.crate(x + 0.65, z - 1.15, 1.1, { rot, material: this.m.crateOlive })
    const fx = Math.sin(rot), fz = Math.cos(rot)
    const hideX = x + fx * 1.4
    const hideZ = z + fz * 1.4
    const it = {
      kind: 'hide', id, label: 'Conceal behind cargo crates', type: 'crates',
      x: hideX, y: 1.1, z: hideZ, radius: 2.2,
      hidePos: { x: hideX, z: hideZ, yaw: Math.atan2(-fx, -fz) },
      hideType: 'crates',
    }
    this.interactables.push(it)
  }

  containerBox(x, z, rot, id, loot, label = 'Search storage container') {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    g.rotation.y = rot
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.9, 1.0), this.m.crateDark)
    body.position.y = 0.45
    const lidPivot = new THREE.Group()
    lidPivot.position.set(0, 0.92, -0.5)
    const lid = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.13, 1.06), this.m.trimDark)
    lid.position.set(0, 0.06, 0.5)
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.07, 0.06), this.m.emissiveOrange)
    handle.position.set(0, 0.15, 0.53)
    lidPivot.add(lid, handle)
    const strip = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.035, 0.03), this.m.emissiveCyan)
    strip.position.set(0, 0.72, 0.512)
    const corners = []
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const c = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.96, 0.09), this.m.trim)
      c.position.set(sx * 0.79, 0.48, sz * 0.47)
      corners.push(c)
    }
    g.add(body, lidPivot, strip, ...corners)
    const spr = makeSprite(this.glowTex, 0xffa14d, 1.0, 0.22)
    spr.position.set(0, 1.1, 0)
    g.add(spr)
    this.scene.add(g)
    this.addCollider(x, z, 1.8, 1.2, { sight: false })
    this.contact(x, z, 2.4, 1.8)
    const state = { opened: false, lid: lidPivot, group: g, spr }
    this.containers.set(id, state)
    this.interactables.push({ kind: 'container', id, x, y: 0.9, z, radius: 2.1, label, loot, opened: false })
    return state
  }

  specimenTank(x, z, color = 0x5fffd0) {
    const group = new THREE.Group()
    group.position.set(x, 0, z)
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 2.3, 14, 1, true), this.m.glass)
    glass.position.y = 1.45
    const inner = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 1.9, 10),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.25, depthWrite: false, blending: THREE.AdditiveBlending }),
    )
    inner.position.y = 1.42
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.05, 0.35, 12), this.m.trimDark)
    base.position.y = 0.18
    const ringTop = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.18, 12), this.m.trim)
    ringTop.position.y = 2.68
    const ringGlow = new THREE.Mesh(new THREE.TorusGeometry(0.76, 0.025, 4, 18), this.m.emissiveCyan)
    ringGlow.position.y = 2.55
    ringGlow.rotation.x = Math.PI / 2
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.6, 0.22, 10), this.m.trimDark)
    cap.position.y = 2.86
    const spr = makeSprite(this.glowTex, color, 2.4, 0.18)
    spr.position.y = 1.5
    group.add(glass, inner, base, ringTop, ringGlow, cap, spr)
    this.scene.add(group)
    this.addCollider(x, z, 1.8, 1.8, { sight: false })
    this.contact(x, z, 2.4, 2.4)
    this.addAnim((dt, t) => { inner.scale.y = 1 + Math.sin(t * 1.3 + x) * 0.03; spr.material.opacity = 0.16 + Math.sin(t * 2 + x) * 0.04 })
  }

  generator(x, z, rot = 0) {
    // static body
    this.batch.cyl(1.55, 1.75, 0.3, 14, this.m.trimDark, x, 0.15, z)
    this.batch.cyl(1.28, 1.4, 2.35, 14, this.m.wallDark, x, 1.5, z)
    this.batch.cyl(1.48, 1.48, 0.14, 14, this.m.trim, x, 2.72, z)
    this.batch.cyl(0.9, 0.9, 0.2, 14, this.m.trimDark, x, 2.88, z)
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2
      this.batch.box(0.28, 1.5, 0.28, this.m.trimDark, x + Math.cos(a) * 1.45, 1.35, z + Math.sin(a) * 1.45, a)
    }
    // emissive rings
    for (let i = 0; i < 3; i++) {
      this.batch.addGeo(new THREE.TorusGeometry(1.32, 0.035, 4, 20), this.m.emissiveOrange, [x, 0.7 + i * 0.7, z], [Math.PI / 2, 0, 0])
    }
    // gauges
    for (let i = 0; i < 4; i++) {
      const a = -0.7 + i * 0.45
      this.batch.cyl(0.11, 0.11, 0.03, 10, this.m.emissiveCyan, x + Math.cos(a) * 1.62, 1.55, z + Math.sin(a) * 1.62, Math.PI / 2, 0, a)
      this.batch.cyl(0.14, 0.14, 0.05, 10, this.m.trimDark, x + Math.cos(a) * 1.58, 1.55, z + Math.sin(a) * 1.58, Math.PI / 2, 0, a)
    }
    // pipes to ceiling
    this.pipe(x - 0.7, 2.8, z, x - 0.7, 4.15, z, 0.13, this.m.pipe)
    this.pipe(x + 0.7, 2.8, z, x + 0.7, 4.15, z, 0.13, this.m.pipe)
    this.addCollider(x, z, 3.4, 3.4, { sight: true })
    this.contact(x, z, 4.4, 4.4)
    // rotating inner ring
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.05, 4, 20), this.m.emissiveOrange)
    ring.position.set(x, 1.8, z)
    ring.rotation.x = Math.PI / 2
    this.scene.add(ring)
    const core = makeSprite(this.glowTex, 0xff8a2a, 3.2, 0.2)
    core.position.set(x, 1.6, z)
    this.scene.add(core)
    this.addAnim((dt, t) => {
      ring.rotation.z += dt * 0.9
      ring.scale.setScalar(1 + Math.sin(t * 3) * 0.035)
      core.material.opacity = 0.15 + Math.sin(t * 2.4) * 0.05
    })
    this.warningLight(x + 2.1, 2.7, z + 1.1, 0xff7a2a)
    void rot
  }

  holoTable(x, z) {
    this.batch.cyl(1.65, 1.9, 0.22, 16, this.m.trimDark, x, 0.11, z)
    this.batch.cyl(0.5, 0.7, 0.95, 12, this.m.trim, x, 0.65, z)
    this.batch.addGeo(new THREE.TorusGeometry(1.4, 0.05, 5, 26), this.m.emissiveCyan, [x, 0.98, z], [Math.PI / 2, 0, 0])
    this.batch.addGeo(new THREE.TorusGeometry(1.12, 0.018, 4, 26), this.m.emissiveCyanDim, [x, 1.0, z], [Math.PI / 2, 0, 0])
    // consoles around the table
    for (let i = 0; i < 3; i++) {
      const a = i * Math.PI * 2 / 3 + 0.5
      this.batch.box(0.75, 0.75, 0.55, this.m.trimDark, x + Math.cos(a) * 2.35, 0.42, z + Math.sin(a) * 2.35, -a)
      this.batch.box(0.62, 0.04, 0.4, this.m.emissiveCyanDim, x + Math.cos(a) * 2.35, 0.82, z + Math.sin(a) * 2.35, -a)
    }
    this.addCollider(x, z, 3.6, 3.6, { sight: false })
    this.contact(x, z, 4.4, 4.4)
    const holoGroup = new THREE.Group()
    holoGroup.position.set(x, 1.85, z)
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.72, 1),
      new THREE.MeshBasicMaterial({ color: 0x79efff, wireframe: true, transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending, depthWrite: false }),
    )
    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.32, 0),
      new THREE.MeshBasicMaterial({ color: 0xd8ffff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false }),
    )
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(1.02, 0.012, 3, 32),
      new THREE.MeshBasicMaterial({ color: 0x6ce8ff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }),
    )
    orbit.rotation.x = Math.PI / 2.4
    const spr = makeSprite(this.glowTex, 0x6ce8ff, 3.0, 0.2)
    holoGroup.add(wire, inner, orbit, spr)
    this.scene.add(holoGroup)
    this.addAnim((dt, t) => {
      wire.rotation.y += dt * 0.3
      wire.rotation.x = Math.sin(t * 0.4) * 0.12
      inner.rotation.y -= dt * 0.5
      orbit.rotation.z += dt * 0.25
      holoGroup.position.y = 1.85 + Math.sin(t * 1.2) * 0.04
    })
  }

  extractionPad(x, z) {
    const y = 0.02
    this.batch.addGeo(new THREE.CircleGeometry(3.8, 36), this.m.floorExtract, [x, y, z], [-Math.PI / 2, 0, 0])
    this.batch.addGeo(new THREE.RingGeometry(3.18, 3.32, 36), this.m.emissiveCyan, [x, y + 0.02, z], [-Math.PI / 2, 0, 0])
    this.batch.addGeo(new THREE.RingGeometry(2.5, 2.56, 36), this.m.emissiveCyanDim, [x, y + 0.02, z], [-Math.PI / 2, 0, 0])
    this.batch.addGeo(new THREE.RingGeometry(1.55, 1.63, 36), this.m.emissiveOrange, [x, y + 0.02, z], [-Math.PI / 2, 0, 0])
    // pad chevrons
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4
      this.batch.box(0.22, 0.025, 0.8, this.m.emissiveCyanDim, x + Math.cos(a) * 1.95, y + 0.03, z + Math.sin(a) * 1.95, a)
    }
    // bollard lights
    for (let i = 0; i < 4; i++) {
      const a = i * Math.PI / 2 + Math.PI / 4
      const bx = x + Math.cos(a) * 4.5
      const bz = z + Math.sin(a) * 4.5
      this.batch.box(0.34, 0.85, 0.34, this.m.trimDark, bx, 0.42, bz)
      this.batch.box(0.16, 0.1, 0.2, this.m.emissiveCyan, bx, 0.9, bz)
      this.sprite(bx, 1.0, bz, 0x6ce8ff, 1.0, 0.5)
    }
    this.contact(x, z, 9, 9)

    // beacon mast
    this.batch.cyl(0.42, 0.55, 0.5, 10, this.m.trimDark, x, 3.0, z)
    this.batch.cyl(0.16, 0.2, 2.4, 8, this.m.trim, x, 1.5, z)
    this.batch.addGeo(new THREE.TorusGeometry(0.65, 0.03, 4, 18), this.m.emissiveCyan, [x, 2.6, z], [Math.PI / 2, 0, 0])
    const beacon = new THREE.Group()
    beacon.position.set(x, 2.72, z)
    const bladeMat = new THREE.MeshBasicMaterial({ color: 0x8ff6ff, transparent: true, opacity: 0.24, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
    for (let i = 0; i < 2; i++) {
      const blade = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 0.5), bladeMat)
      blade.position.x = i === 0 ? 2.1 : -2.1
      blade.rotation.y = Math.PI / 2
      beacon.add(blade)
    }
    const beaconCore = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), new THREE.MeshBasicMaterial({ color: 0xd8ffff }))
    beacon.add(beaconCore)
    const beaconGlow = makeSprite(this.glowTex, 0x6ce8ff, 3.2, 0.4)
    beacon.add(beaconGlow)
    this.scene.add(beacon)
    this.addAnim((dt) => { beacon.rotation.y += dt * 0.8 })
    // Some structural overhead lights
    this.batch.addGeo(new THREE.BoxGeometry(7.6, 0.1, 0.18), this.m.trimDark, [x, 3.6, z + 4.2], [0, 0, 0])
    this.warningLight(x - 5.9, 2.6, z + 2.7, 0xff7a2a)

    return { x, z, beacon }
  }

  railing(x, z, length, rot = 0, options = {}) {
    const { color = this.m.trim } = options
    const alongX = Math.abs(Math.cos(rot)) > 0.5
    const posts = Math.max(2, Math.round(length / 2.2))
    for (let i = 0; i <= posts; i++) {
      const t = i / posts - 0.5
      const px = alongX ? x + t * length : x
      const pz = alongX ? z : z + t * length
      this.batch.box(0.09, 1.15, 0.09, color, px, 0.57, pz)
    }
    if (alongX) {
      this.batch.box(length, 0.06, 0.06, color, x, 1.1, z)
      this.batch.box(length, 0.04, 0.04, this.m.emissiveCyanDim, x, 0.65, z)
    } else {
      this.batch.box(0.06, 0.06, length, color, x, 1.1, z)
      this.batch.box(0.04, 0.04, length, this.m.emissiveCyanDim, x, 0.65, z)
    }
    // collider thin
    if (alongX) this.addCollider(x, z, length, 0.18, { sight: false })
    else this.addCollider(x, z, 0.18, length, { sight: false })
  }

  dropship(x, z, rot = 0) {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    g.rotation.y = rot
    // hull
    const hull = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.8, 1.7), this.m.wallDark)
    hull.position.y = 1.4
    const nose = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.65, 1.35), this.m.wallPanel)
    nose.position.set(2.05, 1.32, 0)
    nose.rotation.z = -0.16
    const cockpit = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.35, 1.05), new THREE.MeshBasicMaterial({ color: 0x3fd9ef, transparent: true, opacity: 0.6 }))
    cockpit.position.set(2.4, 1.5, 0)
    cockpit.rotation.z = -0.16
    // engines
    for (const s of [-1, 1]) {
      const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.44, 1.6, 8), this.m.wallPanel)
      pod.rotation.z = Math.PI / 2
      pod.position.set(-0.8, 1.4, s * 1.35)
      const glow = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.1, 8), this.m.emissiveCyan)
      glow.rotation.z = Math.PI / 2
      glow.position.set(-1.62, 1.4, s * 1.35)
      const wing = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 1.1), this.m.trimDark)
      wing.position.set(-0.4, 1.32, s * 1.25)
      g.add(pod, glow, wing)
    }
    // struts
    for (const sx of [-1.1, 1.1]) for (const sz of [-0.7, 0.7]) {
      const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.0, 6), this.m.trim)
      strut.position.set(sx, 0.5, sz)
      g.add(strut)
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.4), this.m.trimDark)
      foot.position.set(sx, 0.05, sz)
      g.add(foot)
    }
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.05, 0.02), this.m.emissiveCyan)
    stripe.position.set(0, 1.4, 0.86)
    const spr = makeSprite(this.glowTex, 0x6ce8ff, 4, 0.12)
    spr.position.set(0, 1.5, 0)
    g.add(hull, nose, cockpit, stripe, spr)
    this.scene.add(g)
    this.addCollider(x, z, 4.2, 2.6, { sight: true })
    this.contact(x, z, 5.2, 4.2)
    this.addAnim((dt, t) => { spr.material.opacity = 0.1 + Math.sin(t * 1.7) * 0.03 })
  }

  workbench(x, z, rot = 0) {
    const alongX = Math.abs(Math.cos(rot)) > 0.5
    const sx = alongX ? 3.2 : 0.9
    const sz = alongX ? 0.9 : 3.2
    this.batch.box(sx, 0.1, sz, this.m.trimDark, x, 0.92, z, rot)
    this.batch.box(sx * 0.95, 0.05, sz * 0.88, this.m.floorMetal, x, 0.98, z, rot)
    for (const a of [-1, 1]) {
      this.batch.box(0.1, 0.92, 0.1, this.m.trim, x + (alongX ? a * (sx / 2 - 0.15) : 0), 0.46, z + (alongX ? 0 : a * (sz / 2 - 0.15)), rot)
    }
    this.addCollider(x, z, sx, sz, { sight: false })
    this.contact(x, z, sx * 1.2, sz * 1.6)
    return 1.0
  }

  toolRack(x, y, z, rot = 0) {
    this.batch.box(1.6, 1.0, 0.06, this.m.wallDark, x, y, z, rot)
    for (let i = 0; i < 5; i++) {
      const ox = -0.6 + i * 0.3
      this.batch.box(0.05, 0.26 + (i % 3) * 0.12, 0.04, i % 2 ? this.m.trim : this.m.hazard, x + ox, y, z + 0.06, rot)
    }
  }

  pipeWork(x, z) {
    this.pipeCluster(x, z, 0, 3)
    this.pipeCluster(x, z + 0.4, Math.PI / 2, 2)
    // valve wheel
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.04, 5, 14), this.m.emissiveOrange)
    wheel.position.set(x + 1.7, 2.2, z + 1.2)
    wheel.rotation.y = Math.PI / 2
    this.scene.add(wheel)
    this.batch.box(0.1, 0.1, 1.1, this.m.pipe, x + 1.7, 2.2, z + 0.7, 0, Math.PI / 2)
  }

  /* ------------------------------ ambience -------------------------------- */
  dust(count = 170) {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = rand(-22, 32)
      positions[i * 3 + 1] = rand(0.3, 3.9)
      positions[i * 3 + 2] = rand(-32, 28)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const points = new THREE.Points(geo, this.m.dust)
    this.scene.add(points)
    this.addAnim((dt, t) => {
      const pos = geo.attributes.position
      for (let i = 0; i < count; i++) {
        const y = pos.getY(i) + dt * (0.02 + (i % 5) * 0.004)
        pos.setY(i, y > 4.0 ? 0.2 : y)
        pos.setX(i, pos.getX(i) + Math.sin(t * 0.2 + i) * dt * 0.02)
      }
      pos.needsUpdate = true
    })
  }
}
