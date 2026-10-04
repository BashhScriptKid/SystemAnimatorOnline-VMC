<script>
  import { onMount } from 'svelte'
  import Icon from './Icon.svelte'
  import { app, startRecording, startTracking, stopRecording, stopTracking, t, toggleSectionPopup } from './xra.svelte.js'

  const X = () => window.XRA

  let tracking = $state(false)
  let recording = $state(false)
  let timer = 0

  function poll() {
    const XRA = X()
    if (!XRA) return
    try { tracking = !!XRA.nativeBridge?.cameraRunning?.() } catch (e) {}
    try { recording = !!XRA.recorder?.status?.()?.active } catch (e) {}
  }

  let busy = $state(false)
  let busyLabel = $state('')

  async function toggleTracking() {
    if (busy) return
    busy = true
    const on = !tracking
    busyLabel = on ? 'Starting…' : 'Stopping…'
    try {
      if (on) { await startTracking(); tracking = true }
      else { await stopTracking(); tracking = false }
    } catch (e) {
      try { await X().nativeBridge?.forceStopCamera?.() } catch (_) {}
      tracking = false
      X().toast?.('Tracking: ' + e.message, 'warn', 4500)
    } finally {
      busy = false
      busyLabel = ''
      setTimeout(poll, 250)
    }
  }

  let recBusy = $state(false)
  let recBusyLabel = $state('')

  async function toggleRecording() {
    if (recBusy) return
    recBusy = true
    const on = !recording
    recBusyLabel = on ? 'Starting…' : 'Stopping…'
    try {
      if (on) { await startRecording(); recording = true }
      else { await stopRecording(); recording = false }
    } catch (e) {
      recording = false
      X().toast?.('Recording: ' + e.message, 'warn', 4500)
    } finally {
      recBusy = false
      recBusyLabel = ''
      setTimeout(poll, 250)
    }
  }

  async function pickVrm() {
    try { await X().nativeBridge?.openVrmPicker?.() } catch (e) { X().toast?.('VRM loader: ' + e.message, 'error', 4500) }
  }

  function about() {
    try { X().nativeBridge?.showAbout?.() } catch (e) {}
  }

  const SYMLINKS = [
    { id: 'ui', icon: 'Monitor', label: 'UI Settings' },
    { id: 'camera', icon: 'Camera', label: 'Webcam settings' },
    { id: 'avatar', icon: 'User', label: 'Model settings' },
    { id: 'second_avatar', icon: 'Globe', label: 'Studio link' },
    { id: 'stage', icon: 'Landmark', label: 'Environment + Camera' },
    { id: 'background', icon: 'Image', label: 'Background' },
    { id: 'lip', icon: 'Mic', label: 'Audio' },
  ]

  const BTN = 'flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer'
  const HOVER = 'hover:bg-white/10'
  // Labels stay fully hidden when the rail is collapsed (opacity, not just
  // clipping) so no text sliver leaks past the icon column.
  const LABEL = 'flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100'

  onMount(() => {
    poll()
    timer = setInterval(poll, 1000)
    return () => clearInterval(timer)
  })
</script>

<nav
  class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"
  onpointerenter={() => { app.dockExpanded = true }}
  onpointerleave={() => { app.dockExpanded = false }}
>
  {#each SYMLINKS as s (s.id)}
    <button type="button" class="{BTN} {HOVER}" aria-label={t(s.label)} onclick={() => toggleSectionPopup(s.id)}>
      <span class="grid w-5 shrink-0 place-items-center"><Icon name={s.icon} size={16} /></span>
      <span class={LABEL}>{t(s.label)}</span>
    </button>
  {/each}

  <div class="my-1 h-px bg-white/10"></div>

  <button type="button" class="{BTN} {tracking ? 'bg-emerald-500/20 hover:bg-emerald-500/30' : HOVER} {busy ? 'opacity-60' : ''}" aria-label={t('Tracking')} onclick={toggleTracking} disabled={busy}>
    <span class="grid w-5 shrink-0 place-items-center"><Icon name="Webcam" size={16} class={tracking ? 'text-emerald-400' : ''} /></span>
    <span class={LABEL}>{busy ? t(busyLabel) : (tracking ? t('Tracking on') : t('Tracking off'))}</span>
  </button>
  <button type="button" class="{BTN} {recording ? 'bg-red-500/30 hover:bg-red-500/40 text-red-200' : HOVER} {recBusy ? 'opacity-60' : ''}" aria-label={t('Record')} onclick={toggleRecording} disabled={recBusy}>
    <span class="grid w-5 shrink-0 place-items-center"><Icon name={recBusy ? 'Circle' : (recording ? 'Square' : 'Circle')} size={16} class={recording ? 'text-red-400' : ''} /></span>
    <span class={LABEL}>{recBusy ? t(recBusyLabel) : (recording ? t('Stop recording') : t('Record'))}</span>
  </button>
  <button type="button" class="{BTN} {HOVER}" aria-label={t('Load / change VRM…')} onclick={pickVrm}>
    <span class="grid w-5 shrink-0 place-items-center"><Icon name="FolderOpen" size={16} /></span>
    <span class={LABEL}>{t('Load / change VRM…')}</span>
  </button>
  <button type="button" class="{BTN} {HOVER}" aria-label={t('About')} onclick={about}>
    <span class="grid w-5 shrink-0 place-items-center"><Icon name="Info" size={16} /></span>
    <span class={LABEL}>{t('About')}</span>
  </button>
</nav>
