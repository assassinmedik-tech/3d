/* ========================================================================== */
/* HUD + screens controller                                                   */
/* ========================================================================== */
import { RARITY_CLASS } from './loot.js'

const ICONS = {
  document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 2.5h9l5 5v14H5z"/><path d="M14 2.5v5h5M8 12h8M8 15.5h8M8 8.5h3"/><circle cx="16.5" cy="18" r="2.2"/></svg>',
  component: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',
  cell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="7" y="4" width="10" height="17" rx="2"/><path d="M10 2h4M9.5 8h5M9.5 17h5"/><path d="M12 10l-1.5 3h3L12 16" stroke-width="1.2"/></svg>',
  module: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 2l7 5v10l-7 5-7-5V7z"/><path d="M12 7l3.5 2.5v5L12 17l-3.5-2.5v-5z"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
}

function icon(shape, color) {
  const c = '#' + color.toString(16).padStart(6, '0')
  return `<span style="color:${c};display:block;width:100%;height:100%">${ICONS[shape] || ICONS.component}</span>`
}

function fmtTime(seconds) {
  const s = Math.max(0, Math.floor(seconds))
  const m = Math.floor(s / 60)
  return `${String(m).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

function fmtClock(seconds) {
  const s = Math.max(0, Math.floor(seconds))
  const h = Math.floor(s / 3600)
  return `${String(h).padStart(2, '0')}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

export class UI {
  constructor() {
    this.callbacks = {}
    this.mobile = false
    this.toastCount = 0
    this.lastInventorySig = ''
    this.lastBattery = -1
    this.screens = ['title', 'pause', 'inventory', 'log', 'dead', 'complete']
    this.el = {}
    const ids = [
      'hud', 'objective-text', 'objective-sub', 'objective-dist', 'objective-fill',
      'health-num', 'health-bar', 'energy-num', 'energy-bar', 'battery-num', 'battery-bar',
      'threat-dot', 'threat-text', 'signal-state', 'quick-slots', 'inv-count',
      'prompt-key', 'prompt-text', 'interact-prompt', 'extract-panel', 'extract-fill', 'extract-time',
      'hidden-indicator', 'toast-stack', 'damage-vignette', 'objective-marker', 'marker-label', 'marker-dist',
      'screen-title', 'screen-pause', 'screen-inventory', 'screen-log', 'screen-dead', 'screen-complete',
      'inventory-grid', 'inv-research', 'inv-credits', 'inv-slots', 'clearance-line',
      'log-source', 'log-title', 'log-body', 'complete-time', 'complete-research', 'complete-credits', 'complete-list',
      'loading', 'load-fill', 'load-status', 'btn-start', 'btn-title-audio', 'btn-title-quality',
      'btn-resume', 'btn-pause-audio', 'btn-restart', 'btn-close-inventory', 'btn-close-log', 'btn-retry', 'btn-replay',
      'btn-flashlight', 'btn-inventory', 'btn-pause', 'joystick', 'joystick-stick', 'look-hint',
      'btn-touch-sprint', 'btn-touch-interact', 'btn-touch-flashlight', 'btn-touch-inventory',
      'title-clock', 'error-panel', 'error-text',
    ]
    for (const id of ids) this.el[id] = document.getElementById(id)
    this.qualityButtons = [...document.querySelectorAll('[data-quality]')]
    this.mobile = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0
    if (this.mobile) document.body.classList.add('is-mobile')
    this.el.hud.classList.add('hud-off')
    this.buildQuickSlots()
    this.bind()
  }

  on(name, fn) { this.callbacks[name] = fn }

  emit(name, ...args) {
    const fn = this.callbacks[name]
    if (fn) fn(...args)
  }

  bind() {
    const click = (el, name) => {
      if (!el) return
      el.addEventListener('click', (e) => {
        e.preventDefault()
        this.emit('uiSound')
        this.emit(name)
      })
    }
    click(this.el['btn-start'], 'start')
    click(this.el['btn-title-audio'], 'audio')
    click(this.el['btn-title-quality'], 'qualityCycle')
    click(this.el['btn-resume'], 'resume')
    click(this.el['btn-pause-audio'], 'audio')
    click(this.el['btn-restart'], 'restart')
    click(this.el['btn-close-inventory'], 'closeInventory')
    click(this.el['btn-close-log'], 'closeLog')
    click(this.el['btn-retry'], 'restart')
    click(this.el['btn-replay'], 'restart')
    click(this.el['btn-flashlight'], 'flashlight')
    click(this.el['btn-inventory'], 'inventory')
    click(this.el['btn-pause'], 'pause')
    click(this.el['btn-touch-inventory'], 'inventory')
    click(this.el['btn-touch-flashlight'], 'flashlight')
    click(this.el['btn-touch-interact'], 'interact')
    click(this.el['btn-touch-interact'], 'uiSound')

    for (const b of this.qualityButtons) {
      b.addEventListener('click', (e) => {
        e.preventDefault()
        this.emit('quality', b.dataset.quality)
      })
    }

    // hold-sprint on mobile
    const sprint = this.el['btn-touch-sprint']
    const setSprint = (on) => {
      sprint.classList.toggle('active', on)
      this.emit('sprintHold', on)
    }
    sprint.addEventListener('pointerdown', (e) => { e.preventDefault(); sprint.setPointerCapture(e.pointerId); setSprint(true) })
    sprint.addEventListener('pointerup', (e) => { e.preventDefault(); setSprint(false) })
    sprint.addEventListener('pointercancel', () => setSprint(false))
    sprint.addEventListener('pointerleave', () => setSprint(false))

    // inventory drop delegation
    this.el['inventory-grid'].addEventListener('click', (e) => {
      const btn = e.target.closest('[data-drop]')
      if (!btn) return
      e.preventDefault()
      this.emit('uiSound')
      this.emit('drop', btn.dataset.drop)
    })

    // quick slot click opens pack
    this.el['quick-slots'].addEventListener('click', () => this.emit('inventory'))
  }

  buildQuickSlots() {
    const wrap = this.el['quick-slots']
    wrap.innerHTML = ''
    for (let i = 0; i < 6; i++) {
      const slot = document.createElement('div')
      slot.className = 'quick-slot empty'
      slot.dataset.slot = String(i)
      wrap.appendChild(slot)
    }
  }

  setMobileButtonsVisible(visible) {
    if (visible) document.body.classList.add('is-mobile')
    else document.body.classList.remove('is-mobile')
  }

  showScreen(name) {
    for (const s of this.screens) {
      const el = this.el[`screen-${s}`]
      if (!el) continue
      el.classList.toggle('hidden', s !== name)
    }
    if (name) this.el.hud.classList.add('hud-off')
  }

  hideScreens() {
    for (const s of this.screens) this.el[`screen-${s}`].classList.add('hidden')
    this.el.hud.classList.remove('hud-off')
  }

  showTitle() {
    this.showScreen('title')
    this.el['screen-title'].classList.remove('hidden')
  }

  showPause() { this.showScreen('pause') }
  showInventory() { this.showScreen('inventory') }
  showLog() { this.showScreen('log') }
  showDead() { this.showScreen('dead') }
  showComplete() { this.showScreen('complete') }

  setLoading(progress, status) {
    this.el['load-fill'].style.width = `${Math.round(progress * 100)}%`
    if (status) this.el['load-status'].textContent = status
  }

  hideLoading() {
    this.el.loading.classList.add('done')
    setTimeout(() => this.el.loading.classList.add('hidden'), 550)
  }

  setError(text) {
    this.el.loading.classList.add('hidden')
    this.el['error-panel'].classList.remove('hidden')
    this.el['error-text'].textContent = text
  }

  setTitleClock(seconds) {
    this.el['title-clock'].textContent = `T+ ${fmtClock(seconds)}`
  }

  /* ------------------------------ HUD ----------------------------------- */
  setVitals(health, energy, battery) {
    const h = Math.max(0, Math.min(100, health))
    const e = Math.max(0, Math.min(100, energy))
    const b = Math.max(0, Math.min(100, battery))
    this.el['health-num'].textContent = Math.round(h)
    this.el['energy-num'].textContent = Math.round(e)
    this.el['battery-num'].textContent = Math.round(b)
    this.el['health-bar'].style.transform = `scaleX(${h / 100})`
    this.el['energy-bar'].style.transform = `scaleX(${e / 100})`
    this.el['battery-bar'].style.transform = `scaleX(${b / 100})`
    this.el['btn-flashlight'].classList.toggle('active', this.flashlightOn)
    if (this.lastBattery >= 0 && b < this.lastBattery - 0.2) {
      this.el['battery-num'].style.color = '#ffa14d'
    } else if (b > 99) {
      this.el['battery-num'].style.color = ''
    }
    this.lastBattery = b
  }

  setFlashlight(on) {
    this.flashlightOn = on
    this.el['btn-flashlight'].classList.toggle('active', on)
  }

  setObjective(text, sub, dist, progress) {
    this.el['objective-text'].textContent = text
    this.el['objective-sub'].textContent = sub
    this.el['objective-dist'].textContent = dist === null ? '-- M' : `${Math.round(dist)} M`
    if (progress !== null) this.el['objective-fill'].style.width = `${Math.max(0, Math.min(1, progress)) * 100}%`
  }

  setThreat(level, text) {
    const dot = this.el['threat-dot']
    dot.className = 'threat-dot' + (level >= 2 ? ' alert' : level >= 1 ? ' warn' : '')
    this.el['threat-text'].textContent = text
    const sig = this.el['signal-state']
    sig.textContent = level >= 2 ? 'HOSTILE' : level >= 1 ? 'CONTACT' : 'LINK OK'
    sig.className = level >= 2 ? 'signal-bad' : level >= 1 ? 'signal-warn' : 'signal-ok'
  }

  setPrompt(text, key = 'E', show = true) {
    if (show && text) {
      this.el['prompt-text'].textContent = text
      this.el['prompt-key'].textContent = key
      this.el['interact-prompt'].classList.add('show')
      this.el['btn-touch-interact'].classList.add('hot')
    } else {
      this.el['interact-prompt'].classList.remove('show')
      this.el['btn-touch-interact'].classList.remove('hot')
    }
  }

  setHidden(hidden) {
    this.el['hidden-indicator'].classList.toggle('show', hidden)
  }

  setMarker(show, x, y, dist, label = 'OBJECTIVE') {
    const m = this.el['objective-marker']
    m.classList.toggle('show', show)
    if (!show) return
    m.style.left = `${x}px`
    m.style.top = `${y}px`
    this.el['marker-dist'].textContent = dist === null ? '' : `${Math.round(dist)}M`
    this.el['marker-label'].textContent = label
  }

  setExtraction(active, progress = 0, seconds = 0) {
    this.el['extract-panel'].classList.toggle('active', active)
    if (!active) return
    this.el['extract-fill'].style.width = `${Math.max(0, Math.min(1, progress)) * 100}%`
    this.el['extract-time'].textContent = fmtTime(Math.ceil(seconds))
  }

  flashDamage() {
    const v = this.el['damage-vignette']
    v.classList.add('hit')
    clearTimeout(this.damageTimer)
    this.damageTimer = setTimeout(() => v.classList.remove('hit'), 140)
  }

  toast(title, sub = '', rarity = '', duration = 3000) {
    const stack = this.el['toast-stack']
    while (stack.children.length >= 4) stack.removeChild(stack.firstChild)
    const t = document.createElement('div')
    t.className = `toast ${rarity ? RARITY_CLASS[rarity] || `r-${rarity}` : ''}`
    t.innerHTML = `<b>${title}</b>${sub ? `<span class="t-sub">${sub}</span>` : ''}`
    stack.appendChild(t)
    setTimeout(() => {
      t.classList.add('out')
      setTimeout(() => t.remove(), 340)
    }, duration)
  }

  /* --------------------------- Inventory -------------------------------- */
  renderInventory(items, researchCount, credits, hasKeycard, open = false) {
    const sig = items.map((i) => i.uid).join(',') + `|${researchCount}|${credits}|${hasKeycard}|${open}`
    if (sig === this.lastInventorySig) return
    this.lastInventorySig = sig

    this.el['inv-count'].textContent = `${items.length}/6`
    this.el['inv-research'].textContent = String(researchCount)
    this.el['inv-credits'].textContent = String(credits)
    this.el['inv-slots'].textContent = `${items.length}/6`
    this.el['clearance-line'].innerHTML = `SECURITY CLEARANCE: <b>${hasKeycard ? 'LEVEL 4 — RESEARCH' : 'NONE'}</b>`

    // quick slots
    const slots = this.el['quick-slots'].children
    for (let i = 0; i < 6; i++) {
      const slot = slots[i]
      const item = items[i]
      slot.className = 'quick-slot'
      if (item) {
        const meta = item.meta
        slot.classList.add('filled', RARITY_CLASS[meta.rarity] || 'r-common')
        if (meta.research) slot.classList.add('research')
        slot.title = `${meta.name} — ${meta.rarityLabel}`
        slot.innerHTML = `<span class="slot-glyph">${icon(meta.shape, meta.color)}</span><i class="slot-rarity"></i>`
      } else {
        slot.classList.add('empty')
        slot.title = 'Empty slot'
        slot.innerHTML = ''
      }
    }

    // full inventory overlay
    const grid = this.el['inventory-grid']
    grid.innerHTML = ''
    for (let i = 0; i < 6; i++) {
      const item = items[i]
      if (!item) {
        const card = document.createElement('div')
        card.className = 'inv-card empty'
        card.innerHTML = `SLOT ${String(i + 1).padStart(2, '0')}<br />EMPTY`
        grid.appendChild(card)
        continue
      }
      const meta = item.meta
      const card = document.createElement('div')
      card.className = `inv-card ${RARITY_CLASS[meta.rarity] || 'r-common'}`
      card.innerHTML = `
        <div class="inv-top">
          <span class="inv-icon">${icon(meta.shape, meta.color)}</span>
          <span class="inv-rarity" style="color:#${meta.color.toString(16).padStart(6, '0')}">${meta.rarityLabel}</span>
        </div>
        <div class="inv-name">${meta.name}</div>
        <div class="inv-desc">${meta.desc}</div>
        <div class="inv-bottom">
          <span class="inv-credits">${meta.credits} CR</span>
          <span class="inv-tag">${meta.research ? 'RESEARCH' : meta.type}</span>
          <button class="inv-drop" data-drop="${item.uid}">DROP</button>
        </div>`
      grid.appendChild(card)
    }
  }

  showLog(source, title, body) {
    this.el['log-source'].textContent = source || 'TERMINAL // UNKNOWN'
    this.el['log-title'].innerHTML = title || 'ARCHIVE <b>ENTRY</b>'
    this.el['log-body'].innerHTML = (body || '').replace(/<warn>/g, '<span class="warn">').replace(/<\/warn>/g, '</span>')
    this.showScreen('log')
  }

  setQualityLabel(quality) {
    this.el['btn-title-quality'].textContent = `GRAPHICS: ${quality.toUpperCase()}`
    for (const b of this.qualityButtons) b.classList.toggle('active', b.dataset.quality === quality)
  }

  setAudioLabel(enabled) {
    this.el['btn-title-audio'].textContent = `AUDIO: ${enabled ? 'ON' : 'OFF'}`
    const pauseBtn = this.el['btn-pause-audio']
    pauseBtn.innerHTML = `AUDIO <b>${enabled ? 'ON' : 'OFF'}</b>`
  }

  showComplete({ time, research, credits, items }) {
    this.el['complete-time'].textContent = fmtTime(time)
    this.el['complete-research'].textContent = `${research} / 3`
    this.el['complete-credits'].textContent = String(credits)
    const list = this.el['complete-list']
    list.innerHTML = ''
    for (const item of items) {
      const row = document.createElement('div')
      row.className = 'complete-row'
      row.innerHTML = `<span>${item.meta.name}${item.meta.research ? ' [RESEARCH]' : ''}</span><span>+${item.meta.credits} CR</span>`
      list.appendChild(row)
    }
    this.showScreen('complete')
  }

  setMobileLookHintHidden(hidden) {
    if (hidden) document.body.classList.add('has-looked')
  }

  setPromptKeyForMobile() {
    this.el['prompt-key'].textContent = this.mobile ? 'USE' : 'E'
  }
}
