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
  let timer = 0

  // 'auto' hides the window entirely while idle; anything else keeps it open
  // (the idle state is painted black + "Tracking is off" instead).
  const showWindow = $derived(get('ui.mocap_visibility', 'always') !== 'auto' || tracking)

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
    void x; void y; void w; void h; void tracking
    update()
  })

  onMount(() => {
    const poll = () => { tracking = !!X()?.nativeBridge?.cameraRunning?.() }
    poll()
    timer = setInterval(poll, 500)
    window.addEventListener('resize', update)
    return () => { clearInterval(timer); window.removeEventListener('resize', update) }
  })
</script>

{#if showWindow}
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
{/if}
