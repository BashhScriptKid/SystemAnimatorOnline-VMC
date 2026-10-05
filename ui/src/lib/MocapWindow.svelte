<script>
  import { onMount } from 'svelte'
  import Icon from './Icon.svelte'
  import { get, set, t } from './xra.svelte.js'

  const X = () => window.XRA

  const g = get('ui.mocap_window', {}) || {}
  let x = $state(Number.isFinite(g.x) ? g.x : 48)
  let y = $state(Number.isFinite(g.y) ? g.y : 96)
  let w = $state(Number.isFinite(g.w) ? g.w : 360)
  let h = $state(Number.isFinite(g.h) ? g.h : 270)

  let stageHost = $state()
  let tracking = $state(false)
  let fps = $state(0)
  let lastFrames = null
  let lastT = 0
  let timer = 0

  // Telemetry shown under the header: capture/inference geometry + per-part
  // confidence (pose / face / each hand).
  let camRes = $state('—')
  let infRes = $state('—')
  let inferMs = $state(0)
  let poseConf = $state(null)
  let faceConf = $state(null)
  let leftConf = $state(null)
  let rightConf = $state(null)
  let lastStatusAt = 0

  function fmtRes(geom) {
    if (!Array.isArray(geom)) return '—'
    const w = Number(geom[0]), h = Number(geom[1])
    return w > 0 && h > 0 ? `${Math.round(w)}×${Math.round(h)}` : '—'
  }

  function avgScore(points) {
    if (!Array.isArray(points) || !points.length) return null
    let sum = 0, n = 0
    for (const p of points) {
      const s = Number(p?.score ?? p?.visibility)
      if (Number.isFinite(s)) { sum += s; n++ }
    }
    return n ? sum / n : null
  }

  function num(value) {
    if (value == null || value === '') return null
    const v = Number(value)
    return Number.isFinite(v) ? v : null
  }

  function confText(v) {
    return Number.isFinite(v) ? `${Math.round(v * 100)}%` : '—'
  }

  function confTone(v) {
    if (!Number.isFinite(v)) return 'text-[var(--xra-ui-dim)]'
    if (v >= 0.75) return 'text-emerald-400'
    if (v >= 0.5) return 'text-amber-400'
    return 'text-red-400'
  }

  function readTelemetry() {
    const back = X()?.xraBackend
    const snap = back?.snapshot?.() || {}
    const cap = snap.capture || {}
    // Keep the capture status warm even if the performance panel never opened.
    const now = performance.now()
    if (now - lastStatusAt > 1000) {
      lastStatusAt = now
      try { back?.refreshStatus?.() } catch (e) {}
    }

    let cam = fmtRes(cap.capture_geometry?.[0] ? cap.capture_geometry : cap.geometry)
    if (cam === '—') {
      const vc = window.System?._browser?.camera?.video_canvas
      if (vc?.width && vc?.height) cam = `${vc.width}×${vc.height}`
    }
    camRes = cam
    infRes = fmtRes(cap.inference_geometry?.[0] ? cap.inference_geometry : cap.infer_geometry)
    inferMs = Number(cap.inference_ema_ms || 0)

    // Pose from the raw model output (true confidence); face/hands from the
    // stabilized output, which is what the skeleton actually renders (raw is
    // captured before hand recovery, so it reads 0 on a recovered/held hand).
    const raw = cap.landmarks?.raw || null
    const out = cap.landmarks?.output || null
    let pose = num(raw?.score_median ?? out?.score_median)
    let face = num(out?.face_confidence ?? raw?.face_confidence)
    let lh = num(out?.left_hand_confidence ?? raw?.left_hand_confidence)
    let rh = num(out?.right_hand_confidence ?? raw?.right_hand_confidence)

    // Browser-side MediaPipe (or a native worker payload) fallback.
    const sb = window.SA_bridge?.backend
    if (sb) {
      if (pose == null) pose = num(avgScore(sb.latest?.keypoints))
      if (face == null && sb.face) {
        face = num(sb.face.faceInViewConfidence) ?? (sb.face.landmarks?.length ? 0.95 : null)
      }
      if (lh == null) lh = avgScore(sb.leftHand)
      if (rh == null) rh = avgScore(sb.rightHand)
    }
    poseConf = pose
    faceConf = face
    leftConf = lh
    rightConf = rh
  }

  // The component stays mounted so the native layers never re-parent; 'off'
  // just hides it. 'auto' also hides it while idle (idle is painted black +
  // "Tracking is off" instead when visibility is 'always').
  const enabled = $derived(get('ui.mocap_view', 'off') !== 'off')
  const showWindow = $derived(enabled && (get('ui.mocap_visibility', 'always') !== 'auto' || tracking))

  function commit() {
    set('ui.mocap_window', { x: Math.round(x), y: Math.round(y), w: Math.round(w), h: Math.round(h) })
  }

  function update() {
    try { X()?.nativeBridge?.updateMocapWindow?.() } catch (e) {}
  }

  function drag(e, kind) {
    e.preventDefault()
    const sx = e.clientX, sy = e.clientY, ox = x, oy = y, ow = w, oh = h
    const move = (ev) => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy
      if (kind === 'move') {
        x = Math.max(0, Math.min(window.innerWidth - 80, ox + dx))
        y = Math.max(0, Math.min(window.innerHeight - 30, oy + dy))
      } else {
        w = Math.max(200, Math.min(window.innerWidth - x, ow + dx))
        h = Math.max(130, Math.min(window.innerHeight - y, oh + dy))
      }
    }
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      commit()
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  // Reparent the real native layers when the window is mounted.
  $effect(() => {
    const host = stageHost
    if (!host) return
    try { X()?.nativeBridge?.attachMocapWindow?.(host) } catch (e) {}
    return () => { try { X()?.nativeBridge?.detachMocapWindow?.() } catch (e) {} }
  })

  // Keep the stage transform in sync with the window geometry and tracking.
  $effect(() => {
    void x; void y; void w; void h; void tracking; void showWindow
    if (showWindow) update()
  })

  onMount(() => {
    const poll = () => {
      tracking = !!X()?.nativeBridge?.cameraRunning?.()
      const fr = Number((X()?.xraBackend?.snapshot?.() || {}).framesReceived || 0)
      const now = performance.now()
      if (lastFrames != null && now > lastT) fps = Math.max(0, (fr - lastFrames) / ((now - lastT) / 1000))
      lastFrames = fr
      lastT = now
      readTelemetry()
    }
    poll()
    timer = setInterval(poll, 500)
    window.addEventListener('resize', update)
    return () => { clearInterval(timer); window.removeEventListener('resize', update) }
  })
</script>

  <div
    class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"
    style="display:{showWindow ? 'flex' : 'none'}; left:{x}px; top:{y}px; width:{w}px; height:{h}px;"
  >
    <header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5" onpointerdown={(e) => drag(e, 'move')}>
      <Icon name="Activity" size={14} />
      <span class="flex-1 text-[12px] font-semibold">{t('Mocap')}</span>
      <span class="flex items-center gap-1 text-[10.5px] tabular-nums text-[var(--xra-ui-dim)]">
        <span class="h-1.5 w-1.5 rounded-full" class:bg-[var(--xra-ui-accent)]={tracking} class:bg-[#565656]={!tracking}></span>
        {tracking ? (fps >= 1 ? `${Math.round(fps)} fps` : 'LIVE') : 'OFF'}
      </span>
      <select
        class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"
        value={get('ui.mocap_view', 'off')}
        onchange={(e) => set('ui.mocap_view', e.currentTarget.value)}
        onpointerdown={(e) => e.stopPropagation()}
      >
        <option value="both">{t('Webcam + skeleton')}</option>
        <option value="wireframe">{t('Skeleton only')}</option>
        <option value="video">{t('Webcam only')}</option>
        <option value="off">{t('Off')}</option>
      </select>
      <button
        type="button"
        class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"
        title={t('Close')}
        onclick={() => set('ui.mocap_view', 'off')}
        onpointerdown={(e) => e.stopPropagation()}
      ><Icon name="X" size={13} /></button>
    </header>
    {#if tracking}
      <div class="flex shrink-0 flex-wrap items-center gap-x-2.5 gap-y-0.5 border-y border-white/10 bg-black/25 px-2 py-1 text-[10px] leading-none tabular-nums">
        <span class="text-[var(--xra-ui-dim)]">CAM <b class="font-semibold text-[var(--xra-ui-fg)]">{camRes}</b></span>
        <span class="text-[var(--xra-ui-dim)]">INF <b class="font-semibold text-[var(--xra-ui-fg)]">{infRes}</b>{inferMs > 0 ? ` · ${Math.round(inferMs)}ms` : ''}</span>
        <span class="text-[var(--xra-ui-dim)]">POSE <b class={confTone(poseConf)}>{confText(poseConf)}</b></span>
        <span class="text-[var(--xra-ui-dim)]">FACE <b class={confTone(faceConf)}>{confText(faceConf)}</b></span>
        <span class="text-[var(--xra-ui-dim)]">L <b class={confTone(leftConf)}>{confText(leftConf)}</b></span>
        <span class="text-[var(--xra-ui-dim)]">R <b class={confTone(rightConf)}>{confText(rightConf)}</b></span>
      </div>
    {/if}
    <div class="relative min-h-0 flex-1 overflow-hidden bg-black" bind:this={stageHost}>
      {#if !tracking}
        <div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]">
          {t('Tracking is off')}
        </div>
      {/if}
      <div
        class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"
        title={t('Resize')}
        onpointerdown={(e) => { e.stopPropagation(); drag(e, 'resize') }}
      ></div>
    </div>
  </div>
