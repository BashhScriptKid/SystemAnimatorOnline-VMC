<script>
  import { onMount } from 'svelte'
  import Icon from './Icon.svelte'
  import { app, config, resync, startTracking, t } from './xra.svelte.js'

  const X = () => window.XRA
  const tr = (s) => t(s)
  const PRESETS = ['AUTO', 'ECO', 'LOW', 'BALANCED', 'QUALITY', 'HIGH', 'MAX', 'CUSTOM']
  const IDLE_DISMISS_MS = 4000

  function persist() {
    try { X()?.profileService?.save?.(0) } catch (e) {}
  }

  const languageOptions = (() => {
    const L = X()?.i18n?.LANGUAGES
    return Array.isArray(L) && L.length ? L : [['auto', 'Auto / System'], ['en', 'English'], ['it', 'Italiano']]
  })()

  let language = $state('auto')
  let preset = $state('CUSTOM')
  let bgText = $state('default')
  let cameras = $state([])
  let camerasReady = $state(false)
  let cameraValue = $state('')
  let cameraRunning = $state(false)
  let cameraStateText = $state('')
  let warning = $state('')
  let busy = $state(false)
  let presetBusy = $state(false)
  let camBusy = $state(false)

  let log = $state([])
  let closing = false
  let hovered = false
  let lastHover = 0
  let timer = 0
  let offs = []

  function pushLog(msg) {
    const last = log.length ? log[log.length - 1] : ''
    if (last === msg) return
    log = [...log, msg].slice(-40)
  }

  function dismiss() {
    if (closing) return
    closing = true
    if (timer) { clearInterval(timer); timer = 0 }
    persist()
    app.startupOpen = false
    X()?.ui?.refresh?.()
  }

  async function startAndClose() {
    busy = true
    pushLog('Starting tracking…')
    try { await startTracking() }
    catch (e) { X().toast?.('Tracking: ' + e.message, 'warn', 4500) }
    finally { busy = false; dismiss() }
  }

  async function startWithPreset(name) {
    const XRA = X()
    name = String(name || 'CUSTOM').toUpperCase()
    if (name === 'CUSTOM') {
      XRA.config.performance.master_preset = 'CUSTOM'
      persist(); pushLog('Preset: CUSTOM'); return
    }
    if (name === 'AUTO') {
      pushLog('Benchmarking hardware…')
      const result = await XRA.performance.benchmarkHardwareOnly()
      pushLog(`AUTO → ${result.preset} (${result.fps.toFixed(1)} fps)`)
      await XRA.performance.applyPresetSafe(result.preset)
      XRA.config.performance.master_preset = 'AUTO'
      XRA.config.performance.auto_last_result = result
      persist(); return
    }
    pushLog(`Applying preset: ${name}…`)
    await XRA.performance.applyPresetSafe(name)
    pushLog(`Preset ${name} applied`)
  }

  function renderCameraState(message = '') {
    const nb = X()?.nativeBridge
    const active = nb?.activeCamera?.() || {}
    const running = !!nb?.cameraRunning?.()
    cameraRunning = running
    cameraStateText = message || (running
      ? `${tr('ON')} · ${active.label || tr('Default camera')}`
      : tr('OFF'))
  }

  async function refreshCameras(requestPermission = false) {
    const nb = X()?.nativeBridge
    if (!nb?.enumerateCameras) return
    camBusy = true
    try {
      const list = await nb.enumerateCameras({ requestPermission })
      const active = nb.activeCamera() || {}
      cameras = (list || []).map(d => ({ deviceId: d.deviceId, label: d.label }))
      const wanted = active.deviceId || config.devices?.camera_device_id || ''
      cameraValue = cameras.some(c => c.deviceId === wanted) ? wanted : (cameras[0]?.deviceId || '')
      camerasReady = true
      renderCameraState()
      pushLog(cameras.length ? `${cameras.length} camera${cameras.length > 1 ? 's' : ''} detected` : 'No cameras found')
    } catch (e) {
      camerasReady = true
      renderCameraState(tr('Camera unavailable'))
      pushLog('Camera enumeration failed')
    } finally {
      camBusy = false
    }
  }

  async function onCameraChange(event) {
    const nb = X()?.nativeBridge
    const deviceId = event?.currentTarget?.value ?? cameraValue
    const device = cameras.find(c => c.deviceId === deviceId)
    if (!device) return
    camBusy = true
    try {
      const preference = { deviceId: device.deviceId, label: device.label }
      if (nb.cameraRunning()) await nb.switchCamera(preference)
      else await nb.setCameraPreference(preference)
      renderCameraState()
      pushLog(`Webcam: ${device.label}`)
    } catch (e) {
      renderCameraState('Error · ' + e.message)
      pushLog('Webcam switch failed')
    } finally {
      camBusy = false
    }
  }

  function getCameraBusyInfo() {
    const snap = X()?.xraBackend?.snapshot?.()
    const cap = snap?.capture || window.SA_bridge?.backend?.status?.()?.backend?.capture
    if (cap?.camera_busy) {
      const rawProcs = (cap.busy_processes && cap.busy_processes.length)
        ? cap.busy_processes
        : (cap.busy_process ? [cap.busy_process] : [])
      const external = rawProcs.filter(p => !/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(p).trim()))
      if (external.length) return { busy: true, proc: external.join(', ') }
    }
    if (cap?.last_error && cap.last_error.includes('Webcam occupata')) {
      const m = cap.last_error.match(/Webcam occupata da:\s*([^.]+)/i)
      const name = m ? m[1].trim() : ''
      if (!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(name)) return { busy: true, proc: cap.last_error }
    }
    return { busy: false, proc: '' }
  }

  function isAvatarReady() {
    if (typeof X()?.nativeBridge?.isAvatarReady === 'function') return X().nativeBridge.isAvatarReady()
    if (window.MMD_SA?.MMD_started) {
      const facade = window.MMD_SA?.THREEX?.get_model?.(0)
      let model = facade
      if (facade?.type === 'MMD_dummy') {
        try { model = facade.model || null } catch (_) { model = null }
      }
      const scene = model?.model?.scene || model?.mesh || model?.scene || null
      if (model && !facade?.loading && !model.loading && !window.MMD_SA?.THREEX?._loading_model && scene) {
        if (scene.visible === false) return false
        return true
      }
    }
    return false
  }

  function isBackendReady() {
    const be = X()?.xraBackend
    if (!be || !be.active) return true
    return !!be.snapshot?.()?.ready
  }

  function updateReadiness() {
    if (closing) return
    const info = getCameraBusyInfo()
    if (info.busy) {
      warning = `Webcam in use by another application (${info.proc}). Close it to start tracking.`
      pushLog('Webcam is busy — close the other app')
    } else {
      warning = ''
    }
    if (isAvatarReady()) pushLog('Avatar ready')
    if (isBackendReady()) pushLog('Mocap backend ready')
  }

  function tick() {
    updateReadiness()
    // Blender-style idle dismiss: close if the cursor has not been over the
    // splash for IDLE_DISMISS_MS.
    if (!busy && !hovered && Date.now() - lastHover > IDLE_DISMISS_MS) dismiss()
  }

  async function onPresetChange(event) {
    const value = event?.currentTarget?.value ?? preset
    preset = value
    presetBusy = true
    try {
      await startWithPreset(value)
      X().events.emit('state', { path: 'performance.master_preset', value: X().config.performance.master_preset })
      resync()
    } catch (e) {
      console.error('[XRA START]', e)
      pushLog('Preset error: ' + e.message)
    } finally {
      presetBusy = false
      X().ui?.refresh?.()
    }
  }

  function onLanguageChange(event) {
    language = event?.currentTarget?.value ?? language
    X()?.i18n?.setLanguage?.(language)
  }

  async function loadVrm() {
    try { await X().nativeBridge?.openVrmPicker?.() }
    catch (e) { X().toast('VRM loader: ' + e.message, 'error', 4500) }
  }

  onMount(() => {
    const XRA = X()
    lastHover = Date.now()
    pushLog('Initializing XR Animator VMC…')
    language = XRA?.config?.ui?.language || 'auto'
    preset = (XRA?.config?.performance?.master_preset === 'MINIMAL'
      ? 'ECO'
      : (XRA?.config?.performance?.master_preset || 'CUSTOM'))
    bgText = XRA?.config?.background?.path || XRA?.config?.background?.color || 'default'

    renderCameraState()
    setTimeout(() => refreshCameras(false), 100)

    timer = setInterval(tick, 250)
    window.addEventListener('MMDStarted', updateReadiness)
    if (XRA.xraBackend?.onStatus) XRA.xraBackend.onStatus(updateReadiness)
    const onKey = (e) => { if (e.key === 'Escape') dismiss() }
    window.addEventListener('keydown', onKey, true)
    updateReadiness()

    XRA.whenNativeReady?.()?.then(() => { if (app.startupOpen) refreshCameras(false) })
    for (const name of ['camera-started', 'camera-stopped', 'camera-switched']) {
      offs.push(XRA.events.on(name, () => { if (app.startupOpen) refreshCameras(false) }))
    }
    for (const name of ['avatar-loading', 'avatar-changed', 'avatar-ready']) {
      offs.push(XRA.events.on(name, () => updateReadiness()))
    }

    return () => {
      if (timer) clearInterval(timer)
      window.removeEventListener('MMDStarted', updateReadiness)
      window.removeEventListener('keydown', onKey, true)
      for (const off of offs) { try { off() } catch (e) {} }
      offs = []
    }
  })
</script>

<!-- Blender-style splash with a Photoshop-style verbose log column. Dismisses
     on click-outside / Esc, or after the cursor has not hovered it for 4s. It
     never starts the camera. -->
<div class="xra-startup" onclick={dismiss}>
  <div
    class="card"
    role="dialog"
    aria-label="XR Animator VMC"
    onclick={(e) => e.stopPropagation()}
    onpointerenter={() => { hovered = true; lastHover = Date.now() }}
    onpointermove={() => { lastHover = Date.now() }}
    onpointerleave={() => { hovered = false; lastHover = Date.now() }}
  >
    <div class="col left">
      <div class="brand">
        <span class="logo">XR</span>
        <span class="name">Animator <b>VMC</b></span>
      </div>
      <div class="sub">{tr('Quick setup · changes apply immediately.')}</div>
      <pre class="log">{log.join('\n')}</pre>
      <div class="credits">
        Engine: XR Animator by Butz Yung (CC BY-NC-SA 4.0)<br />
        Backends: native MediaPipe · optional ONNX Runtime
      </div>
    </div>

    <div class="col right">
      <div class="group-title">{tr('Quick start')}</div>
      <button type="button" class="q primary" onclick={startAndClose} disabled={busy}>
        {busy ? tr('Starting…') : tr('Start tracking')}
      </button>
      <button type="button" class="q" onclick={loadVrm} disabled={busy}>{tr('Load / change VRM…')}</button>

      <div class="group-title">{tr('Webcam')} <span class="dot" class:on={cameraRunning}></span></div>
      <div class="row">
        <select value={cameraValue} onchange={onCameraChange} disabled={camBusy || busy}>
          {#if !camerasReady}
            <option value="">{tr('Loading cameras…')}</option>
          {:else if !cameras.length}
            <option value="">{tr('No cameras found')}</option>
          {:else}
            {#each cameras as c (c.deviceId)}<option value={c.deviceId}>{c.label}</option>{/each}
          {/if}
        </select>
        <button type="button" class="q icon" title={tr('Refresh cameras')} aria-label={tr('Refresh cameras')} onclick={() => refreshCameras(true)} disabled={camBusy || busy}><Icon name="RefreshCw" size={14} /></button>
      </div>
      {#if warning}<div class="warn">{warning}</div>{/if}

      <div class="group-title">{tr('Options')}</div>
      <label class="field">
        <span>{tr('Master preset')}</span>
        <select value={preset} onchange={onPresetChange} disabled={presetBusy || busy}>
          {#each PRESETS as name (name)}<option value={name}>{name}</option>{/each}
        </select>
      </label>
      <label class="field">
        <span>{tr('Language')}</span>
        <select value={language} onchange={onLanguageChange} disabled={busy}>
          {#each languageOptions as [code, label] (code)}<option value={code}>{label}</option>{/each}
        </select>
      </label>

      <button type="button" class="q ghost" onclick={dismiss} disabled={busy}>{tr('Continue')}</button>
    </div>
  </div>
</div>

<style>
  .xra-startup {
    position: fixed;
    inset: 0;
    z-index: 1000001;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .72);
    color: #fff;
    font: 12.5px/1.45 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  }
  .xra-startup * { box-sizing: border-box; }
  .card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 248px;
    width: min(640px, calc(100vw - 28px));
    max-height: calc(100vh - 40px);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .12);
    border-radius: 12px;
    background: rgba(20, 22, 24, .97);
    box-shadow: 0 14px 48px rgba(0, 0, 0, .65);
    backdrop-filter: blur(10px);
  }
  .col { padding: 18px; min-height: 0; }
  .left { display: flex; flex-direction: column; border-right: 1px solid rgba(255, 255, 255, .08); }
  .right { display: flex; flex-direction: column; gap: 7px; overflow: auto; }

  .brand { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
  .logo {
    display: grid; place-items: center; width: 34px; height: 34px;
    border: 2px solid #2f9e7a; border-radius: 7px;
    color: #2f9e7a; font-weight: 800; font-size: 15px; letter-spacing: .5px;
  }
  .name { font-size: 20px; font-weight: 600; }
  .name b { color: #2f9e7a; }
  .sub { color: #9aa3ad; font-size: 11px; margin-bottom: 10px; }

  .log {
    flex: 1 1 auto; min-height: 150px; max-height: 300px; overflow: auto;
    margin: 0 0 10px; padding: 10px 12px;
    background: rgba(0, 0, 0, .35);
    border: 1px solid rgba(255, 255, 255, .07); border-radius: 8px;
    color: #8fd6c0; font: 11px/1.5 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    white-space: pre-wrap;
  }
  .credits { color: #6b7480; font-size: 10px; line-height: 1.5; }

  .group-title {
    display: flex; align-items: center; gap: 6px;
    margin-top: 4px; color: #c9ced6; font-size: 10.5px;
    text-transform: uppercase; letter-spacing: .06em;
  }
  .group-title:first-child { margin-top: 0; }
  .dot { width: 7px; height: 7px; border-radius: 50%; background: #d95757; }
  .dot.on { background: #59c985; }

  .q {
    display: flex; align-items: center; gap: 8px; width: 100%;
    padding: 8px 10px; cursor: pointer;
    background: rgba(255, 255, 255, .06); color: #e8eaed;
    border: 1px solid rgba(255, 255, 255, .12); border-radius: 7px;
    font: inherit; text-align: left;
  }
  .q:hover { background: rgba(255, 255, 255, .1); }
  .q:disabled { opacity: .5; cursor: default; }
  .q.primary { background: #2f9e7a; border-color: #2f9e7a; color: #fff; font-weight: 700; }
  .q.primary:hover { background: #34b088; }
  .q.ghost { color: #9aa3ad; }
  .q.icon { width: 34px; flex: 0 0 34px; justify-content: center; padding: 8px 0; }
  .row { display: grid; grid-template-columns: minmax(0, 1fr) 34px; gap: 6px; }

  .field { display: grid; gap: 4px; }
  .field > span { color: #9aa3ad; font-size: 10px; }
  select {
    width: 100%; padding: 7px; background: #101214; color: #e8eaed;
    border: 1px solid rgba(255, 255, 255, .12); border-radius: 6px;
  }
  .warn {
    margin-top: 2px; padding: 7px 9px; border-radius: 6px;
    background: rgba(230, 80, 0, .18); border: 1px solid rgba(230, 80, 0, .45);
    color: #ffb380; font-size: 10.5px; line-height: 1.4;
  }
</style>
