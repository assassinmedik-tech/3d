import * as THREE from 'three'
import { makeSprite } from './materials.js'

/* -------------------------------------------------------------------------- */
/* Sliding blast doors. Static frame is batched; panels are animated.         */
/* -------------------------------------------------------------------------- */
export function createDoor({ scene, mats, batch, addCollider, glowTex, x, z, axis = 'x', width = 2.8, locked = false, name = 'door' }) {
  const alongX = axis === 'x'
  const group = new THREE.Group()
  group.position.set(x, 0, z)
  group.rotation.y = alongX ? 0 : Math.PI / 2
  scene.add(group)

  // Static frame (batched in world space)
  for (const side of [-1, 1]) {
    const px = alongX ? x + side * (width / 2 + 0.14) : x
    const pz = alongX ? z : z + side * (width / 2 + 0.14)
    batch.box(alongX ? 0.28 : 0.62, 3.15, alongX ? 0.62 : 0.28, mats.trimDark, px, 1.575, pz)
    // hazard edge strips
    batch.box(alongX ? 0.05 : 0.64, 1.2, alongX ? 0.64 : 0.05, mats.hazard, px + (alongX ? side * 0.12 : 0), 0.62, pz + (alongX ? 0 : side * 0.12))
  }
  const hx = alongX ? x : x
  const hz = alongX ? z : z
  batch.box(alongX ? width + 0.56 : 0.62, 0.38, alongX ? 0.62 : width + 0.56, mats.trimDark, hx, 3.36, hz)
  batch.box(alongX ? width : 0.18, 0.03, alongX ? 0.18 : width, mats.emissiveCyanDim, hx, 0.03, hz)

  // Moving panels
  const panelW = width / 2 - 0.03
  const panelMat = new THREE.MeshStandardMaterial({ color: 0x26343d, roughness: 0.68, metalness: 0.55 })
  const panels = []
  for (const side of [-1, 1]) {
    const p = new THREE.Group()
    p.position.set(side * (width / 4 + 0.015), 1.34, 0)
    const body = new THREE.Mesh(new THREE.BoxGeometry(panelW, 2.6, 0.15), panelMat)
    p.add(body)
    // detail ribs
    for (let i = 0; i < 2; i++) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(panelW * 0.86, 0.035, 0.18), mats.trimDark)
      rib.position.set(0, -0.72 + i * 0.55, 0)
      p.add(rib)
    }
    const centerStrip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.3, 0.17), mats.emissiveCyanDim)
    centerStrip.position.x = side * (panelW / 2 - 0.09)
    p.add(centerStrip)
    const edgeStrip = new THREE.Mesh(new THREE.BoxGeometry(panelW * 0.5, 0.025, 0.17), mats.emissiveCyan)
    edgeStrip.position.set(0, -1.05, 0)
    p.add(edgeStrip)
    // small hazard badge
    const badge = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.17), mats.hazard)
    badge.position.set(0, 0.5, 0)
    p.add(badge)
    p.userData.baseX = p.position.x
    p.userData.side = side
    group.add(p)
    panels.push(p)
  }

  // Status beacon above doorway
  const statusSprite = makeSprite(glowTex, locked ? 0xff4a42 : 0x6ce8ff, 0.85, 0.55)
  statusSprite.position.set(0, 3.6, 0)
  group.add(statusSprite)
  const statusBar = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 0.05, 0.08),
    locked ? mats.emissiveRed : mats.emissiveCyan,
  )
  statusBar.position.set(0, 3.16, 0.34)
  group.add(statusBar)

  const cw = alongX ? width : 0.36
  const cd = alongX ? 0.36 : width
  const collider = addCollider(x, z, cw, cd, { sight: true, name, door: true })

  const door = {
    name, x, z, axis, width, locked, unlocked: !locked,
    openAmount: 0,
    group, panels, collider, statusSprite, statusBar,
    setLocked(v) {
      this.locked = v
      this.unlocked = !v
      statusSprite.material.color.set(v ? 0xff4a42 : 0x6ce8ff)
      statusBar.material = v ? mats.emissiveRed : mats.emissiveCyan
    },
    unlock() {
      if (!this.locked) return false
      this.locked = false
      this.unlocked = true
      statusSprite.material.color.set(0x6ce8ff)
      statusBar.material = mats.emissiveCyan
      return true
    },
    update(dt, t, playerPos, enemies) {
      let near = false
      if (!this.locked) {
        const dx = playerPos.x - this.x
        const dz = playerPos.z - this.z
        near = dx * dx + dz * dz < 3.0 * 3.0
        if (!near) {
          for (const e of enemies) {
            const ex = e.position.x - this.x
            const ez = e.position.z - this.z
            if (ex * ex + ez * ez < 2.6 * 2.6) { near = true; break }
          }
        }
      }
      const target = near ? 1 : 0
      this.openAmount += (target - this.openAmount) * Math.min(1, dt * 7)
      if (Math.abs(this.openAmount - target) < 0.002) this.openAmount = target
      const slide = this.openAmount * (this.width * 0.47)
      for (const p of this.panels) {
        p.position.x = p.userData.baseX + p.userData.side * slide
      }
      const closed = this.openAmount < 0.5
      this.collider.solid = closed
      this.collider.sight = closed
      // pulse status
      const pulse = 0.38 + Math.sin(t * (this.locked ? 5 : 2.4) + this.x) * 0.16
      statusSprite.material.opacity = pulse
      if (this.locked) statusSprite.scale.setScalar(0.8 + Math.sin(t * 4) * 0.1)
    },
  }

  return door
}
