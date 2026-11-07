import * as THREE from 'three'
import { glowTexture, makeSprite } from './world/materials.js'
import { resolveMovement } from './world/outpost.js'

/* ========================================================================== */
/* Exploration operative — small procedural rig, shared low-poly geometry.    */
/* ========================================================================== */
function capsule(radius, length, material, segments = 8) {
  const geo = new THREE.CapsuleGeometry(radius, length, 3, segments)
  const mesh = new THREE.Mesh(geo, material)
  return mesh
}

export class Operative {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.model = new THREE.Group()
    this.group.add(this.model)
    this.scene.add(this.group)

    const suit = new THREE.MeshStandardMaterial({ color: 0x263642, roughness: 0.68, metalness: 0.32 })
    const armor = new THREE.MeshStandardMaterial({ color: 0x435a66, roughness: 0.48, metalness: 0.55 })
    const armorDark = new THREE.MeshStandardMaterial({ color: 0x1b272e, roughness: 0.62, metalness: 0.42 })
    const webbing = new THREE.MeshStandardMaterial({ color: 0x3c2e21, roughness: 0.9, metalness: 0.1 })
    const cyan = new THREE.MeshBasicMaterial({ color: 0x8ff5ff })
    const cyanDim = new THREE.MeshBasicMaterial({ color: 0x38a9bc })
    const orange = new THREE.MeshBasicMaterial({ color: 0xffa14d })
    const visorMat = new THREE.MeshBasicMaterial({ color: 0x74f2ff })
    this.materials = { suit, armor, armorDark, cyan, cyanDim, orange }

    /* torso ----------------------------------------------------------------- */
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.56, 0.32), suit)
    torso.position.y = 1.28
    torso.geometry.translate(0, 0, 0)
    this.model.add(torso)

    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.38, 0.12), armor)
    chest.position.set(0, 1.36, 0.18)
    this.model.add(chest)
    const chestStrip = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.025, 0.02), cyan)
    chestStrip.position.set(0, 1.4, 0.25)
    this.model.add(chestStrip)
    const chestStrip2 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, 0.02), cyanDim)
    chestStrip2.position.set(-0.17, 1.31, 0.25)
    this.model.add(chestStrip2)
    const badge = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.02), orange)
    badge.position.set(0.16, 1.28, 0.25)
    this.model.add(badge)

    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.34), webbing)
    belt.position.y = 1.0
    this.model.add(belt)
    const beltBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.07, 0.03), armor)
    beltBuckle.position.set(0, 1.0, 0.18)
    this.model.add(beltBuckle)

    const hips = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.22, 0.3), armorDark)
    hips.position.y = 0.9
    this.model.add(hips)

    /* backpack -------------------------------------------------------------- */
    const pack = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.48, 0.2), armorDark)
    pack.position.set(0, 1.28, -0.23)
    this.model.add(pack)
    const packTop = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.1, 0.16), armor)
    packTop.position.set(0, 1.55, -0.22)
    this.model.add(packTop)
    for (const s of [-1, 1]) {
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.5, 6), cyanDim)
      tube.position.set(s * 0.16, 1.28, -0.34)
      this.model.add(tube)
    }
    const packStrip = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.025, 0.02), cyan)
    packStrip.position.set(0, 1.12, -0.34)
    this.model.add(packStrip)

    /* head + helmet --------------------------------------------------------- */
    this.head = new THREE.Group()
    this.head.position.set(0, 1.68, 0)
    this.model.add(this.head)
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.1, 8), armorDark)
    neck.position.y = -0.15
    this.head.add(neck)
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.205, 12, 9), armor)
    helmet.scale.set(1.0, 1.06, 1.02)
    this.head.add(helmet)
    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.18), armorDark)
    jaw.position.set(0, -0.08, 0.1)
    this.head.add(jaw)
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.095, 0.045), visorMat)
    visor.position.set(0, 0.02, 0.19)
    this.head.add(visor)
    const visorTop = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.03, 0.03), armorDark)
    visorTop.position.set(0, 0.09, 0.18)
    this.head.add(visorTop)
    for (const s of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.12, 0.12), armor)
      ear.position.set(s * 0.2, 0.0, 0)
      this.head.add(ear)
      const earLight = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.035, 0.04), cyan)
      earLight.position.set(s * 0.232, 0.01, 0.04)
      this.head.add(earLight)
    }
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.22, 5), armorDark)
    antenna.position.set(0.17, 0.22, -0.05)
    antenna.rotation.z = -0.18
    this.head.add(antenna)
    const antennaTip = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 5), orange)
    antennaTip.position.set(0.2, 0.33, -0.05)
    this.head.add(antennaTip)
    this.visorGlow = makeSprite(glowTexture(), 0x5fe9ff, 0.55, 0.3)
    this.visorGlow.position.set(0, 0.02, 0.23)
    this.head.add(this.visorGlow)

    /* shoulders + arms ------------------------------------------------------ */
    this.arms = []
    for (const side of [-1, 1]) {
      const pivot = new THREE.Group()
      pivot.position.set(side * 0.34, 1.47, 0)
      this.model.add(pivot)

      const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), armor)
      shoulder.scale.set(1.1, 0.8, 1)
      pivot.add(shoulder)
      const shoulderLight = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 0.14), cyan)
      shoulderLight.position.set(side * 0.03, 0.07, 0.02)
      pivot.add(shoulderLight)

      const upper = capsule(0.075, 0.24, suit, 6)
      upper.position.y = -0.2
      pivot.add(upper)
      const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.075, 6, 5), armorDark)
      elbow.position.y = -0.36
      pivot.add(elbow)
      const fore = capsule(0.065, 0.22, armor, 6)
      fore.position.y = -0.5
      pivot.add(fore)
      const glove = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.13, 0.13), armorDark)
      glove.position.set(0, -0.66, 0.02)
      pivot.add(glove)
      const cuff = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.025, 0.1), cyanDim)
      cuff.position.set(0, -0.43, 0)
      pivot.add(cuff)
      pivot.rotation.x = side * 0.03
      this.arms.push({ pivot, side })
    }

    /* legs ----------------------------------------------------------------- */
    this.legs = []
    for (const side of [-1, 1]) {
      const pivot = new THREE.Group()
      pivot.position.set(side * 0.145, 0.88, 0)
      this.model.add(pivot)
      const thigh = capsule(0.095, 0.28, suit, 6)
      thigh.position.y = -0.22
      pivot.add(thigh)
      const kneePad = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.14, 0.09), armor)
      kneePad.position.set(0, -0.38, 0.06)
      pivot.add(kneePad)
      const shin = capsule(0.078, 0.28, armorDark, 6)
      shin.position.y = -0.54
      pivot.add(shin)
      const boot = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.14, 0.28), armor)
      boot.position.set(0, -0.75, 0.05)
      pivot.add(boot)
      const bootLight = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.018, 0.02), cyan)
      bootLight.position.set(0, -0.71, 0.2)
      pivot.add(bootLight)
      const thighStripe = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.18, 0.06), orange)
      thighStripe.position.set(side * 0.09, -0.2, 0.03)
      pivot.add(thighStripe)
      this.legs.push({ pivot, side })
    }

    this.group.position.set(0, 0, 6.4)
    this.group.rotation.y = Math.PI
    this.physics = {
      pos: new THREE.Vector3(0, 0, 6.4),
      radius: 0.38,
      walkSpeed: 3.35,
      sprintSpeed: 5.7,
      yaw: Math.PI,
      moveAmount: 0,
      speed: 0,
      stride: 0,
      time: 0,
    }
    this.health = 100
    this.maxHealth = 100
    this.energy = 100
    this.battery = 100
    this.flashlightOn = false
    this.hidden = false
    this.hideType = null
    this.sprinting = false
    this.lastDamage = -10
    this.alive = true
    this.onFootstep = null
    this.onDamage = null

    /* flashlight ------------------------------------------------------------ */
    this.flashlight = new THREE.SpotLight(0xbdf4ff, 0, 22, 0.5, 0.55, 1.4)
    this.flashlight.position.set(0, 1.6, 0.15)
    this.flashlight.target.position.set(0, -0.5, 5)
    this.group.add(this.flashlight)
    this.group.add(this.flashlight.target)
  }

  get position() { return this.physics.pos }

  setFlashlight(on) {
    if (on && this.battery <= 0) return false
    this.flashlightOn = on
    this.flashlight.intensity = on ? 55 : 0
    return true
  }

  setHidden(hidden, hideType = null) {
    this.hidden = hidden
    this.hideType = hideType
    if (hidden) {
      this.physics.speed = 0
      this.physics.moveAmount = 0
      // first-person concealment camera is placed at the hide point
      this.model.visible = false
      this.sprinting = false
    } else {
      this.model.visible = true
      this.model.scale.set(1, 1, 1)
      this.model.position.y = 0
    }
  }

  teleport(x, z, yaw = this.physics.yaw) {
    this.physics.pos.set(x, 0, z)
    this.physics.yaw = yaw
    this.group.position.set(x, 0, z)
    this.group.rotation.y = yaw
  }

  takeDamage(amount) {
    if (!this.alive) return false
    this.health = Math.max(0, this.health - amount)
    if (this.health <= 0) {
      this.alive = false
      return true
    }
    if (this.onDamage) this.onDamage(amount)
    return false
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount)
  }

  rechargeBattery(amount) {
    this.battery = Math.min(100, this.battery + amount)
  }

  update(dt, input, cameraYaw, world, canMove = true) {
    const p = this.physics
    p.time += dt
    if (!this.alive) {
      this.animate(dt, 0, false)
      return
    }

    let dx = 0, dz = 0
    const hasInput = canMove && !this.hidden && (input.x !== 0 || input.z !== 0)
    if (hasInput) {
      const len = Math.hypot(input.x, input.z)
      const ix = input.x / len, iz = input.z / len
      // camera-relative axes
      const fx = -Math.sin(cameraYaw), fz = -Math.cos(cameraYaw)
      const rx = Math.cos(cameraYaw), rz = -Math.sin(cameraYaw)
      dx = fx * iz + rx * ix
      dz = fz * iz + rz * ix
    }

    const wantSprint = canMove && !this.hidden && input.sprint && this.energy > 1 && hasInput
    this.sprinting = wantSprint
    if (wantSprint) this.energy = Math.max(0, this.energy - dt * 19)
    else this.energy = Math.min(100, this.energy + dt * (hasInput ? 8 : 13))

    const targetSpeed = hasInput ? (wantSprint ? p.sprintSpeed : p.walkSpeed) : 0
    const accel = hasInput ? 12 : 16
    p.speed += (targetSpeed - p.speed) * Math.min(1, dt * accel)
    if (p.speed < 0.02) p.speed = 0

    if (p.speed > 0.02 && hasInput) {
      const step = p.speed * dt
      resolveMovement(world.colliders, p.pos, dx * step, dz * step, p.radius)
      const targetYaw = Math.atan2(dx, dz)
      let diff = targetYaw - p.yaw
      while (diff > Math.PI) diff -= Math.PI * 2
      while (diff < -Math.PI) diff += Math.PI * 2
      p.yaw += diff * Math.min(1, dt * 12)
      p.moveAmount = Math.min(1, p.moveAmount + dt * 5)
      p.stride += step * (wantSprint ? 1.5 : 1.0)
      if (p.stride > (wantSprint ? 2.1 : 1.55)) {
        p.stride = 0
        if (this.onFootstep) this.onFootstep(wantSprint)
      }
    } else {
      p.moveAmount = Math.max(0, p.moveAmount - dt * 6)
      p.stride = Math.max(0, p.stride - dt)
    }

    // clamp to facility hard bounds just in case
    p.pos.x = Math.max(-30, Math.min(36, p.pos.x))
    p.pos.z = Math.max(-35, Math.min(31, p.pos.z))

    this.group.position.set(p.pos.x, 0, p.pos.z)
    this.group.rotation.y = p.yaw

    // flashlight battery
    if (this.flashlightOn) {
      this.battery = Math.max(0, this.battery - dt * 4.6)
      this.flashlight.intensity = 55 + Math.sin(p.time * 23) * 1.2
      if (this.battery <= 0) this.setFlashlight(false)
    } else {
      this.flashlight.intensity = 0
    }

    const moving = p.speed > 0.15 && hasInput
    this.animate(dt, p.moveAmount * (wantSprint ? 1.5 : 1), moving)
    this.visorGlow.material.opacity = 0.24 + Math.sin(p.time * 2.2) * 0.06
  }

  animate(dt, amount, moving) {
    const t = this.physics.time
    const walk = Math.sin(this.physics.stride * Math.PI * 2)
    const speedFactor = amount
    const idleBob = Math.sin(t * 1.7) * 0.012
    this.model.position.y = idleBob + (moving ? Math.abs(Math.sin(this.physics.stride * Math.PI * 2)) * 0.035 * speedFactor : 0)
    this.model.rotation.x = moving ? -0.05 * speedFactor : 0
    this.model.rotation.z = moving ? Math.sin(this.physics.stride * Math.PI) * 0.02 : 0

    this.head.rotation.y = Math.sin(t * 0.55) * 0.05
    this.head.rotation.x = Math.sin(t * 0.9) * 0.02

    for (const arm of this.arms) {
      const swing = walk * 0.72 * speedFactor * arm.side
      arm.pivot.rotation.x = swing + (moving ? 0 : Math.sin(t * 1.7 + arm.side) * 0.02)
      arm.pivot.rotation.z = arm.side * (0.06 + 0.03 * speedFactor)
    }
    for (const leg of this.legs) {
      const swing = walk * 0.68 * speedFactor * leg.side
      leg.pivot.rotation.x = swing
    }
    if (!moving) {
      for (const arm of this.arms) arm.pivot.rotation.x *= 0.9
      for (const leg of this.legs) leg.pivot.rotation.x *= 0.9
    }
    // subtle backpack float
    if (this.hidden && this.hideType === 'crates') {
      this.model.rotation.x = -0.22
      this.model.position.y = -0.18
    }
  }
}

/* ========================================================================== */
/* Third-person orbit camera with wall avoidance                              */
/* ========================================================================== */
export class ThirdPersonCamera {
  constructor(camera) {
    this.camera = camera
    this.yaw = Math.PI
    this.pitch = 0.24
    this.distance = 4.4
    this.zoom = 4.4
    this.target = new THREE.Vector3()
    this.smoothPos = new THREE.Vector3()
    this.smoothTarget = new THREE.Vector3()
    this.initialized = false
    this.shake = 0
    this.sensitivity = 0.0032
  }

  handleMouse(dx, dy) {
    this.yaw -= dx * this.sensitivity
    this.pitch += dy * this.sensitivity
    this.pitch = Math.max(-0.12, Math.min(1.0, this.pitch))
  }

  zoomBy(delta) {
    this.zoom = Math.max(2.6, Math.min(6.6, this.zoom + delta * 0.003))
  }

  addShake(amount) { this.shake = Math.min(0.25, this.shake + amount) }

  update(dt, player, world, hidden = false, hideType = null) {
    const py = player.position
    const targetY = hidden && hideType === 'crates' ? 0.85 : 1.36
    this.target.set(py.x, targetY, py.z)

    const desiredDist = hidden && hideType === 'locker' ? 2.4 : this.zoom
    const horiz = Math.cos(this.pitch) * desiredDist
    const vert = Math.sin(this.pitch) * desiredDist
    let camX = py.x + Math.sin(this.yaw) * horiz
    let camZ = py.z + Math.cos(this.yaw) * horiz
    let camY = targetY + vert

    // camera collision: step along the horizontal ray to the wall
    if (!hidden) {
      const steps = 12
      let safe = 1
      for (let i = 1; i <= steps; i++) {
        const t = i / steps
        const x = py.x + (camX - py.x) * t
        const z = py.z + (camZ - py.z) * t
        let blocked = false
        for (let j = 0; j < world.colliders.length; j++) {
          const c = world.colliders[j]
          if (!c.solid) continue
          if (x > c.minX - 0.22 && x < c.maxX + 0.22 && z > c.minZ - 0.22 && z < c.maxZ + 0.22) {
            blocked = true
            break
          }
        }
        if (blocked) { safe = Math.max(0.18, (i - 1) / steps); break }
      }
      if (safe < 1) {
        const shrink = Math.max(0.4, safe * desiredDist - 0.35)
        const f = shrink / desiredDist
        camX = py.x + (camX - py.x) * f
        camZ = py.z + (camZ - py.z) * f
        camY = targetY + vert * Math.max(0.4, f)
      }
    }
    camY = Math.max(0.55, Math.min(3.85, camY))

    if (!this.initialized) {
      this.smoothPos.set(camX, camY, camZ)
      this.smoothTarget.copy(this.target)
      this.initialized = true
    } else {
      const k = 1 - Math.exp(-dt * 11)
      this.smoothPos.x += (camX - this.smoothPos.x) * k
      this.smoothPos.y += (camY - this.smoothPos.y) * k
      this.smoothPos.z += (camZ - this.smoothPos.z) * k
      this.smoothTarget.lerp(this.target, 1 - Math.exp(-dt * 16))
    }

    this.shake *= Math.exp(-dt * 9)
    const shakeX = (Math.random() - 0.5) * this.shake
    const shakeY = (Math.random() - 0.5) * this.shake
    this.camera.position.set(this.smoothPos.x + shakeX, this.smoothPos.y + shakeY, this.smoothPos.z)
    this.camera.lookAt(this.smoothTarget.x, this.smoothTarget.y + 0.1, this.smoothTarget.z)
    this.camera.rotation.z = 0
  }
}
