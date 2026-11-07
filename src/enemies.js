import * as THREE from 'three'
import { canvasTexture, glowTexture, makeSprite } from './world/materials.js'
import { resolveMovement, segmentBlocked } from './world/outpost.js'

/* -------------------------------------------------------------------------- */
/* State indicators                                                           */
/* -------------------------------------------------------------------------- */
function indicatorTexture(symbol, color) {
  return canvasTexture(64, 64, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h)
    ctx.beginPath()
    ctx.arc(w / 2, h / 2, 25, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(3,10,14,.78)'
    ctx.fill()
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.fillStyle = color
    ctx.font = 'bold 34px monospace'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(symbol, w / 2, h / 2 + 2)
  })
}

const INDICATORS = {
  patrol: indicatorTexture('·', '#6ce8ff'),
  suspicious: indicatorTexture('?', '#ffa14d'),
  investigate: indicatorTexture('?', '#ffa14d'),
  search: indicatorTexture('?', '#ffa14d'),
  chase: indicatorTexture('!', '#ff4a42'),
}

/* ========================================================================== */
/* Hovering security sentinel                                                 */
/* ========================================================================== */
export class SecurityRobot {
  constructor(scene, options) {
    this.scene = scene
    this.name = options.name || 'K-7'
    this.patrol = options.patrol
    this.patrolIndex = 0
    this.state = 'patrol'
    this.detection = 0
    this.visible = false
    this.lastSeen = new THREE.Vector3(options.start.x, 0, options.start.z)
    this.target = new THREE.Vector3(options.start.x, 0, options.start.z)
    this.losTimer = 0
    this.stateTimer = 0
    this.waitTimer = 0
    this.attackTimer = 0
    this.scanPhase = Math.random() * 6.28
    this.time = Math.random() * 10
    this.dead = false
    this.onStateChange = null
    this.onDetect = null
    this.onAttack = null
    this.visionRange = options.visionRange || 13
    this.visionHalfCos = Math.cos((options.fov || 72) * Math.PI / 360)
    this.speed = 0
    this.yaw = Math.random() * Math.PI * 2
    this.physics = { pos: new THREE.Vector3(options.start.x, 0, options.start.z), radius: 0.48 }
    this.build(options.start)
    this.enterPatrol(true)
  }

  get position() { return this.physics.pos }

  build(start) {
    const armor = new THREE.MeshStandardMaterial({ color: 0x2b2c30, roughness: 0.48, metalness: 0.7 })
    const armorDark = new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.58, metalness: 0.62 })
    const trim = new THREE.MeshStandardMaterial({ color: 0x4b3a2a, roughness: 0.4, metalness: 0.7 })
    const eyeOff = new THREE.MeshBasicMaterial({ color: 0xff9a3d })
    const eyeAlert = new THREE.MeshBasicMaterial({ color: 0xff3a30 })
    this.eyeMat = eyeOff
    this.eyeAlertMat = eyeAlert

    const root = new THREE.Group()
    root.position.set(start.x, 0, start.z)
    this.scene.add(root)
    this.group = root
    this.body = new THREE.Group()
    root.add(this.body)

    // hover ring + underglow
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.055, 5, 18), trim)
    ring.rotation.x = Math.PI / 2
    ring.position.y = 0.36
    this.body.add(ring)
    const innerRing = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.02, 4, 16), eyeOff)
    innerRing.rotation.x = Math.PI / 2
    innerRing.position.y = 0.33
    this.body.add(innerRing)
    const ringGlow = makeSprite(glowTexture(), 0xff8a3a, 1.6, 0.22)
    ringGlow.position.y = 0.33
    this.body.add(ringGlow)
    this.ringGlow = ringGlow
    this.ring = innerRing

    const glowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(1.6, 1.6),
      new THREE.MeshBasicMaterial({ map: glowTexture(), color: 0xff8a3a, transparent: true, opacity: 0.18, depthWrite: false, blending: THREE.AdditiveBlending }),
    )
    glowPlane.rotation.x = -Math.PI / 2
    glowPlane.position.y = 0.04
    root.add(glowPlane)
    this.groundGlow = glowPlane

    // lower chassis
    const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.46, 0.45, 8), armorDark)
    lower.position.y = 0.62
    this.body.add(lower)
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.36, 0.1, 8), trim)
    collar.position.y = 0.88
    this.body.add(collar)

    // torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.72, 0.44), armor)
    torso.position.y = 1.23
    this.body.add(torso)
    const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.44, 0.08), armorDark)
    chestPlate.position.set(0, 1.3, 0.24)
    this.body.add(chestPlate)
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.06, 10), eyeOff)
    core.rotation.x = Math.PI / 2
    core.position.set(0, 1.3, 0.29)
    this.body.add(core)
    this.core = core
    const coreGlow = makeSprite(glowTexture(), 0xff7a2a, 0.7, 0.3)
    coreGlow.position.set(0, 1.3, 0.34)
    this.body.add(coreGlow)
    this.coreGlow = coreGlow
    for (let i = 0; i < 3; i++) {
      const vent = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.03, 0.03), trim)
      vent.position.set(0, 1.02 + i * 0.08, 0.24)
      this.body.add(vent)
    }

    // shoulders / manipulators
    for (const side of [-1, 1]) {
      const pod = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.28, 0.3), armor)
      pod.position.set(side * 0.42, 1.45, 0)
      this.body.add(pod)
      const light = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.16, 0.02), eyeOff)
      light.position.set(side * 0.52, 1.45, 0.02)
      this.body.add(light)
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.035, 0.62, 6), armorDark)
      arm.position.set(side * 0.44, 1.02, 0.05)
      arm.rotation.z = side * 0.16
      this.body.add(arm)
      const stun = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.03, 0.32, 6), trim)
      stun.position.set(side * 0.52, 0.66, 0.07)
      this.body.add(stun)
      const stunTip = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), eyeOff)
      stunTip.position.set(side * 0.53, 0.51, 0.07)
      this.body.add(stunTip)
    }

    // head / optic
    this.head = new THREE.Group()
    this.head.position.set(0, 1.68, 0)
    this.body.add(this.head)
    const skull = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.25, 0.4), armor)
    this.head.add(skull)
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.06, 0.44), armorDark)
    brow.position.y = 0.1
    this.head.add(brow)
    const visorRecess = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.1, 0.05), armorDark)
    visorRecess.position.set(0, 0.0, 0.21)
    this.head.add(visorRecess)
    this.eye = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.045, 0.03), eyeOff)
    this.eye.position.set(0, 0.0, 0.24)
    this.head.add(this.eye)
    this.eyeGlow = makeSprite(glowTexture(), 0xff7a2a, 0.9, 0.4)
    this.eyeGlow.position.set(0, 0.0, 0.3)
    this.head.add(this.eyeGlow)
    // antenna
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.02, 0.34, 5), armorDark)
    ant.position.set(0.14, 0.27, -0.08)
    ant.rotation.z = -0.25
    this.head.add(ant)
    const antTip = new THREE.Mesh(new THREE.SphereGeometry(0.03, 5, 4), eyeOff)
    antTip.position.set(0.18, 0.43, -0.08)
    this.head.add(antTip)

    // state indicator
    const stateMat = new THREE.SpriteMaterial({ map: INDICATORS.patrol, transparent: true, depthWrite: false, depthTest: false })
    this.stateSprite = new THREE.Sprite(stateMat)
    this.stateSprite.scale.set(0.45, 0.45, 1)
    this.stateSprite.position.y = 2.35
    root.add(this.stateSprite)

    // subtle search light cone on the floor (fake, no realtime light)
    const coneMat = new THREE.MeshBasicMaterial({ color: 0xffa14d, transparent: true, opacity: 0.05, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending })
    const cone = new THREE.Mesh(new THREE.CircleGeometry(2.8, 18, -0.45, 0.9), coneMat)
    cone.rotation.x = -Math.PI / 2
    cone.position.set(0, 0.06, 1.4)
    root.add(cone)
    this.scanCone = cone
    this.scanConeMat = coneMat

    // shadows
    this.body.traverse((o) => {
      if (o.isMesh && !o.material.transparent) o.castShadow = true
    })
  }

  setState(next) {
    if (this.state === next) return
    this.state = next
    this.stateTimer = 0
    const tex = INDICATORS[next] || INDICATORS.patrol
    this.stateSprite.material.map = tex
    this.stateSprite.material.needsUpdate = true
    const alert = next === 'chase'
    this.eyeMat.color.set(alert ? 0xff3a30 : next === 'patrol' ? 0xff9a3d : 0xffb45c)
    const color = alert ? 0xff3a30 : 0xffa14d
    this.eyeGlow.material.color.set(color)
    this.ringGlow.material.color.set(color)
    this.ring.material.color.set(alert ? 0xff3a30 : 0xff9a3d)
    this.groundGlow.material.color.set(color)
    this.core.material.color.set(alert ? 0xff3a30 : 0xff9a3d)
    this.coreGlow.material.color.set(color)
    this.scanConeMat.color.set(alert ? 0xff3a30 : 0xffa14d)
    this.scanConeMat.opacity = alert ? 0.12 : 0.055
    if (this.onStateChange) this.onStateChange(this, next)
    if (next === 'chase' && this.onDetect) this.onDetect(this)
  }

  enterPatrol(initial = false) {
    this.setState('patrol')
    if (initial) {
      let best = 0, bestD = Infinity
      for (let i = 0; i < this.patrol.length; i++) {
        const d = this.patrol[i].x * this.patrol[i].x + this.patrol[i].z * this.patrol[i].z
        const dx = this.position.x - this.patrol[i].x
        const dz = this.position.z - this.patrol[i].z
        const dd = dx * dx + dz * dz
        if (dd < bestD) { bestD = dd; best = i }
      }
      this.patrolIndex = best
    }
    this.target.set(this.patrol[this.patrolIndex].x, 0, this.patrol[this.patrolIndex].z)
  }

  alertTo(pos, immediate = false) {
    if (this.state === 'chase' || this.dead) return
    this.lastSeen.set(pos.x, 0, pos.z)
    this.target.set(pos.x, 0, pos.z)
    this.setState('investigate')
    this.stateTimer = 0
    this.detection = Math.max(this.detection, 0.35)
    if (immediate) this.detection = Math.min(0.9, this.detection + 0.3)
  }

  canSee(player, world) {
    if (player.hidden || !player.alive) return false
    const px = player.position.x
    const pz = player.position.z
    const dx = px - this.position.x
    const dz = pz - this.position.z
    const dist = Math.hypot(dx, dz)
    if (dist > this.visionRange) return false
    const fx = Math.sin(this.yaw)
    const fz = Math.cos(this.yaw)
    const dot = (dx * fx + dz * fz) / (dist || 1)
    const inCone = dot >= this.visionHalfCos
    const close = dist < 3.0
    if (!inCone && !close) return false
    if (segmentBlocked(world.colliders, this.position.x, this.position.z, px, pz)) return false
    return true
  }

  moveToward(tx, tz, speed, dt, world) {
    const dx = tx - this.position.x
    const dz = tz - this.position.z
    const dist = Math.hypot(dx, dz)
    if (dist < 0.1) { this.speed *= 0.8; return dist }
    const nx = dx / dist, nz = dz / dist
    const step = Math.min(speed * dt, dist)
    resolveMovement(world.colliders, this.physics.pos, nx * step, nz * step, this.physics.radius)
    const targetYaw = Math.atan2(nx, nz)
    let diff = targetYaw - this.yaw
    while (diff > Math.PI) diff -= Math.PI * 2
    while (diff < -Math.PI) diff += Math.PI * 2
    this.yaw += diff * Math.min(1, dt * 7)
    this.speed = speed
    return dist
  }

  update(dt, player, world, allowUpdate = true) {
    this.time += dt
    if (this.dead) return
    const canSee = allowUpdate && player.alive && this.canSee(player, world)
    this.visible = canSee
    if (canSee) {
      this.lastSeen.set(player.position.x, 0, player.position.z)
      this.losTimer = 0
    } else {
      this.losTimer += dt
    }

    const distToPlayer = Math.hypot(player.position.x - this.position.x, player.position.z - this.position.z)
    const movingPlayer = player.physics.speed > 4.5
    const detectionRate = (0.55 + Math.max(0, 1 - distToPlayer / this.visionRange) * 1.15) * (movingPlayer ? 1.35 : 1)

    if (allowUpdate) {
      switch (this.state) {
        case 'patrol': {
          if (canSee) {
            this.detection = Math.min(1, this.detection + detectionRate * dt)
            if (this.detection >= 1) this.startChase()
            else if (this.detection > 0.3) {
              this.setState('suspicious')
              this.stateTimer = 0
            } else {
              this.patrolStep(dt, world)
            }
          } else {
            this.detection = Math.max(0, this.detection - dt * 0.4)
            this.patrolStep(dt, world)
          }
          break
        }
        case 'suspicious': {
          this.speed *= 0.85
          if (canSee) {
            this.detection = Math.min(1, this.detection + detectionRate * 1.1 * dt)
            this.faceToward(player.position.x, player.position.z, dt, 8)
            if (this.detection >= 1) this.startChase()
          } else {
            this.detection = Math.max(0, this.detection - dt * 0.35)
            this.stateTimer += dt
            if (this.stateTimer > 1.4) {
              this.target.copy(this.lastSeen)
              this.setState('search')
              this.stateTimer = 0
            }
          }
          break
        }
        case 'chase': {
          const targetDist = Math.hypot(this.lastSeen.x - this.position.x, this.lastSeen.z - this.position.z)
          if (canSee) {
            this.detection = 1
            this.lastSeen.set(player.position.x, 0, player.position.z)
            this.target.copy(this.lastSeen)
          } else {
            this.detection = Math.max(0.35, this.detection - dt * 0.08)
            if (this.losTimer > 1.3) this.target.copy(this.lastSeen)
            if (this.losTimer > 5.5) {
              this.setState('search')
              this.stateTimer = 0
            }
          }
          const d = this.moveToward(this.target.x, this.target.z, 3.55, dt, world)
          if (canSee && distToPlayer < 1.55) {
            this.speed *= 0.4
            this.faceToward(player.position.x, player.position.z, dt, 10)
            this.attackTimer -= dt
            if (this.attackTimer <= 0) {
              this.attackTimer = 0.95
              if (this.onAttack) this.onAttack(this, 12)
            }
          } else {
            this.attackTimer = Math.min(this.attackTimer, 0.35)
          }
          if (d < 1.0 && !canSee) {
            this.setState('search')
            this.stateTimer = 0
          }
          // ally alert
          break
        }
        case 'search': {
          this.stateTimer += dt
          const d = this.moveToward(this.target.x, this.target.z, 1.85, dt, world)
          if (canSee) {
            this.detection = Math.min(1, this.detection + detectionRate * 1.3 * dt)
            if (this.detection >= 0.8) this.startChase()
          } else {
            this.detection = Math.max(0, this.detection - dt * 0.25)
          }
          if (d < 0.8) {
            // scan around
            this.yaw += dt * 0.9 * Math.sin(this.time * 1.7 + this.scanPhase)
            this.speed *= 0.8
          }
          if (this.stateTimer > 5.5) this.returnToPatrol()
          break
        }
        case 'investigate': {
          this.stateTimer += dt
          const d = this.moveToward(this.target.x, this.target.z, 2.15, dt, world)
          if (canSee) {
            this.detection = Math.min(1, this.detection + detectionRate * 1.3 * dt)
            if (this.detection >= 0.85) this.startChase()
          }
          if (d < 0.9) {
            this.speed *= 0.7
            this.yaw += dt * 0.6 * Math.sin(this.time * 1.4 + this.scanPhase)
          }
          if (this.stateTimer > 7.0) this.returnToPatrol()
          break
        }
        case 'return': {
          const wp = this.patrol[this.returnIndex === undefined ? this.patrolIndex : this.returnIndex]
          const d = this.moveToward(wp.x, wp.z, 1.6, dt, world)
          if (canSee) {
            this.detection = Math.min(1, this.detection + detectionRate * dt)
            if (this.detection >= 0.9) this.startChase()
          }
          if (d < 0.7) {
            this.setState('patrol')
            this.waitTimer = 1.0
          }
          break
        }
      }
    }

    // state indicator / eye animation
    const alert = this.state === 'chase'
    this.stateSprite.material.opacity = this.state === 'patrol' ? 0.3 : 0.85
    this.stateSprite.scale.setScalar(alert ? 0.52 + Math.sin(this.time * 8) * 0.04 : 0.42)
    this.stateSprite.position.y = 2.35 + Math.sin(this.time * 2) * 0.04
    const eyePulse = alert ? 0.7 + Math.sin(this.time * 14) * 0.3 : 0.55 + Math.sin(this.time * 3) * 0.15
    this.eyeGlow.material.opacity = eyePulse
    this.coreGlow.material.opacity = eyePulse * 0.7
    this.ringGlow.material.opacity = 0.16 + Math.sin(this.time * 5) * 0.04

    // visual movement animation
    const moveSpeed = Math.max(0, this.speed)
    const hover = 0.06 + Math.sin(this.time * 2.6) * 0.018
    this.body.position.y = hover + (alert ? 0.04 : 0)
    this.body.rotation.x = THREE.MathUtils.damp(this.body.rotation.x, alert ? -0.12 : 0, 4, dt)
    this.body.rotation.z = Math.sin(this.time * 1.3) * 0.015
    this.ring.rotation.z += dt * (alert ? 3.5 : 1.3)
    this.scanCone.position.y = 0.07
    this.groundGlow.material.opacity = alert ? 0.28 : 0.14 + Math.sin(this.time * 2.4) * 0.03
    // head tracks forward + small scan
    const headTargetYaw = this.yaw
    let diff = headTargetYaw - this.head.rotation.y
    while (diff > Math.PI) diff -= Math.PI * 2
    while (diff < -Math.PI) diff += Math.PI * 2
    this.head.rotation.y += diff * Math.min(1, dt * 5)
    if (!alert && moveSpeed < 0.2) {
      this.head.rotation.y = Math.sin(this.time * 0.8 + this.scanPhase) * 0.6
    }

    this.group.position.set(this.position.x, 0, this.position.z)
    this.group.rotation.y = this.yaw
    this.eye.material = alert ? this.eyeAlertMat : this.eyeMat

    // decelerate visual speed
    if (!allowUpdate) this.speed *= 0.9
  }

  faceToward(x, z, dt, rate = 6) {
    const targetYaw = Math.atan2(x - this.position.x, z - this.position.z)
    let diff = targetYaw - this.yaw
    while (diff > Math.PI) diff -= Math.PI * 2
    while (diff < -Math.PI) diff += Math.PI * 2
    this.yaw += diff * Math.min(1, dt * rate)
  }

  patrolStep(dt, world) {
    if (this.waitTimer > 0) {
      this.waitTimer -= dt
      this.speed *= 0.85
      // scan at waypoint
      this.yaw += dt * 0.6 * Math.sin(this.time * 1.4 + this.scanPhase)
      if (this.waitTimer <= 0) {
        this.patrolIndex = (this.patrolIndex + 1) % this.patrol.length
        this.target.set(this.patrol[this.patrolIndex].x, 0, this.patrol[this.patrolIndex].z)
      }
      return
    }
    const d = this.moveToward(this.target.x, this.target.z, 1.35, dt, world)
    if (d < 0.55) {
      this.waitTimer = 1.1 + Math.random() * 1.4
      this.detection = Math.max(0, this.detection - 0.15)
    }
  }

  returnToPatrol() {
    this.setState('return')
    this.detection *= 0.4
    this.returnIndex = this.patrolIndex
    this.target.set(this.patrol[this.returnIndex].x, 0, this.patrol[this.returnIndex].z)
    this.waitTimer = 0
  }

  startChase() {
    if (this.state === 'chase') return
    this.detection = 1
    this.setState('chase')
    this.attackTimer = 0.5
    this.target.copy(this.lastSeen)
  }

  get isAlerted() {
    return this.state === 'chase' || this.state === 'search' || this.state === 'investigate' || this.state === 'suspicious'
  }
}
