// Bridge between the Svelte UI and the host XR Animator runtime.
// The UI reads/writes `config`; writes are mirrored into window.XRA.config,
// persisted via XRA.profileService, and applied via host hooks.

export const app = $state({
  ready: false,
  cleanScreen: false,
  panelOpen: true,
  settingsOpen: false,
  startupOpen: true, // Svelte-owned boot overlay (replaces legacy 60_startup)
  focusSection: null, // section id the left dock asked to reveal
  focusNonce: 0,      // bumped to re-trigger focus even for the same section
  popupSection: null, // section id shown as a floating popup next to the dock
  status: {},      // live status pushed from the host
})

// Open the settings panel and reveal a section.
export function openPanelSection(id) {
  app.panelOpen = true
  app.focusSection = id
  app.focusNonce++
}

// Toggle the floating per-category popup next to the dock (does not touch the
// right panel).
export function toggleSectionPopup(id) {
  app.popupSection = app.popupSection === id ? null : id
}

export const config = $state({})

function deepCopy(v) {
  try { return structuredClone(v) } catch (e) { return JSON.parse(JSON.stringify(v)) }
}

export function t(s) {
  if (s == null) return s
  try { return window.XRA?.i18n?.t?.(s) ?? s } catch (e) { return s }
}

export function get(path, fallback) {
  const keys = path.split('.')
  let n = config
  for (const k of keys) { if (n == null) return fallback; n = n[k] }
  return n === undefined ? fallback : n
}

// Per-section apply hooks (kept in sync with what the legacy UI did).
function applyHook(path) {
  const X = window.XRA
  if (!X) return
  if (path.startsWith('background.')) { X.background?.apply?.(); return }
  if (path === 'ui.language') { X.i18n?.setLanguage?.(config.ui.language); return }
  if (path === 'ui.preview_wireframe') {
    // Follows tracking: shown only while the camera runs. 'Off' (false) hides it.
    if (typeof X.applyMocapWireframeVisibility === 'function') X.applyMocapWireframeVisibility()
    return
  }
  if (path === 'ui.mocap_view') {
    // The window takes over the mocap view (or hands it back to the stage).
    if (typeof X.applyMocapWireframeVisibility === 'function') X.applyMocapWireframeVisibility()
    return
  }
  if (path.startsWith('performance.')) {
    window.XRA_render_fps_limit = Number(config.performance.render_fps ?? 60)
    window.XRA_gpu_preference = String(config.performance.gpu_preference || 'default')
    window.XRA_preserve_drawing_buffer = config.performance.preserve_drawing_buffer !== false
    window.XRA_antialias = config.performance.antialias !== 'off'
    X.events?.emit?.('performance', config.performance)
    return
  }
  X.events?.emit?.('config-change', { path, value: get(path) })
}

export function set(path, value) {
  const X = window.XRA
  const keys = path.split('.')
  // mirror
  let n = config
  for (let i = 0; i < keys.length - 1; i++) { if (n[keys[i]] == null) n[keys[i]] = {}; n = n[keys[i]] }
  n[keys[keys.length - 1]] = value
  // host
  if (X?.config) {
    let h = X.config
    for (let i = 0; i < keys.length - 1; i++) { if (h[keys[i]] == null) h[keys[i]] = {}; h = h[keys[i]] }
    h[keys[keys.length - 1]] = value
  }
  applyHook(path)
  try { X?.profileService?.save?.() } catch (e) {}
}

function withTimeout(promise, ms, label) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`${label} timed out after ${ms} ms`)), ms)
    Promise.resolve(promise).then(
      (v) => { clearTimeout(t); resolve(v) },
      (e) => { clearTimeout(t); reject(e) },
    )
  })
}

// Hardened camera start: start, then wait for the first pose frame before
// returning. On timeout/error the host kills the streamer and its capture
// child. Callers keep the button disabled across this whole sequence.
export async function startTracking({ timeout = 12000, dataTimeout = 8000 } = {}) {
  const nb = window.XRA?.nativeBridge
  if (!nb?.startNativeStreamer) throw new Error('native bridge unavailable')
  try {
    await withTimeout(nb.startNativeStreamer(), timeout, 'Camera start')
    const deadline = performance.now() + dataTimeout
    while (performance.now() < deadline) {
      if (nb.cameraDataReady?.()) return true
      await new Promise((r) => setTimeout(r, 120))
    }
    return true
  } catch (e) {
    try { await nb.forceStopCamera?.() } catch (_) {}
    throw e
  }
}

// Hardened stop: stop, and if it does not settle in time, force-kill.
export async function stopTracking({ timeout = 8000 } = {}) {
  const nb = window.XRA?.nativeBridge
  if (!nb?.stopNativeStreamer) return
  try {
    await withTimeout(nb.stopNativeStreamer(), timeout, 'Camera stop')
  } catch (e) {
    try { await nb.forceStopCamera?.() } catch (_) {}
    throw e
  }
}

// Hardened recorder start: start, then wait until it reports active. On
// timeout/error, force-stop so no half-started recorder lingers.
export async function startRecording({ timeout = 12000, readyTimeout = 6000 } = {}) {
  const r = window.XRA?.recorder
  if (!r?.start) throw new Error('recorder unavailable')
  try {
    await withTimeout(r.start(), timeout, 'Recording start')
    const deadline = performance.now() + readyTimeout
    while (performance.now() < deadline) {
      if (r.status?.()?.active) return true
      await new Promise((res) => setTimeout(res, 120))
    }
    return true
  } catch (e) {
    try { await r.stop?.() } catch (_) {}
    throw e
  }
}

// Hardened recorder stop: stop, force-stopping if it does not settle in time.
export async function stopRecording({ timeout = 8000 } = {}) {
  const r = window.XRA?.recorder
  if (!r?.stop) return
  try {
    await withTimeout(r.stop(), timeout, 'Recording stop')
  } catch (e) {
    try { await r.stop?.() } catch (_) {}
    throw e
  }
}

export function toggleClean() {
  app.cleanScreen = !app.cleanScreen
  document.body.classList.toggle('xra-total-clean-screen', app.cleanScreen)
  try { window.XRA?.ui?.setHidden?.(app.cleanScreen) } catch (e) {}
}

// Re-copy host config after code paths that mutate window.XRA.config directly
// (e.g. the startup preset benchmark) so the Svelte tree stays in sync.
export function resync() {
  try { Object.assign(config, deepCopy(window.XRA?.config || {})) } catch (e) {}
}

export function refreshStatus() {
  try {
    const b = window.SA_bridge?.backend
    if (b && typeof b.status === 'function') app.status = b.status() || {}
  } catch (e) {}
}

export function boot() {
  const start = () => {
    if (!(window.XRA && window.XRA.config)) return false
    Object.assign(config, deepCopy(window.XRA.config))
    app.ready = true
    refreshStatus()
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && app.cleanScreen) { e.preventDefault(); toggleClean() }
    }, true)
    return true
  }
  if (!start()) {
    const id = setInterval(() => { if (start()) clearInterval(id) }, 200)
  }
}
