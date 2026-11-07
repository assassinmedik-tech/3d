import * as THREE from 'three'
import { glowTexture, makeSprite } from './world/materials.js'

/* ========================================================================== */
/* Item catalogue                                                             */
/* ========================================================================== */
export const ITEMS = {
  'doc-lab': {
    name: 'Voss Field Log', type: 'RESEARCH DOCUMENT', rarity: 'rare', rarityLabel: 'RARE',
    research: true, credits: 160, color: 0x6ce8ff, shape: 'document',
    desc: 'Dr. Voss’s final shift log. Proof the outpost received a reply.',
  },
  'doc-storage': {
    name: 'Signal Analysis', type: 'RESEARCH DOCUMENT', rarity: 'rare', rarityLabel: 'RARE',
    research: true, credits: 180, color: 0x6ce8ff, shape: 'document',
    desc: 'Encrypted array telemetry. Required for research validation.',
  },
  'module-research': {
    name: 'Quantum Core', type: 'RARE TECHNOLOGY', rarity: 'legendary', rarityLabel: 'LEGENDARY',
    research: true, credits: 450, color: 0xffa14d, shape: 'module',
    desc: 'Project ECHO’s containment core. A priority recovery asset.',
  },
  'component-lab': {
    name: 'Neural Processor', type: 'ELECTRONIC COMPONENT', rarity: 'uncommon', rarityLabel: 'UNCOMMON',
    research: false, credits: 90, color: 0x7df0b8, shape: 'component',
    desc: 'Prototype processing lattice pulled from the lab server stack.',
  },
  'component-storage': {
    name: 'Optic Sensor Array', type: 'ELECTRONIC COMPONENT', rarity: 'uncommon', rarityLabel: 'UNCOMMON',
    research: false, credits: 100, color: 0x7df0b8, shape: 'component',
    desc: 'Wide-spectrum optical array. Valuable to survey teams.',
  },
  'cell-maint': {
    name: 'Fusion Energy Cell', type: 'ENERGY CELL', rarity: 'uncommon', rarityLabel: 'UNCOMMON',
    research: false, credits: 80, color: 0x7df0b8, shape: 'cell', battery: 45,
    desc: 'Compact fusion cell. Restores suit lamp battery on pickup.',
  },
  'cell-extract': {
    name: 'Beacon Power Cell', type: 'ENERGY CELL', rarity: 'common', rarityLabel: 'COMMON',
    research: false, credits: 60, color: 0x9fb3b8, shape: 'cell', battery: 30,
    desc: 'Spare extraction beacon cell. Still holding a charge.',
  },
}

const RARITY_CLASS = { common: 'r-common', uncommon: 'r-uncommon', rare: 'r-rare', legendary: 'r-legendary' }
export { RARITY_CLASS }

/* ========================================================================== */
/* Models                                                                     */
/* ========================================================================== */
const MAT = {
  metal: new THREE.MeshStandardMaterial({ color: 0x2e3a40, roughness: 0.42, metalness: 0.8 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x10171b, roughness: 0.6, metalness: 0.5 }),
  board: new THREE.MeshStandardMaterial({ color: 0x123326, roughness: 0.7, metalness: 0.25 }),
  paper: new THREE.MeshStandardMaterial({ color: 0xc7d6d6, roughness: 0.9, metalness: 0.05 }),
}

function buildDocument(meta) {
  const g = new THREE.Group()
  const folder = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.055, 0.3), MAT.dark)
  g.add(folder)
  const paper = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.02, 0.25), MAT.paper)
  paper.position.y = 0.035
  g.add(paper)
  const band = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.31), new THREE.MeshBasicMaterial({ color: meta.color }))
  band.position.x = 0.11
  g.add(band)
  const strip = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.012, 0.02), new THREE.MeshBasicMaterial({ color: 0xffa14d }))
  strip.position.set(-0.02, 0.03, 0.135)
  g.add(strip)
  return g
}

function buildComponent(meta) {
  const g = new THREE.Group()
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.05, 0.3), MAT.board)
  g.add(board)
  for (let i = 0; i < 3; i++) {
    const chip = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.08), MAT.dark)
    chip.position.set(-0.11 + i * 0.12, 0.04, 0.05)
    g.add(chip)
  }
  const traceMat = new THREE.MeshBasicMaterial({ color: meta.color })
  for (let i = 0; i < 4; i++) {
    const trace = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.008, 0.01), traceMat)
    trace.position.set(0, 0.03, -0.1 + i * 0.05)
    g.add(trace)
  }
  for (const s of [-1, 1]) {
    const pin = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.02), new THREE.MeshBasicMaterial({ color: 0xffa14d }))
    pin.position.set(s * 0.19, 0.02, 0.12)
    g.add(pin)
  }
  return g
}

function buildCell(meta) {
  const g = new THREE.Group()
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.34, 10), MAT.metal)
  g.add(body)
  const core = new THREE.Mesh(
    new THREE.CylinderGeometry(0.075, 0.075, 0.3, 8),
    new THREE.MeshBasicMaterial({ color: meta.color, transparent: true, opacity: 0.95 }),
  )
  g.add(core)
  for (const s of [-1, 1]) {
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.1, 0.06, 10), MAT.dark)
    cap.position.y = s * 0.19
    g.add(cap)
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.014, 4, 12), new THREE.MeshBasicMaterial({ color: meta.color }))
    ring.rotation.x = Math.PI / 2
    ring.position.y = s * 0.155
    g.add(ring)
  }
  return g
}

function buildModule(meta) {
  const g = new THREE.Group()
  const frame = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.025, 5, 16), MAT.metal)
  frame.rotation.x = Math.PI / 2
  g.add(frame)
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.012, 4, 18), new THREE.MeshBasicMaterial({ color: meta.color }))
  ring2.rotation.x = Math.PI / 2.6
  g.add(ring2)
  const core = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.13, 0),
    new THREE.MeshBasicMaterial({ color: meta.color, transparent: true, opacity: 0.95 }),
  )
  g.add(core)
  const inner = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.19, 0),
    new THREE.MeshBasicMaterial({ color: 0xd9ffff, wireframe: true, transparent: true, opacity: 0.45 }),
  )
  g.add(inner)
  g.userData.core = core
  g.userData.inner = inner
  g.userData.ring2 = ring2
  return g
}

/* ========================================================================== */
/* Loot system                                                                */
/* ========================================================================== */
export class LootSystem {
  constructor(scene, world) {
    this.scene = scene
    this.world = world
    this.items = new Map()
    this.dropCounter = 0
    this.glow = glowTexture()
    let index = 0
    for (const [metaId, anchor] of Object.entries(world.lootAnchors)) {
      this.spawn(metaId, anchor, index++, false)
    }
  }

  spawn(metaId, anchor, index = 0, dropped = false) {
    const meta = ITEMS[metaId]
    if (!meta) return null
    const group = new THREE.Group()
    group.position.set(anchor.x, anchor.y, anchor.z)
    group.rotation.y = Math.random() * 3
    let model
    switch (meta.shape) {
      case 'document': model = buildDocument(meta); break
      case 'component': model = buildComponent(meta); break
      case 'cell': model = buildCell(meta); break
      case 'module': model = buildModule(meta); break
      default: model = buildDocument(meta)
    }
    group.add(model)
    const sprite = makeSprite(this.glow, meta.color, meta.rarity === 'legendary' ? 1.6 : 1.1, 0.28)
    sprite.position.y = 0.08
    group.add(sprite)
    this.scene.add(group)

    const uid = `loot-${index}-${this.dropCounter++}`
    const item = {
      uid, metaId, meta, group, model, sprite,
      anchor: { ...anchor }, baseY: anchor.y, dropped,
      available: true, collecting: 0, phase: Math.random() * 6.28, spin: Math.random() * 0.6 + 0.25,
      interactable: null,
    }
    const it = {
      kind: 'loot', id: uid, x: anchor.x, y: anchor.y, z: anchor.z,
      radius: 1.9, label: `Collect ${meta.name}`, active: true, rarity: meta.rarity,
    }
    item.interactable = it
    this.world.interactables.push(it)
    this.items.set(uid, item)
    return item
  }

  spawnDropped(metaId, x, z) {
    return this.spawn(metaId, { x, y: 0.35, z }, 900 + this.items.size, true)
  }

  pickup(uid) {
    const item = this.items.get(uid)
    if (!item || !item.available) return null
    item.available = false
    item.collecting = 0.0001
    item.interactable.active = false
    return item
  }

  update(dt, t) {
    for (const [uid, item] of this.items) {
      if (!item.group.parent) continue
      if (item.collecting > 0) {
        item.collecting += dt * 4
        const k = Math.min(1, item.collecting)
        item.group.scale.setScalar(Math.max(0.001, 1 - k))
        item.group.position.y = item.baseY + k * 0.55
        item.sprite.material.opacity = (1 - k) * 0.3
        if (k >= 1) {
          this.scene.remove(item.group)
          this.disposeItem(item)
          this.items.delete(uid)
        }
        continue
      }
      const bob = Math.sin(t * 1.9 + item.phase) * 0.045
      item.group.position.y = item.baseY + bob
      item.model.rotation.y += dt * item.spin
      if (item.meta.shape === 'module') {
        const core = item.model.userData.core
        const inner = item.model.userData.inner
        const ring = item.model.userData.ring2
        if (core) core.rotation.y -= dt * 1.6
        if (core) core.rotation.x += dt * 0.7
        if (inner) inner.rotation.x -= dt * 0.8
        if (ring) ring.rotation.z += dt * 0.9
      }
      item.sprite.material.opacity = 0.24 + Math.sin(t * 2.4 + item.phase) * 0.07
    }
  }

  disposeItem(item) {
    item.group.traverse((o) => {
      if (o.isMesh) {
        if (o.geometry) o.geometry.dispose()
      }
    })
    const idx = this.world.interactables.indexOf(item.interactable)
    if (idx >= 0) this.world.interactables.splice(idx, 1)
  }

  availableResearchCount() {
    let n = 0
    for (const item of this.items.values()) if (item.available && item.meta.research) n++
    return n
  }

  nearestResearch(x, z) {
    let best = null, bestD = Infinity
    for (const item of this.items.values()) {
      if (!item.available || !item.meta.research) continue
      const d = (item.anchor.x - x) ** 2 + (item.anchor.z - z) ** 2
      if (d < bestD) { bestD = d; best = item }
    }
    return best
  }
}
