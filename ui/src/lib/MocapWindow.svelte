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

  let canvas
  let raf = 0

  function commit() {
    set('ui.mocap_window', { x: Math.round(x), y: Math.round(y), w: Math.round(w), h: Math.round(h) })
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

  function tick() {
    raf = requestAnimationFrame(tick)
    if (!canvas) return
    const body = canvas.parentElement
    if (!body) return
    const dpr = window.devicePixelRatio || 1
    const W = body.clientWidth, H = body.clientHeight
    if (W < 2 || H < 2) return
    const cw = Math.round(W * dpr), ch = Math.round(H * dpr)
    if (canvas.width !== cw || canvas.height !== ch) { canvas.width = cw; canvas.height = ch }
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, W, H)
    const mode = get('ui.mocap_view', 'off')
    if (mode === 'off') return

    const src = X()?.nativeBridge?.getMocapSources?.() || {}
    const cr = src.cameraRect || { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight }
    if (!cr.w || !cr.h) return
    // Map the native camera region into the window; the skeleton canvases use
    // the same transform so they stay aligned with the webcam image.
    const k = Math.min(W / cr.w, H / cr.h)
    const ox = (W - cr.w * k) / 2, oy = (H - cr.h * k) / 2
    const mx = (x) => ox + (x - cr.x) * k
    const my = (y) => oy + (y - cr.y) * k

    if (mode === 'both' || mode === 'video') {
      const camSrc = (src.videoCanvas && src.videoCanvas.width) ? src.videoCanvas : src.video
      const sw = camSrc?.videoWidth || camSrc?.width || 0
      if (camSrc && sw) {
        try { ctx.drawImage(camSrc, ox, oy, cr.w * k, cr.h * k) } catch (e) {}
      }
    }
    if (mode === 'both' || mode === 'wireframe') {
      for (const c of (src.canvases || [])) {
        const r = c.rect
        if (!r) continue
        try { ctx.drawImage(c.node, mx(r.x), my(r.y), r.w * k, r.h * k) } catch (e) {}
      }
    }
  }

  onMount(() => { tick(); return () => cancelAnimationFrame(raf) })
</script>

<div
  class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"
  style="left:{x}px; top:{y}px; width:{w}px; height:{h}px;"
>
  <header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5" onpointerdown={(e) => drag(e, 'move')}>
    <Icon name="Activity" size={14} />
    <span class="flex-1 text-[12px] font-semibold">{t('Mocap')}</span>
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
  <div class="relative min-h-0 flex-1 bg-black/50">
    <canvas bind:this={canvas} class="absolute inset-0 h-full w-full"></canvas>
    <div
      class="absolute bottom-0 right-0 z-10 h-5 w-5 cursor-nwse-resize touch-none"
      title={t('Resize')}
      onpointerdown={(e) => { e.stopPropagation(); drag(e, 'resize') }}
    ></div>
  </div>
</div>
