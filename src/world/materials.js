import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

export const FLOOR_Y = 0
export const WALL_H = 4.2

export function rand(a, b) { return a + Math.random() * (b - a) }
export function pick(arr) { return arr[Math.floor(Math.random() * arr.length)] }

/* -------------------------------------------------------------------------- */
/* Procedural textures (all tiny, generated locally, no external assets)       */
/* -------------------------------------------------------------------------- */
export function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  draw(c.getContext('2d'), w, h)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.anisotropy = 4
  return t
}

export function floorTexture(base, line, repeatX, repeatY, options = {}) {
  const { grime = 18, hazard = false, grate = false } = options
  const t = canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = base
    ctx.fillRect(0, 0, w, h)
    for (let i = 0; i < 1100; i++) {
      const g = Math.floor(Math.random() * 22)
      ctx.fillStyle = `rgba(${g},${g + 5},${g + 8},${Math.random() * 0.2})`
      ctx.fillRect(Math.random() * w, Math.random() * h, rand(1, 8), rand(1, 2))
    }
    // large plate seams
    ctx.strokeStyle = line
    ctx.globalAlpha = 0.7
    ctx.lineWidth = 2
    for (let x = 0; x <= w; x += w / 4) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke() }
    for (let y = 0; y <= h; y += h / 4) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke() }
    // sub seams
    ctx.globalAlpha = 0.18
    ctx.lineWidth = 1
    for (let x = w / 8; x < w; x += w / 4) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke() }
    for (let y = h / 8; y < h; y += h / 4) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke() }
    // rivets
    ctx.globalAlpha = 0.5
    ctx.fillStyle = 'rgba(160,190,195,.35)'
    for (let x = 8; x < w; x += w / 4) for (let y = 8; y < h; y += h / 4) {
      ctx.beginPath(); ctx.arc(x, y, 1.5, 0, Math.PI * 2); ctx.fill()
    }
    // scuffs
    ctx.globalAlpha = 0.12
    for (let i = 0; i < 18; i++) {
      ctx.strokeStyle = grime
      ctx.lineWidth = rand(1, 3)
      ctx.beginPath()
      const x = Math.random() * w, y = Math.random() * h
      ctx.moveTo(x, y)
      ctx.lineTo(x + rand(-26, 26), y + rand(-6, 6))
      ctx.stroke()
    }
    if (grate) {
      ctx.globalAlpha = 0.6
      ctx.strokeStyle = 'rgba(0,0,0,.6)'
      ctx.lineWidth = 2
      for (let y = 6; y < h; y += 10) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke() }
      for (let x = 6; x < w; x += 24) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke() }
    }
    if (hazard) {
      ctx.save()
      ctx.globalAlpha = 0.5
      ctx.fillStyle = '#b67822'
      ctx.translate(w * 0.5, h * 0.5)
      for (let i = -6; i < 6; i++) {
        ctx.save()
        ctx.rotate(-Math.PI / 4)
        ctx.fillRect(i * 48, -6, 18, 12)
        ctx.restore()
      }
      ctx.restore()
    }
    // vignette
    const vg = ctx.createRadialGradient(w / 2, h / 2, w * 0.28, w / 2, h / 2, w * 0.72)
    vg.addColorStop(0, 'rgba(0,0,0,0)')
    vg.addColorStop(1, 'rgba(0,0,0,.34)')
    ctx.fillStyle = vg
    ctx.fillRect(0, 0, w, h)
  })
  t.repeat.set(repeatX, repeatY)
  return t
}

export function glowTexture() {
  return canvasTexture(64, 64, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2)
    g.addColorStop(0, 'rgba(255,255,255,1)')
    g.addColorStop(0.18, 'rgba(220,250,255,.85)')
    g.addColorStop(0.45, 'rgba(130,230,255,.28)')
    g.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)
  })
}

export function shadowTexture() {
  return canvasTexture(64, 64, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2)
    g.addColorStop(0, 'rgba(0,0,0,.72)')
    g.addColorStop(0.5, 'rgba(0,0,0,.38)')
    g.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)
  })
}

export function poolTexture() {
  return canvasTexture(64, 64, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2)
    g.addColorStop(0, 'rgba(255,255,255,.5)')
    g.addColorStop(0.4, 'rgba(255,255,255,.16)')
    g.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)
  })
}

export function screenTexture(variant = 0) {
  const accents = ['#76f2ff', '#ffb45c', '#7fffc4']
  const accent = accents[variant % accents.length]
  return canvasTexture(128, 80, (ctx, w, h) => {
    ctx.fillStyle = '#031014'
    ctx.fillRect(0, 0, w, h)
    ctx.strokeStyle = 'rgba(100,220,240,.28)'
    ctx.lineWidth = 1
    ctx.strokeRect(3.5, 3.5, w - 7, h - 7)
    ctx.fillStyle = accent
    ctx.globalAlpha = 0.85
    ctx.font = '7px monospace'
    ctx.fillText(variant === 1 ? 'POWER GRID // 09' : variant === 2 ? 'LIFE SUPPORT // OK' : 'SYS ARCHIVE // 447', 9, 15)
    ctx.globalAlpha = 0.45
    for (let i = 0; i < 5; i++) {
      ctx.fillRect(9, 23 + i * 7, rand(16, 54), 2)
    }
    // waveform
    ctx.globalAlpha = 0.75
    ctx.strokeStyle = accent
    ctx.beginPath()
    for (let x = 9; x < w - 12; x += 2) {
      const y = 48 + Math.sin(x * 0.24 + variant) * 6 * Math.sin(x * 0.06)
      x === 9 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.globalAlpha = 0.6
    ctx.fillStyle = accent
    for (let i = 0; i < 6; i++) {
      const bh = rand(3, 12)
      ctx.fillRect(9 + i * 8, 70 - bh, 4, bh)
    }
    ctx.globalAlpha = 0.25
    ctx.fillStyle = '#8bffff'
    for (let y = 0; y < h; y += 3) ctx.fillRect(0, y, w, 0.6)
  })
}

export function signTexture(text, sub = '', accent = '#6ce8ff') {
  return canvasTexture(256, 80, (ctx, w, h) => {
    ctx.fillStyle = 'rgba(4,12,16,.92)'
    ctx.fillRect(0, 0, w, h)
    ctx.strokeStyle = 'rgba(108,232,255,.45)'
    ctx.strokeRect(2, 2, w - 4, h - 4)
    ctx.fillStyle = accent
    ctx.fillRect(0, 0, 5, h)
    ctx.font = 'bold 21px monospace'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, 18, sub ? 31 : 41)
    if (sub) {
      ctx.fillStyle = 'rgba(160,205,212,.7)'
      ctx.font = '9px monospace'
      ctx.fillText(sub, 19, 56)
    }
    ctx.globalAlpha = 0.22
    ctx.fillStyle = accent
    for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 0.5)
  })
}

/* -------------------------------------------------------------------------- */
/* Materials                                                                  */
/* -------------------------------------------------------------------------- */
export function createMaterials() {
  const std = (color, roughness, metalness, extra = {}) =>
    new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra })

  const m = {
    wall: std(0x27333b, 0.8, 0.42),
    wallDark: std(0x182126, 0.88, 0.35),
    wallPanel: std(0x344650, 0.7, 0.5),
    trim: std(0x4a5d68, 0.4, 0.78),
    trimDark: std(0x26333a, 0.52, 0.72),
    floorMetal: std(0x2a343a, 0.78, 0.5),
    crate: std(0x394951, 0.72, 0.46),
    crateDark: std(0x26333a, 0.8, 0.4),
    crateOlive: std(0x455243, 0.78, 0.34),
    hazard: std(0x9a6a24, 0.65, 0.45),
    pipe: std(0x576b74, 0.42, 0.8),
    pipeDark: std(0x2c3a41, 0.58, 0.66),
    rubber: std(0x0d1215, 0.96, 0.05),
    screenBlack: std(0x050b0e, 0.4, 0.4),
    glass: new THREE.MeshStandardMaterial({
      color: 0x75dce6, roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.14,
      depthWrite: false, emissive: 0x1c7f8c, emissiveIntensity: 0.55, side: THREE.DoubleSide,
    }),
    holo: new THREE.MeshBasicMaterial({
      color: 0x7cecff, transparent: true, opacity: 0.3, side: THREE.DoubleSide,
      depthWrite: false, blending: THREE.AdditiveBlending,
    }),
    emissiveCyan: new THREE.MeshBasicMaterial({ color: 0x9af8ff }),
    emissiveCyanDim: new THREE.MeshBasicMaterial({ color: 0x2b93a6 }),
    emissiveOrange: new THREE.MeshBasicMaterial({ color: 0xffac59 }),
    emissiveRed: new THREE.MeshBasicMaterial({ color: 0xff4a42 }),
    emissiveWhite: new THREE.MeshBasicMaterial({ color: 0xe9fdff }),
    emissiveGreen: new THREE.MeshBasicMaterial({ color: 0x7cffc4 }),
    screenCyan: new THREE.MeshBasicMaterial({ color: 0xa8f6ff }),
    dust: new THREE.PointsMaterial({ color: 0xa7e8f2, size: 0.026, transparent: true, opacity: 0.42, depthWrite: false, sizeAttenuation: true }),
  }

  m.floorLab = new THREE.MeshStandardMaterial({ map: floorTexture('#26343d', 'rgba(80,108,118,.35)', 10, 8, { grime: '#5d7a82' }), roughness: 0.7, metalness: 0.48 })
  m.floorHall = new THREE.MeshStandardMaterial({ map: floorTexture('#253138', 'rgba(72,98,108,.32)', 3, 8, { grime: '#5a7278', grate: true }), roughness: 0.78, metalness: 0.44 })
  m.floorStorage = new THREE.MeshStandardMaterial({ map: floorTexture('#293330', 'rgba(88,100,90,.28)', 6, 6, { grime: '#5d6a58', hazard: true }), roughness: 0.84, metalness: 0.36 })
  m.floorMaint = new THREE.MeshStandardMaterial({ map: floorTexture('#2b332d', 'rgba(90,96,78,.3)', 6, 6, { grime: '#6b6b4c', grate: true }), roughness: 0.8, metalness: 0.42 })
  m.floorResearch = new THREE.MeshStandardMaterial({ map: floorTexture('#23343a', 'rgba(70,120,120,.3)', 6, 5, { grime: '#527e7e' }), roughness: 0.6, metalness: 0.5 })
  m.floorExtract = new THREE.MeshStandardMaterial({ map: floorTexture('#232e35', 'rgba(70,96,104,.32)', 6, 6, { grime: '#4e6e78', hazard: true }), roughness: 0.74, metalness: 0.46 })
  m.ceiling = std(0x0c1216, 0.94, 0.24)

  m.screenA = new THREE.MeshBasicMaterial({ map: screenTexture(0), color: 0xffffff })
  m.screenB = new THREE.MeshBasicMaterial({ map: screenTexture(1), color: 0xffffff })
  m.screenC = new THREE.MeshBasicMaterial({ map: screenTexture(2), color: 0xffffff })

  m.shadow = new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, opacity: 0.55, depthWrite: false })
  m.poolCyan = new THREE.MeshBasicMaterial({ map: poolTexture(), color: 0x65e6ff, transparent: true, opacity: 0.13, depthWrite: false, blending: THREE.AdditiveBlending })
  m.poolOrange = new THREE.MeshBasicMaterial({ map: poolTexture(), color: 0xff9c4a, transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending })
  m.poolWhite = new THREE.MeshBasicMaterial({ map: poolTexture(), color: 0xbfefff, transparent: true, opacity: 0.15, depthWrite: false, blending: THREE.AdditiveBlending })

  return m
}

/* -------------------------------------------------------------------------- */
/* Static geometry batching                                                   */
/* -------------------------------------------------------------------------- */
const _m4 = new THREE.Matrix4()
const _q = new THREE.Quaternion()
const _v = new THREE.Vector3()
const _s = new THREE.Vector3()
const _e = new THREE.Euler()

export class Batch {
  constructor() {
    this.buckets = new Map()
  }

  addGeo(geometry, material, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) {
    const geo = geometry.clone()
    _e.set(rotation[0], rotation[1], rotation[2])
    _q.setFromEuler(_e)
    _v.set(position[0], position[1], position[2])
    _s.set(scale[0], scale[1], scale[2])
    _m4.compose(_v, _q, _s)
    geo.applyMatrix4(_m4)
    if (!this.buckets.has(material)) this.buckets.set(material, [])
    this.buckets.get(material).push(geo)
    geometry.dispose()
  }

  box(w, h, d, material, x, y, z, ry = 0, rx = 0, rz = 0) {
    this.addGeo(new THREE.BoxGeometry(w, h, d), material, [x, y, z], [rx, ry, rz])
  }

  cyl(rt, rb, h, seg, material, x, y, z, rx = 0, rz = 0, ry = 0) {
    this.addGeo(new THREE.CylinderGeometry(rt, rb, h, seg), material, [x, y, z], [rx, ry, rz])
  }

  shadow(x, z, sx, sz, material, opacity = 1) {
    const geo = new THREE.PlaneGeometry(sx, sz)
    this.addGeo(geo, material, [x, 0.014, z], [-Math.PI / 2, 0, 0])
  }

  flush(scene, { receive = true } = {}) {
    for (const [material, geos] of this.buckets) {
      if (!geos.length) continue
      const merged = mergeGeometries(geos, false)
      if (!merged) {
        console.warn('Geometry merge failed for material', material)
        continue
      }
      const mesh = new THREE.Mesh(merged, material)
      mesh.receiveShadow = receive
      mesh.castShadow = false
      mesh.matrixAutoUpdate = false
      mesh.updateMatrix()
      scene.add(mesh)
      for (const g of geos) g.dispose()
    }
    this.buckets.clear()
  }
}

export function makeSprite(texture, color, scale, opacity = 0.8) {
  const mat = new THREE.SpriteMaterial({
    map: texture, color, transparent: true, opacity,
    depthWrite: false, blending: THREE.AdditiveBlending, fog: true,
  })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.set(scale, scale, 1)
  return sprite
}
