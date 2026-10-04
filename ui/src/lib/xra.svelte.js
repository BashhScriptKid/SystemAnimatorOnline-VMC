// Bridge between the Svelte UI and the host XR Animator runtime.
// The UI reads/writes `config`; writes are mirrored into window.XRA.config,
// persisted via XRA.profileService, and applied via host hooks.

export const app = $state({
  ready: false,
  cleanScreen: false,
  panelOpen: true,
  settingsOpen: false,
  status: {},      // live status pushed from the host
})

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

export function toggleClean() {
  app.cleanScreen = !app.cleanScreen
  document.body.classList.toggle('xra-total-clean-screen', app.cleanScreen)
  try { window.XRA?.ui?.setHidden?.(app.cleanScreen) } catch (e) {}
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
