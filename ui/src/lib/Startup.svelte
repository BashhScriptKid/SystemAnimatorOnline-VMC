<script>
  import { onMount } from 'svelte'
  import Icon from './Icon.svelte'
  import { app, config, resync, startTracking, t } from './xra.svelte.js'

  const X = () => window.XRA
  const tr = (s) => t(s)
  const PRESETS = ['AUTO', 'ECO', 'LOW', 'BALANCED', 'QUALITY', 'HIGH', 'MAX', 'CUSTOM']

  // Persist without blocking the UI. save() can stall when the host-side write
  // path is busy (e.g. backend reconfigure), so the splash must never await it.
  function persist() {
    try { X()?.profileService?.save?.(0) } catch (e) {}
  }

  const languageOptions = (() => {
    const L = X()?.i18n?.LANGUAGES
    return Array.isArray(L) && L.length ? L : [['auto', 'Auto / System'], ['en', 'English'], ['it', 'Italiano']]
  })()

  let language = $state('auto')
  let preset = $state('CUSTOM')
  let status = $state('')
  let bgText = $state('default')
  let cameras = $state([])
  let camerasReady = $state(false)
  let cameraValue = $state('')
  let cameraRunning = $state(false)
  let cameraStateText = $state('')
  let warning = $state('')
  let ready = $state(false)
  let busy = $state(false)
  let presetBusy = $state(false)
  let camBusy = $state(false)

  let closing = false
  let interacted = false
  let autoDismissAt = 0
  let timer = 0
  let offs = []

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
    try { await startTracking() }
    catch (e) { X().toast?.('Tracking: ' + e.message, 'warn', 4500) }
    finally { busy = false; dismiss() }
  }

  async function startWithPreset(name) {
    const XRA = X()
    name = String(name || 'CUSTOM').toUpperCase()
    if (name === 'CUSTOM') {
      XRA.config.performance.master_preset = 'CUSTOM'
      persist(); status = 'CUSTOM · ready'; return
    }
    if (name === 'AUTO') {
      status = 'Benchmarking…'
      const result = await XRA.performance.benchmarkHardwareOnly()
      status = `AUTO → ${result.preset} (${result.fps.toFixed(1)} fps)`
      await XRA.performance.applyPresetSafe(result.preset)
      XRA.config.performance.master_preset = 'AUTO'
      XRA.config.performance.auto_last_result = result
      persist(); return
    }
    status = `${name}: applying…`
    await XRA.performance.applyPresetSafe(name)
    status = `${name} · applied`
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
    } catch (e) {
      camerasReady = true
      renderCameraState(tr('Camera unavailable'))
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
    } catch (e) {
      renderCameraState('Error · ' + e.message)
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

  // Informational only — the splash no longer gates on readiness.
  function updateReadiness() {
    if (closing) return
    const info = getCameraBusyInfo()
    warning = info.busy
      ? `Webcam in use by another application (${info.proc}). Close it to start tracking.`
      : ''
    ready = isAvatarReady() && isBackendReady()
    if (ready && !interacted && !autoDismissAt) autoDismissAt = Date.now() + 2000
    else if (!ready) autoDismissAt = 0
  }

  function tick() {
    updateReadiness()
    if (autoDismissAt && !interacted && !busy && Date.now() >= autoDismissAt) dismiss()
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
      status = 'Preset error: ' + e.message
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
    status = tr('Ready.')
    language = XRA?.config?.ui?.language || 'auto'
    preset = (XRA?.config?.performance?.master_preset === 'MINIMAL'
      ? 'ECO'
      : (XRA?.config?.performance?.master_preset || 'CUSTOM'))
    bgText = XRA?.config?.background?.path || XRA?.config?.background?.color || 'default'

    renderCameraState()
    setTimeout(() => refreshCameras(false), 100)

    timer = setInterval(tick, 300)
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

<!-- Blender-style splash: dismiss on click-outside / Esc, or automatically a
     beat after the scene is ready. It never starts the camera. -->
<div class="xra-startup" onclick={dismiss}>
  <div class="card" role="dialog" aria-label="XR Animator VMC" onclick={(e) => e.stopPropagation()}
       onpointerdown={(e) => e.stopPropagation()} onpointerenter={() => { interacted = true }}>
    <div class="head">
      <div>
        <h2>XR Animator <span class="brand-tag">VMC</span></h2>
        <div class="sub">{tr('Quick setup · changes apply immediately.')}</div>
      </div>
      <button type="button" class="close" title={tr('Close')} aria-label={tr('Close')} onclick={dismiss}><Icon name="X" size={15} /></button>
    </div>

    <div class="grid">
      <label class="field">
        <div class="sub">Language</div>
        <select value={language} onchange={onLanguageChange} disabled={busy}>
          {#each languageOptions as [code, label] (code)}<option value={code}>{label}</option>{/each}
        </select>
      </label>
      <label class="field">
        <div class="sub">Master preset</div>
        <select value={preset} onchange={onPresetChange} disabled={presetBusy || busy}>
          {#each PRESETS as name (name)}<option value={name}>{name}</option>{/each}
        </select>
      </label>
    </div>

    <div class="status">{status}</div>

    <section class="camera">
      <div class="camera-head">
        <div class="camera-title">{tr('Webcam')}</div>
        <div class="camera-state" class:on={cameraRunning}>{cameraStateText}</div>
      </div>
      <div class="camera-row">
        <select value={cameraValue} onchange={onCameraChange} disabled={camBusy || busy}>
          {#if !camerasReady}
            <option value="">{tr('Loading cameras…')}</option>
          {:else if !cameras.length}
            <option value="">{tr('No cameras found')}</option>
          {:else}
            {#each cameras as c (c.deviceId)}<option value={c.deviceId}>{c.label}</option>{/each}
          {/if}
        </select>
        <button type="button" class="action" title={tr('Refresh cameras')} aria-label={tr('Refresh cameras')} onclick={() => refreshCameras(true)} disabled={camBusy || busy}><Icon name="RefreshCw" size={14} /></button>
      </div>
      {#if warning}<div class="warn">{warning}</div>{/if}
    </section>

    <div class="sub bg">Background: {bgText}</div>

    <div class="avatar">
      <div class="sub">{tr('Avatar: the last VRM you chose is copied into avatars/ and restored at startup.')}</div>
      <button type="button" class="action" onclick={loadVrm} disabled={busy}>{tr('Load / change VRM…')}</button>
    </div>

    <div class="foot">
      <button type="button" class="action" onclick={dismiss} disabled={busy}>{tr('Continue')}</button>
      <button type="button" class="action primary" onclick={startAndClose} disabled={busy}>
        {busy ? tr('Starting…') : tr('Start tracking')}
      </button>
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
    width: min(470px, calc(100vw - 28px));
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, .12);
    border-radius: 12px;
    background: rgba(20, 22, 24, .97);
    box-shadow: 0 14px 48px rgba(0, 0, 0, .65);
    backdrop-filter: blur(10px);
  }
  h2 { margin: 0; font-size: 20px; }
  .brand-tag { color: #2f9e7a; font-weight: 700; }
  .sub { color: #9aa3ad; font-size: 11px; }
  .head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
  .close {
    flex: 0 0 auto; width: 28px; height: 28px; padding: 0;
    display: grid; place-items: center;
    background: rgba(255, 255, 255, .06); color: #e8eaed;
    border: 1px solid rgba(255, 255, 255, .12); border-radius: 7px; cursor: pointer;
  }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; }
  .field { display: grid; gap: 4px; min-width: 0; color: #9aa3ad; font-size: 10px; }
  select {
    width: 100%;
    padding: 7px;
    background: #101214;
    color: #e8eaed;
    border: 1px solid rgba(255, 255, 255, .12);
    border-radius: 6px;
  }
  .status { color: #9aa3ad; font-size: 11px; margin-top: 10px; }
  .camera {
    margin: 11px 0 8px;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, .08);
    border-radius: 8px;
    background: rgba(255, 255, 255, .025);
  }
  .camera-head { display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 7px; }
  .camera-title { color: #e8eaed; font-weight: 800; }
  .camera-state { color: #9aa3ad; font: 10px/1.3 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
  .camera-state::before {
    content: '';
    display: inline-block;
    width: 7px; height: 7px;
    margin-right: 5px;
    border-radius: 50%;
    background: #d95757;
  }
  .camera-state.on::before { background: #59c985; }
  .camera-row { display: grid; grid-template-columns: minmax(0, 1fr) 38px; gap: 6px; }
  .warn {
    margin-top: 8px;
    padding: 8px 10px;
    border-radius: 6px;
    background: rgba(230, 80, 0, .18);
    border: 1px solid rgba(230, 80, 0, .45);
    color: #ffb380;
    font-size: 11px;
    line-height: 1.4;
  }
  .bg { margin: 8px 0; }
  .avatar { margin: 6px 0; }
  .action {
    background: rgba(255, 255, 255, .06);
    color: #e8eaed;
    border: 1px solid rgba(255, 255, 255, .12);
    border-radius: 7px;
    padding: 6px 10px;
    cursor: pointer;
  }
  .action:disabled { opacity: .5; cursor: default; }
  .action.primary { background: #2f9e7a; border-color: #2f9e7a; color: #fff; }
  .foot { display: flex; gap: 8px; margin-top: 14px; }
  .foot .action { flex: 1 1 0; height: 36px; font-weight: 700; }
</style>
