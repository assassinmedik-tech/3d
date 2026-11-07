import * as THREE from 'three'
import { Outpost, PATROLS, isBlocked } from './world/outpost.js'
import { Operative, ThirdPersonCamera } from './player.js'
import { SecurityRobot } from './enemies.js'
import { LootSystem } from './loot.js'
import { UI } from './ui.js'
import { AudioEngine } from './audio.js'

/* ========================================================================== */
/* Boot                                                                       */
/* ========================================================================== */
const ui = new UI()
const audio = new AudioEngine()

function readStored(key) {
  try { return localStorage.getItem(key) } catch { return null }
}
function store(key, value) {
  try { localStorage.setItem(key, value) } catch { /* ignore */ }
}

function detectQuality() {
  const saved = readStored('ls09_quality')
  if (saved === 'low' || saved === 'medium' || saved === 'high') return saved
  const coarse = window.matchMedia('(pointer: coarse)').matches
  if (coarse) {
    const mem = navigator.deviceMemory || 4
    return mem <= 4 ? 'low' : 'medium'
  }
  return 'high'
}

let quality = detectQuality()
const isMobile = ui.mobile

const canvas = document.getElementById('game')
let renderer
try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: quality !== 'low',
    powerPreference: 'high-performance',
    alpha: false,
    stencil: false,
  })
} catch (err) {
  ui.setError('WebGL could not be initialized on this device. Try enabling hardware acceleration or a different browser.')
  throw err
}

renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.32
renderer.shadowMap.enabled = quality !== 'low'
renderer.shadowMap.type = THREE.PCFShadowMap
renderer.setPixelRatio(quality === 'high' ? Math.min(window.devicePixelRatio || 1, 2) : quality === 'medium' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1)
renderer.setSize(window.innerWidth, window.innerHeight)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x03080d)
scene.fog = new THREE.FogExp2(0x06121a, 0.026)

const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.08, 130)
camera.rotation.order = 'YXZ'

ui.setLoading(0.18, 'INITIALIZING RECOVERY SUIT')
const world = new Outpost(scene, quality)
ui.setLoading(0.52, 'OUTPOST GEOMETRY ONLINE')

const player = new Operative(scene)
player.teleport(0, 4.6, Math.PI)
const cam = new ThirdPersonCamera(camera)
cam.yaw = 0

const loot = new LootSystem(scene, world)

const robots = [
  new SecurityRobot(scene, { name: 'K-7', start: { x: -6.5, z: -5 }, patrol: PATROLS.lab, visionRange: 13, fov: 76 }),
  new SecurityRobot(scene, { name: 'K-9', start: { x: 0, z: -13.5 }, patrol: PATROLS.storage, visionRange: 12.5, fov: 74 }),
]
const enemies = robots

ui.setLoading(0.82, 'SECURITY UNITS DEPLOYED')
ui.setAudioLabel(audio.enabled)
ui.setQualityLabel(quality)
ui.setPromptKeyForMobile()

/* ========================================================================== */
/* Game state                                                                 */
/* ========================================================================== */
let state = 'menu' // menu | playing | paused | inventory | log | dead | complete
let elapsed = 0
let menuTime = 0
let lastFrame = performance.now() / 1000
let inventory = []
let hasKeycard = false
let dataCredits = 0
let lastPrompt = null
let currentHide = null
let researchReadyNotified = false
let lastAlertToast = -10
let pendingToast = null
const terminalsRead = new Set()
const extraction = { active: false, elapsed: 0, duration: 12, lastTick: -1, alerted: false }
const input = { x: 0, z: 0, sprint: false }
const keys = new Set()
let mobileSprint = false
let joystick = { x: 0, z: 0, active: false, pointerId: null }
let lookPointer = { id: null, x: 0, y: 0 }
let dragging = false
let dragX = 0, dragY = 0

const tmpVec = new THREE.Vector3()
const tmpDir = new THREE.Vector3()

/* ========================================================================== */
/* Quality                                                                    */
/* ========================================================================== */
function applyQuality(q, announce = false) {
  quality = q
  const dpr = q === 'high' ? Math.min(window.devicePixelRatio || 1, 2)
    : q === 'medium' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1
  renderer.setPixelRatio(dpr)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = q !== 'low'
  world.setQuality(q)
  // trim the realtime light count on low-end hardware
  if (world.labFill) world.labFill.visible = q !== 'low'
  if (world.researchLight) world.researchLight.visible = q !== 'low'
  ui.setQualityLabel(q)
  store('ls09_quality', q)
  if (announce) {
    ui.toast('GRAPHICS PROFILE', `${q.toUpperCase()} — ${q === 'low' ? 'battery saver' : q === 'medium' ? 'balanced' : 'full detail'}`, 'rare')
  }
}
applyQuality(quality)

/* ========================================================================== */
/* Robot wiring                                                               */
/* ========================================================================== */
for (const robot of robots) {
  robot.onAttack = (r, damage) => {
    if (state !== 'playing' || player.hidden) return
    const died = player.takeDamage(damage)
    ui.flashDamage()
    cam.addShake(0.15)
    audio.damage()
    if (died) die()
  }
  robot.onStateChange = (r, next) => {
    if (state !== 'playing') return
    if (next === 'chase') {
      audio.alert()
      if (elapsed - lastAlertToast > 4) {
        lastAlertToast = elapsed
        ui.toast('DETECTION // UNIT ' + r.name, 'Break line of sight or conceal yourself', 'warn')
      }
      // nearby unit receives the alert
      for (const other of robots) {
        if (other === r) continue
        const d = other.position.distanceTo(r.position)
        if (d < 28) other.alertTo(player.position, true)
      }
    }
  }
}

/* ========================================================================== */
/* Interaction helpers                                                        */
/* ========================================================================== */
function researchCount() {
  return inventory.filter((i) => i.meta.research).length
}

function inventoryCredits() {
  return inventory.reduce((sum, i) => sum + i.meta.credits, 0)
}

function totalCredits() {
  return inventoryCredits() + dataCredits
}

function refreshInventoryUI() {
  ui.renderInventory(inventory, researchCount(), totalCredits(), hasKeycard, state === 'inventory')
}

function nearestInteractable() {
  let best = null
  let bestD = Infinity
  for (const it of world.interactables) {
    if (it.active === false) continue
    if (it.kind === 'container' && it.opened) continue
    if (it.kind === 'door' && world.researchDoor && world.researchDoor.unlocked) continue
    const dx = it.x - player.position.x
    const dz = it.z - player.position.z
    const d2 = dx * dx + dz * dz
    if (d2 > it.radius * it.radius) continue
    if (d2 < bestD) { bestD = d2; best = it }
  }
  return best
}

function promptLabelFor(it) {
  if (!it) return ''
  if (it.kind === 'extraction') {
    return researchCount() >= 3 ? 'Initiate extraction' : `Extraction locked — ${researchCount()} / 3 research`
  }
  if (it.kind === 'door') {
    return hasKeycard ? 'Unlock research wing' : 'Sealed — security keycard required'
  }
  return it.label
}

function handleInteract() {
  if (state !== 'playing' || !player.alive) return
  if (player.hidden) {
    leaveHide()
    return
  }
  const it = lastPrompt
  if (!it) return
  const count = researchCount()

  if (it.kind === 'loot') {
    tryPickup(it.id)
  } else if (it.kind === 'hide') {
    enterHide(it)
  } else if (it.kind === 'terminal') {
    openTerminal(it)
  } else if (it.kind === 'container') {
    openContainer(it)
  } else if (it.kind === 'door') {
    if (world.researchDoor && world.researchDoor.unlocked) return
    if (hasKeycard) {
      world.unlockResearchDoor()
      audio.unlock()
      cam.addShake(0.05)
      ui.toast('CLEARANCE ACCEPTED', 'Research wing unlocked — Level 4 access', 'good', 3600)
      ui.setPrompt('', 'E', false)
      lastPrompt = null
    } else {
      audio.ui(false)
      ui.toast('ACCESS DENIED', 'Security keycard required. Search the storage bay.', 'warn', 3600)
    }
  } else if (it.kind === 'extraction') {
    if (extraction.active) return
    if (count >= 3) startExtraction()
    else {
      audio.ui(false)
      ui.toast('EXTRACTION DENIED', `${count} / 3 research assets validated. Recover ${3 - count} more.`, 'warn', 3600)
    }
  }
}

function tryPickup(uid) {
  if (inventory.length >= 6) {
    audio.ui(false)
    ui.toast('FIELD PACK FULL', 'Open the pack (TAB) and discard an item to free a slot.', 'warn', 4000)
    return
  }
  const item = loot.pickup(uid)
  if (!item) return
  const meta = item.meta
  const entry = { uid: item.uid, metaId: item.metaId, meta }
  inventory.push(entry)
  if (meta.battery) {
    const before = player.battery
    player.rechargeBattery(meta.battery)
    if (player.battery > before) {
      ui.toast('BATTERY RECHARGED', `+${Math.round(player.battery - before)}% suit lamp capacity`, 'good', 3200)
    }
  }
  audio.pickup(meta.rarity)
  ui.toast(`ACQUIRED // ${meta.name.toUpperCase()}`, `${meta.rarityLabel} • ${meta.type} • +${meta.credits} CR`, meta.rarity, 3600)
  refreshInventoryUI()
  ui.setPrompt('', 'E', false)
  lastPrompt = null
  if (researchCount() >= 3 && !researchReadyNotified) {
    researchReadyNotified = true
    setTimeout(() => {
      if (state === 'playing') {
        ui.toast('EXTRACTION READY', 'Research validated. Proceed to extraction pad 09.', 'good', 4400)
        audio.unlock()
      }
    }, 700)
  }
}

function dropItem(uid) {
  if (state !== 'inventory') return
  const idx = inventory.findIndex((i) => i.uid === uid)
  if (idx < 0) return
  const [entry] = inventory.splice(idx, 1)
  const fx = Math.sin(player.physics.yaw)
  const fz = Math.cos(player.physics.yaw)
  const x = player.position.x + fx * 0.7
  const z = player.position.z + fz * 0.7
  loot.spawnDropped(entry.metaId, x, z)
  audio.ui(false)
  ui.toast('ITEM DISCARDED', `${entry.meta.name} dropped at your position`, '', 2600)
  refreshInventoryUI()
}

function openContainer(it) {
  if (it.opened) return
  it.opened = true
  world.openContainer(it.id)
  audio.container()
  const lootType = it.loot
  if (lootType === 'keycard') {
    hasKeycard = true
    audio.unlock()
    ui.toast('SECURITY KEYCARD', 'Level 4 research clearance acquired', 'good', 4200)
  } else if (lootType === 'medkit') {
    player.heal(45)
    ui.toast('MEDKIT RECOVERED', '+45 suit integrity', 'good', 3200)
  } else if (lootType === 'battery') {
    player.rechargeBattery(100)
    ui.toast('BATTERY REPLACED', 'Suit lamp fully charged', 'good', 3200)
  } else if (lootType === 'credits') {
    dataCredits += 120
    ui.toast('CREDITS RECOVERED', '+120 CR', 'uncommon', 3200)
  }
  refreshInventoryUI()
}

function openTerminal(it) {
  state = 'log'
  releasePointerLock()
  audio.setPaused(true)
  audio.terminal()
  ui.setPrompt('', 'E', false)
  lastPrompt = null
  if (!terminalsRead.has(it.id)) {
    terminalsRead.add(it.id)
    dataCredits += 25
    pendingToast = { title: 'DATA RECOVERED', sub: '+25 CR // archive copy secured', rarity: 'rare' }
  }
  ui.showLog(it.source, it.title, it.body)
  refreshInventoryUI()
}

/* ========================================================================== */
/* Hiding                                                                     */
/* ========================================================================== */
function enterHide(it) {
  if (player.hidden) return
  currentHide = it
  player.setHidden(true, it.hideType)
  player.teleport(it.hidePos.x, it.hidePos.z, it.hidePos.yaw + Math.PI)
  cam.yaw = it.hidePos.yaw
  cam.pitch = 0.04
  cam.initialized = false
  audio.hide()
  ui.setHidden(true)
  ui.setPrompt('', 'E', false)
  ui.toast('CONCEALED', 'Enemy visual contact blocked', 'good', 2200)
  lastPrompt = null
}

function leaveHide() {
  if (!player.hidden || !currentHide) return
  const yaw = cam.yaw
  const fx = -Math.sin(yaw)
  const fz = -Math.cos(yaw)
  let x = player.position.x + fx * 0.95
  let z = player.position.z + fz * 0.95
  if (isBlocked(world.colliders, x, z, 0.42)) {
    x = player.position.x + fx * 0.35
    z = player.position.z + fz * 0.35
  }
  if (isBlocked(world.colliders, x, z, 0.42)) {
    x = player.position.x
    z = player.position.z
  }
  player.setHidden(false)
  player.teleport(x, z, yaw + Math.PI)
  cam.yaw = yaw
  cam.pitch = 0.22
  cam.initialized = false
  currentHide = null
  audio.hide()
  ui.setHidden(false)
  ui.toast('LEFT COVER', 'You are exposed again', '', 1800)
}

/* ========================================================================== */
/* Extraction                                                                 */
/* ========================================================================== */
function startExtraction() {
  extraction.active = true
  extraction.elapsed = 0
  extraction.lastTick = 12
  extraction.alerted = false
  researchReadyNotified = true
  world.setExtractionActive(true)
  audio.extractionStart()
  ui.toast('EXTRACTION INITIATED', 'Hold position on pad 09 for 12 seconds', 'good', 4200)
  if (isMobile) {
    ui.setPrompt('', 'USE', false)
  }
  lastPrompt = null
}

function cancelExtraction(reason) {
  extraction.active = false
  world.setExtractionActive(false)
  ui.setExtraction(false)
  audio.ui(false)
  ui.toast('EXTRACTION ABORTED', reason, 'warn', 3600)
}

function updateExtraction(dt) {
  if (!extraction.active) return
  extraction.elapsed += dt
  const progress = Math.min(1, extraction.elapsed / extraction.duration)
  const remaining = Math.max(0, extraction.duration - extraction.elapsed)
  const padDist = Math.hypot(player.position.x, player.position.z - 22.1)

  if (padDist > 7.2) {
    cancelExtraction('You left the extraction zone.')
    return
  }
  if (progress >= 1) {
    extraction.active = false
    world.setExtractionActive(false)
    ui.setExtraction(false)
    completeMission()
    return
  }
  ui.setExtraction(true, progress, remaining)
  const sec = Math.ceil(remaining)
  if (sec !== extraction.lastTick) {
    extraction.lastTick = sec
    audio.tick(sec <= 3)
  }
  if (extraction.elapsed > 3.2 && !extraction.alerted) {
    extraction.alerted = true
    let nearest = null
    let best = Infinity
    for (const r of robots) {
      const d = Math.hypot(r.position.x, r.position.z - 22.1)
      if (d < best) { best = d; nearest = r }
    }
    if (nearest) {
      nearest.alertTo({ x: 0, z: 22.1 }, true)
      ui.toast('SECURITY ALERT', 'A unit is moving toward the extraction pad', 'warn', 3600)
    }
  }
}

/* ========================================================================== */
/* End states                                                                 */
/* ========================================================================== */
function die() {
  if (state === 'dead') return
  state = 'dead'
  releasePointerLock()
  extraction.active = false
  world.setExtractionActive(false)
  ui.setExtraction(false)
  ui.setPrompt('', 'E', false)
  player.alive = false
  player.setFlashlight(false)
  audio.setPaused(true)
  audio.death()
  ui.showDead()
}

function completeMission() {
  state = 'complete'
  releasePointerLock()
  audio.setPaused(true)
  ui.setPrompt('', 'E', false)
  ui.setExtraction(false)
  const credits = totalCredits() + 300
  ui.showComplete({
    time: elapsed,
    research: researchCount(),
    credits,
    items: inventory.slice(),
  })
  audio.complete()
}

/* ========================================================================== */
/* Objective + HUD                                                            */
/* ========================================================================== */
function objectiveInfo() {
  if (extraction.active) {
    return {
      text: 'Hold position for extraction', sub: 'EXTRACTION IN PROGRESS', label: 'EXTRACTION',
      target: { x: 0, y: 1.4, z: 22.1 }, progress: researchCount() / 3,
    }
  }
  if (researchCount() >= 3) {
    return {
      text: 'Reach the extraction pad', sub: 'RESEARCH VALIDATED — PAD 09 // SOUTH', label: 'EXTRACTION',
      target: { x: 0, y: 1.4, z: 22.1 }, progress: 1,
    }
  }
  const has = (id) => inventory.some((i) => i.metaId === id)
  let target = null
  let text = 'Recover remaining research assets'
  let sub = `${researchCount()} / 3 RESEARCH ITEMS`
  let label = 'RESEARCH'
  if (!has('doc-lab')) {
    text = 'Recover Dr. Voss’s field log'
    sub = 'LAB-01 // CENTRAL'
    label = 'RESEARCH LOG'
    const anchor = world.lootAnchors['doc-lab']
    target = { x: anchor.x, y: anchor.y, z: anchor.z }
  } else if (!hasKeycard) {
    text = 'Recover the security keycard'
    sub = 'STORAGE 02 // CARGO CRATE'
    label = 'SECURITY CARD'
    const it = world.interactables.find((i) => i.kind === 'container' && i.id === 'storage-keycard')
    target = it ? { x: it.x, y: 1.0, z: it.z } : { x: 0, y: 1, z: -23 }
  } else if (!has('doc-storage')) {
    text = 'Recover the signal analysis'
    sub = 'STORAGE 02 // ARCHIVE'
    label = 'RESEARCH LOG'
    const anchor = world.lootAnchors['doc-storage']
    target = { x: anchor.x, y: anchor.y, z: anchor.z }
  } else if (!has('module-research')) {
    text = 'Recover Project ECHO’s quantum core'
    sub = world.researchDoor && world.researchDoor.unlocked
      ? 'RESEARCH WING // LEVEL 4 ACCESS'
      : 'RESEARCH WING // LOCKED'
    label = 'QUANTUM CORE'
    const anchor = world.lootAnchors['module-research']
    target = { x: anchor.x, y: anchor.y, z: anchor.z }
  } else {
    const nearest = loot.nearestResearch(player.position.x, player.position.z)
    if (nearest) {
      text = 'Recover remaining research'
      sub = `${researchCount()} / 3 RESEARCH ITEMS`
      target = { x: nearest.anchor.x, y: nearest.anchor.y, z: nearest.anchor.z }
    } else {
      text = 'Return to the extraction pad'
      sub = `${researchCount()} / 3 RESEARCH ITEMS`
      target = { x: 0, y: 1.4, z: 22.1 }
    }
  }
  return { text, sub, label, target, progress: researchCount() / 3 }
}

function updateObjectiveUI() {
  const info = objectiveInfo()
  const dist = info.target ? Math.hypot(info.target.x - player.position.x, info.target.z - player.position.z) : null
  ui.setObjective(info.text, info.sub, dist, info.progress)
  if (!info.target) { ui.setMarker(false); return }
  const t = info.target
  tmpVec.set(t.x, t.y + 0.35, t.z)
  tmpDir.copy(tmpVec).sub(camera.position)
  camera.getWorldDirection(tmpVec)
  if (tmpDir.dot(tmpVec) <= 0.08) {
    ui.setMarker(false)
    return
  }
  const ndc = new THREE.Vector3(t.x, t.y + 0.35, t.z).project(camera)
  let x = (ndc.x * 0.5 + 0.5) * window.innerWidth
  let y = (-ndc.y * 0.5 + 0.5) * window.innerHeight
  const mx = isMobile ? 46 : 70
  const topM = 92
  const botM = isMobile ? 210 : 100
  x = Math.max(mx, Math.min(window.innerWidth - mx, x))
  y = Math.max(topM, Math.min(window.innerHeight - botM, y))
  ui.setMarker(true, x, y, dist, info.label)
}

function updateInteractionUI() {
  if (extraction.active) {
    ui.setPrompt('', 'E', false)
    lastPrompt = null
    return
  }
  if (player.hidden) {
    ui.setPrompt('Leave concealment', isMobile ? 'USE' : 'E', true)
    lastPrompt = null
    return
  }
  const it = nearestInteractable()
  lastPrompt = it
  if (!it) {
    ui.setPrompt('', 'E', false)
    return
  }
  let label = promptLabelFor(it)
  if (it.kind === 'loot') {
    const lootItem = loot.items.get(it.id)
    if (lootItem) label = `Collect ${lootItem.meta.name} — ${lootItem.meta.rarityLabel}`
  }
  ui.setPrompt(label, isMobile ? 'USE' : 'E', true)
}

function updateHUD(dt) {
  ui.setVitals(player.health, player.energy, player.battery)
  ui.setFlashlight(player.flashlightOn)
  ui.setHidden(player.hidden)
  refreshInventoryUI()

  let maxDetection = 0
  let chasing = false
  let searching = false
  let nearest = Infinity
  for (const r of robots) {
    maxDetection = Math.max(maxDetection, r.detection)
    if (r.state === 'chase') chasing = true
    else if (r.state === 'search' || r.state === 'investigate' || r.state === 'suspicious') searching = true
    nearest = Math.min(nearest, player.position.distanceTo(r.position))
  }
  const level = chasing ? 2 : (searching || maxDetection > 0.06) ? 1 : 0
  let text = 'NO HOSTILES DETECTED'
  if (chasing) text = 'SECURITY UNIT IN PURSUIT'
  else if (maxDetection > 0.06) text = 'MOVEMENT DETECTED // BREAK LINE OF SIGHT'
  else if (searching) text = 'UNIT SEARCHING // STAY CONCEALED'
  ui.setThreat(level, text)

  ui.setExtraction(extraction.active, extraction.elapsed / extraction.duration, Math.max(0, extraction.duration - extraction.elapsed))
  updateObjectiveUI()
  updateInteractionUI()

  const threatNorm = chasing ? 1 : Math.max(0, Math.min(1, maxDetection))
  audio.update(dt, nearest, threatNorm, extraction.active)
}

/* ========================================================================== */
/* Input                                                                      */
/* ========================================================================== */
function requestPointerLock() {
  if (isMobile || state !== 'playing') return
  if (document.pointerLockElement === canvas) return
  try {
    const p = canvas.requestPointerLock?.()
    if (p && p.catch) p.catch(() => {})
  } catch { /* drag fallback */ }
}

function releasePointerLock() {
  if (document.pointerLockElement === canvas) {
    try { document.exitPointerLock() } catch { /* ignore */ }
  }
  dragging = false
}

window.addEventListener('keydown', (e) => {
  if (e.code === 'Tab') {
    e.preventDefault()
    if (e.repeat) return
    if (state === 'playing') openInventoryPanel()
    else if (state === 'inventory') closeInventoryPanel()
    return
  }
  if (e.code === 'Escape') {
    if (state === 'playing') pauseGame()
    else if (state === 'paused') resumeGame()
    else if (state === 'inventory') closeInventoryPanel()
    else if (state === 'log') closeLogPanel()
    return
  }
  if (e.code === 'KeyE') {
    if (state === 'playing' && !e.repeat) handleInteract()
    return
  }
  if (e.code === 'KeyF') {
    if (state === 'playing' && !e.repeat) toggleFlashlight()
    return
  }
  if (e.code === 'KeyM') {
    if (!e.repeat) toggleAudio()
    return
  }
  if (state === 'playing') keys.add(e.code)
})

window.addEventListener('keyup', (e) => {
  keys.delete(e.code)
})

canvas.addEventListener('pointerdown', (e) => {
  if (state !== 'playing') return
  if (e.pointerType === 'touch') {
    if (e.clientX < window.innerWidth * 0.36) return
    lookPointer.id = e.pointerId
    lookPointer.x = e.clientX
    lookPointer.y = e.clientY
    try { canvas.setPointerCapture(e.pointerId) } catch { /* ignore */ }
    ui.setMobileLookHintHidden(true)
  } else if (e.button === 0) {
    if (document.pointerLockElement !== canvas) requestPointerLock()
    dragging = true
    dragX = e.clientX
    dragY = e.clientY
  }
})
canvas.addEventListener('pointermove', (e) => {
  if (state !== 'playing') return
  if (e.pointerType === 'touch' && lookPointer.id === e.pointerId) {
    const dx = e.clientX - lookPointer.x
    const dy = e.clientY - lookPointer.y
    lookPointer.x = e.clientX
    lookPointer.y = e.clientY
    cam.handleMouse(dx * 1.55, dy * 1.3)
  }
})
canvas.addEventListener('pointerup', (e) => {
  if (lookPointer.id === e.pointerId) lookPointer.id = null
  if (e.pointerType !== 'touch') dragging = false
})
canvas.addEventListener('pointercancel', (e) => {
  if (lookPointer.id === e.pointerId) lookPointer.id = null
  dragging = false
})
window.addEventListener('pointermove', (e) => {
  if (state !== 'playing' || e.pointerType === 'touch') return
  if (document.pointerLockElement === canvas) {
    cam.handleMouse(e.movementX || 0, e.movementY || 0)
  } else if (dragging) {
    cam.handleMouse(e.clientX - dragX, e.clientY - dragY)
    dragX = e.clientX
    dragY = e.clientY
  }
})
window.addEventListener('pointerup', () => { dragging = false })
canvas.addEventListener('wheel', (e) => {
  if (state !== 'playing') return
  e.preventDefault()
  cam.zoomBy(e.deltaY)
}, { passive: false })

/* ------------------------------ joystick -------------------------------- */
const joyEl = ui.el['joystick']
const joyStick = ui.el['joystick-stick']

function updateJoystick(clientX, clientY) {
  const rect = joyEl.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const max = rect.width * 0.32
  let dx = clientX - cx
  let dy = clientY - cy
  const len = Math.hypot(dx, dy)
  if (len > max) { dx = dx / len * max; dy = dy / len * max }
  joystick.x = dx / max
  joystick.z = -dy / max
  joyStick.style.transform = `translate(${dx}px, ${dy}px)`
  joyEl.classList.add('active')
}

joyEl.addEventListener('pointerdown', (e) => {
  e.preventDefault()
  if (state !== 'playing') return
  joystick.pointerId = e.pointerId
  joyEl.setPointerCapture(e.pointerId)
  updateJoystick(e.clientX, e.clientY)
})
joyEl.addEventListener('pointermove', (e) => {
  if (joystick.pointerId !== e.pointerId) return
  e.preventDefault()
  updateJoystick(e.clientX, e.clientY)
})
function endJoystick(e) {
  if (joystick.pointerId !== e.pointerId) return
  joystick.pointerId = null
  joystick.x = 0
  joystick.z = 0
  joyStick.style.transform = 'translate(0px, 0px)'
  joyEl.classList.remove('active')
}
joyEl.addEventListener('pointerup', endJoystick)
joyEl.addEventListener('pointercancel', endJoystick)
joyEl.addEventListener('pointerleave', (e) => { if (joystick.pointerId === e.pointerId) endJoystick(e) })

/* ========================================================================== */
/* UI callbacks                                                               */
/* ========================================================================== */
ui.on('start', () => startGame())
ui.on('pause', () => { if (state === 'playing') pauseGame() })
ui.on('resume', () => resumeGame())
ui.on('inventory', () => {
  if (state === 'playing') openInventoryPanel()
  else if (state === 'inventory') closeInventoryPanel()
})
ui.on('closeInventory', () => closeInventoryPanel())
ui.on('closeLog', () => closeLogPanel())
ui.on('interact', () => handleInteract())
ui.on('flashlight', () => toggleFlashlight())
ui.on('drop', (uid) => dropItem(uid))
ui.on('restart', () => location.reload())
ui.on('audio', () => toggleAudio())
ui.on('quality', (q) => applyQuality(q, true))
ui.on('qualityCycle', () => {
  const order = ['low', 'medium', 'high']
  const next = order[(order.indexOf(quality) + 1) % order.length]
  applyQuality(next, false)
  ui.toast('GRAPHICS PROFILE', next.toUpperCase(), 'rare', 1800)
})
ui.on('sprintHold', (on) => { mobileSprint = on })
ui.on('uiSound', () => audio.ui(true))

function startGame() {
  if (state !== 'menu') return
  state = 'playing'
  elapsed = 0
  lastFrame = performance.now() / 1000
  ui.hideScreens()
  audio.ensure()
  audio.resume()
  audio.setPaused(false)
  audio.ui(true)
  cam.yaw = 0
  cam.pitch = 0.26
  cam.zoom = 4.4
  cam.initialized = false
  // give the operative a short orientation window before optics calibrate
  for (const r of robots) r.grace = 5
  requestPointerLock()
  refreshInventoryUI()
  ui.toast('MISSION ACTIVE', 'Recover three research assets. Reach extraction pad 09.', 'rare', 5000)
}

function pauseGame() {
  if (state !== 'playing') return
  state = 'paused'
  keys.clear()
  mobileSprint = false
  releasePointerLock()
  audio.setPaused(true)
  ui.setPrompt('', 'E', false)
  ui.showPause()
}

function resumeGame() {
  if (state !== 'paused') return
  state = 'playing'
  lastFrame = performance.now() / 1000
  ui.hideScreens()
  audio.setPaused(false)
  requestPointerLock()
}

function openInventoryPanel() {
  if (state !== 'playing') return
  state = 'inventory'
  releasePointerLock()
  audio.setPaused(true)
  ui.setPrompt('', 'E', false)
  refreshInventoryUI()
  ui.showInventory()
}

function closeInventoryPanel() {
  if (state !== 'inventory') return
  state = 'playing'
  lastFrame = performance.now() / 1000
  ui.hideScreens()
  audio.setPaused(false)
  refreshInventoryUI()
  requestPointerLock()
}

function closeLogPanel() {
  if (state !== 'log') return
  state = 'playing'
  lastFrame = performance.now() / 1000
  ui.hideScreens()
  audio.setPaused(false)
  requestPointerLock()
  if (pendingToast) {
    ui.toast(pendingToast.title, pendingToast.sub, pendingToast.rarity, 3200)
    pendingToast = null
  }
}

function toggleFlashlight() {
  if (state !== 'playing') return
  if (player.battery <= 0) {
    audio.ui(false)
    ui.toast('BATTERY DEPLETED', 'Find a power cell or battery supply', 'warn', 2800)
    return
  }
  const on = player.setFlashlight(!player.flashlightOn)
  if (on) audio.ui(true)
  else audio.ui(false)
  ui.setFlashlight(player.flashlightOn)
}

function toggleAudio() {
  const enabled = audio.toggle()
  ui.setAudioLabel(enabled)
  if (enabled) audio.ui(true)
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden && state === 'playing') pauseGame()
})

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  const dpr = quality === 'high' ? Math.min(window.devicePixelRatio || 1, 2)
    : quality === 'medium' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1
  renderer.setPixelRatio(dpr)
})

/* ========================================================================== */
/* Simulation                                                                 */
/* ========================================================================== */
function getInput() {
  let x = 0, z = 0
  if (keys.has('KeyA') || keys.has('ArrowLeft')) x -= 1
  if (keys.has('KeyD') || keys.has('ArrowRight')) x += 1
  if (keys.has('KeyW') || keys.has('ArrowUp')) z += 1
  if (keys.has('KeyS') || keys.has('ArrowDown')) z -= 1
  if (Math.hypot(joystick.x, joystick.z) > 0.12) {
    x = joystick.x
    z = joystick.z
  }
  const len = Math.hypot(x, z)
  if (len > 1) { x /= len; z /= len }
  input.x = x
  input.z = z
  input.sprint = keys.has('ShiftLeft') || keys.has('ShiftRight') || mobileSprint
  return input
}

function updateCamera(dt) {
  if (player.hidden) {
    const eye = player.hideType === 'locker' ? 1.53 : 1.08
    const p = player.position
    const shake = cam.shake
    camera.position.set(
      p.x + (Math.random() - 0.5) * shake,
      eye + (Math.random() - 0.5) * shake,
      p.z + (Math.random() - 0.5) * shake,
    )
    const pitch = Math.max(-0.55, Math.min(0.55, cam.pitch))
    camera.rotation.set(-pitch, cam.yaw, 0)
    cam.shake *= Math.exp(-dt * 9)
  } else {
    cam.update(dt, player, world, false, null)
  }
}

function playTick() {
  if (state !== 'playing') return
  const dt = 0.016
  elapsed += dt
}

function simulationStep(dt) {
  elapsed += dt
  const inp = getInput()
  player.update(dt, inp, cam.yaw, world, state === 'playing')
  world.update(dt, player.position, robots)
  loot.update(dt, elapsed)
  for (const r of robots) r.update(dt, player, world, true)
  updateCamera(dt)
  updateExtraction(dt)
  updateHUD(dt)

  if (player.health <= 0 && state === 'playing') die()
}

/* Menu / cinematic idle */
function menuCamera(dt) {
  menuTime += dt
  const a = 0.9 + Math.sin(menuTime * 0.055) * 0.1
  const r = 8.2
  camera.position.set(Math.sin(a) * r, 2.72 + Math.sin(menuTime * 0.3) * 0.04, Math.cos(a) * r)
  camera.lookAt(-0.6, 1.25, -0.5)
  player.update(dt, { x: 0, z: 0, sprint: false }, 0, world, false)
  world.update(dt, player.position, robots)
  loot.update(dt, menuTime)
  for (const r of robots) r.update(dt, player, world, false)
  player.physics.speed = 0
}

/* ========================================================================== */
/* Main loop                                                                  */
/* ========================================================================== */
function frame(nowMs) {
  const now = nowMs / 1000
  const dt = Math.min(0.05, Math.max(0.0001, now - lastFrame))
  lastFrame = now

  if (state === 'menu') {
    menuCamera(dt)
    ui.setTitleClock(menuTime)
  } else if (state === 'playing') {
    simulationStep(dt)
  } else {
    // keep only minimal visual life while paused / in menus
    cam.shake *= Math.exp(-dt * 9)
  }

  renderer.render(scene, camera)
  requestAnimationFrame(frame)
}

/* ========================================================================== */
/* Start                                                                      */
/* ========================================================================== */
refreshInventoryUI()
ui.setLoading(1, 'READY')
ui.showTitle()
requestAnimationFrame(frame)

setTimeout(() => {
  ui.hideLoading()
}, 420)

// expose a tiny debug surface for automated verification
window.__LOST_SIGNAL__ = {
  get state() { return state },
  get player() { return player },
  get camera() { return camera },
  get world() { return world },
  get inventory() { return inventory },
  get extraction() { return extraction },
  get robots() { return robots },
  start: () => startGame(),
  teleport: (x, z) => player.teleport(x, z),
  collectResearch: () => {
    for (const item of loot.items.values()) {
      if (item.meta.research && item.available && inventory.length < 6) {
        tryPickup(item.uid)
      }
    }
  },
  unlock: () => { hasKeycard = true; world.unlockResearchDoor() },
  readyExtraction: () => { state = 'playing'; startExtraction() },
  completeNow: () => { if (state === 'playing') completeMission() },
}
