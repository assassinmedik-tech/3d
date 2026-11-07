/* ========================================================================== */
/* Tiny procedural audio engine — 100% synthesized, optional, fails silent.    */
/* ========================================================================== */
export class AudioEngine {
  constructor() {
    this.ctx = null
    this.master = null
    this.enabled = true
    try {
      const saved = localStorage.getItem('ls09_audio')
      if (saved === 'off') this.enabled = false
    } catch { /* ignore */ }
    this.ambientGain = null
    this.humGain = null
    this.ready = false
    this.beepTimer = 0
    this.ambientStarted = false
    this.noiseBuffer = null
    this.failed = false
  }

  ensure() {
    if (this.ctx || this.failed) return this.ctx
    try {
      const AC = window.AudioContext || window.webkitAudioContext
      if (!AC) { this.failed = true; return null }
      const ctx = new AC()
      this.ctx = ctx
      this.master = ctx.createGain()
      this.master.gain.value = this.enabled ? 0.5 : 0
      this.master.connect(ctx.destination)

      // shared noise buffer
      const len = ctx.sampleRate * 2
      const buf = ctx.createBuffer(1, len, ctx.sampleRate)
      const data = buf.getChannelData(0)
      for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
      this.noiseBuffer = buf

      this.startAmbient()
      this.ready = true
    } catch {
      this.failed = true
      this.ctx = null
    }
    return this.ctx
  }

  resume() {
    if (!this.ctx) this.ensure()
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => {})
  }

  setEnabled(on) {
    this.enabled = on
    try { localStorage.setItem('ls09_audio', on ? 'on' : 'off') } catch { /* ignore */ }
    if (!this.ctx) {
      if (on) this.ensure()
      return
    }
    const t = this.ctx.currentTime
    this.master.gain.cancelScheduledValues(t)
    this.master.gain.setTargetAtTime(on ? 0.5 : 0, t, 0.08)
    if (on) this.resume()
  }

  toggle() {
    this.setEnabled(!this.enabled)
    return this.enabled
  }

  startAmbient() {
    const ctx = this.ctx
    if (!ctx || this.ambientStarted) return
    this.ambientStarted = true
    const t = ctx.currentTime
    this.ambientGain = ctx.createGain()
    this.ambientGain.gain.value = 0
    this.ambientGain.connect(this.master)
    this.ambientGain.gain.setTargetAtTime(0.16, t, 1.5)

    // Low station drone
    const drone = ctx.createOscillator()
    drone.type = 'sine'
    drone.frequency.value = 54
    const drone2 = ctx.createOscillator()
    drone2.type = 'triangle'
    drone2.frequency.value = 81.5
    const droneGain = ctx.createGain()
    droneGain.gain.value = 0.22
    const droneFilter = ctx.createBiquadFilter()
    droneFilter.type = 'lowpass'
    droneFilter.frequency.value = 160
    drone.connect(droneFilter)
    drone2.connect(droneFilter)
    droneFilter.connect(droneGain)
    droneGain.connect(this.ambientGain)
    drone.start(); drone2.start()

    // Air handling / filtered noise
    const noise = ctx.createBufferSource()
    noise.buffer = this.noiseBuffer
    noise.loop = true
    const nf = ctx.createBiquadFilter()
    nf.type = 'bandpass'
    nf.frequency.value = 320
    nf.Q.value = 0.6
    const ng = ctx.createGain()
    ng.gain.value = 0.07
    noise.connect(nf); nf.connect(ng); ng.connect(this.ambientGain)
    noise.start()

    // Slow electrical pulse
    const pulse = ctx.createOscillator()
    pulse.type = 'sine'
    pulse.frequency.value = 0.14
    const pulseGain = ctx.createGain()
    pulseGain.gain.value = 0.035
    pulse.connect(pulseGain)
    pulseGain.connect(this.ambientGain)
    pulse.start()

    // Robot proximity hum bus (silent until close)
    this.humGain = ctx.createGain()
    this.humGain.gain.value = 0
    this.humGain.connect(this.master)
    const hum = ctx.createOscillator()
    hum.type = 'sawtooth'
    hum.frequency.value = 92
    const hf = ctx.createBiquadFilter()
    hf.type = 'lowpass'
    hf.frequency.value = 240
    const hg = ctx.createGain()
    hg.gain.value = 0.11
    hum.connect(hf); hf.connect(hg); hg.connect(this.humGain)
    hum.start()
    const whir = ctx.createOscillator()
    whir.type = 'triangle'
    whir.frequency.value = 176
    const wg = ctx.createGain()
    wg.gain.value = 0.05
    whir.connect(wg); wg.connect(this.humGain)
    whir.start()
  }

  setPaused(paused) {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    if (this.ambientGain) this.ambientGain.gain.setTargetAtTime(paused ? 0.035 : 0.16, t, 0.2)
  }

  update(dt, nearestDist, threatLevel, extractionActive) {
    if (!this.ctx || !this.ready || !this.enabled) return
    const ctx = this.ctx
    const t = ctx.currentTime
    if (this.humGain) {
      const prox = Math.max(0, 1 - nearestDist / 16)
      const target = prox * 0.14 + (threatLevel > 0.2 ? 0.05 : 0)
      this.humGain.gain.setTargetAtTime(target, t, 0.25)
    }
    this.beepTimer -= dt
    if (threatLevel > 0.3 && this.beepTimer <= 0) {
      this.beepTimer = threatLevel > 0.9 ? 0.62 : 1.4
      this.robotBeep(threatLevel > 0.9 ? 1 : 0.5, nearestDist)
    }
    if (extractionActive && this.beepTimer <= 0) {
      this.beepTimer = 0.9
      this.robotBeep(0.4, 10)
    }
  }

  tone(freq, duration, type = 'sine', volume = 0.12, slideTo = null, delay = 0) {
    if (!this.ctx || !this.enabled) return
    try {
      const ctx = this.ctx
      const t = ctx.currentTime + delay
      const o = ctx.createOscillator()
      o.type = type
      o.frequency.setValueAtTime(freq, t)
      if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + duration)
      const g = ctx.createGain()
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(volume, t + 0.012)
      g.gain.exponentialRampToValueAtTime(0.0001, t + duration)
      o.connect(g); g.connect(this.master)
      o.start(t); o.stop(t + duration + 0.02)
    } catch { /* silent */ }
  }

  noise(duration, volume = 0.1, freq = 800, q = 1, delay = 0) {
    if (!this.ctx || !this.enabled) return
    try {
      const ctx = this.ctx
      const t = ctx.currentTime + delay
      const src = ctx.createBufferSource()
      src.buffer = this.noiseBuffer
      src.playbackRate.value = 0.8 + Math.random() * 0.4
      const f = ctx.createBiquadFilter()
      f.type = 'bandpass'
      f.frequency.value = freq
      f.Q.value = q
      const g = ctx.createGain()
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(volume, t + 0.008)
      g.gain.exponentialRampToValueAtTime(0.0001, t + duration)
      src.connect(f); f.connect(g); g.connect(this.master)
      src.start(t); src.stop(t + duration + 0.03)
    } catch { /* silent */ }
  }

  ui(up = true) {
    this.tone(up ? 660 : 440, 0.045, 'square', 0.025)
    this.tone(up ? 990 : 660, 0.03, 'sine', 0.02, null, 0.03)
  }

  footstep(sprint = false) {
    this.noise(sprint ? 0.1 : 0.13, sprint ? 0.06 : 0.04, sprint ? 260 : 180, 0.8)
    this.tone(sprint ? 72 : 60, 0.07, 'sine', 0.025)
  }

  pickup(rarity = 'common') {
    const base = rarity === 'legendary' ? 523.25 : rarity === 'rare' ? 440 : 392
    this.tone(base, 0.12, 'sine', 0.06)
    this.tone(base * 1.5, 0.16, 'sine', 0.045, null, 0.07)
    this.tone(base * 2, 0.22, 'triangle', 0.03, null, 0.14)
    if (rarity === 'legendary') this.tone(base * 2.5, 0.4, 'sine', 0.03, null, 0.2)
  }

  container() {
    this.noise(0.18, 0.09, 420, 0.7)
    this.tone(180, 0.12, 'sawtooth', 0.03, 120)
  }

  terminal() {
    this.tone(520, 0.06, 'square', 0.025)
    this.tone(880, 0.08, 'sine', 0.03, null, 0.06)
  }

  unlock() {
    this.tone(392, 0.1, 'sine', 0.05)
    this.tone(587, 0.14, 'sine', 0.05, null, 0.09)
    this.tone(784, 0.28, 'triangle', 0.04, null, 0.18)
    this.noise(0.3, 0.06, 300, 0.5, 0.1)
  }

  hide() {
    this.noise(0.2, 0.06, 220, 0.6)
    this.tone(140, 0.15, 'sine', 0.03, 100)
  }

  damage() {
    this.noise(0.22, 0.15, 120, 0.8)
    this.tone(85, 0.3, 'sawtooth', 0.08, 42)
  }

  robotBeep(intensity = 0.5, dist = 10) {
    const vol = Math.max(0.005, 0.045 * (1 - Math.min(1, dist / 16)))
    this.tone(520 + intensity * 220, 0.08, 'square', vol * intensity)
    if (intensity > 0.8) this.tone(760, 0.12, 'sawtooth', vol, 400, 0.07)
  }

  alert() {
    this.tone(880, 0.1, 'square', 0.06)
    this.tone(660, 0.1, 'square', 0.06, null, 0.12)
    this.tone(988, 0.3, 'sawtooth', 0.04, 440, 0.24)
  }

  extractionStart() {
    this.tone(220, 0.4, 'sine', 0.06, 330)
    this.tone(330, 0.6, 'triangle', 0.04, 440, 0.3)
    this.tone(660, 0.5, 'sine', 0.03, null, 0.6)
  }

  tick(urgent = false) {
    this.tone(urgent ? 880 : 520, 0.06, 'square', urgent ? 0.04 : 0.025)
  }

  complete() {
    const notes = [523.25, 659.25, 783.99, 1046.5]
    notes.forEach((n, i) => this.tone(n, 0.5, 'sine', 0.06, null, i * 0.14))
    notes.forEach((n, i) => this.tone(n / 2, 0.7, 'triangle', 0.04, null, i * 0.14))
  }

  death() {
    this.tone(220, 0.9, 'sawtooth', 0.08, 55)
    this.noise(1.2, 0.12, 100, 0.5)
  }

  footstepSilent() { /* noop */ }
}
