<script>
  import Icon from './Icon.svelte'
  import SectionControls from './SectionControls.svelte'
  import { app, t } from './xra.svelte.js'

  let { section } = $props()
  let el

  // Non-modal popup: hide on any pointer-down outside the popup and the dock,
  // or on Escape. Clicking the same dock icon toggles it (handled in the dock).
  $effect(() => {
    const onDown = (e) => {
      const target = e.target
      if (el && target instanceof Node && el.contains(target)) return
      if (target instanceof Element && target.closest('.xra-dock')) return
      app.popupSection = null
    }
    const onKey = (e) => { if (e.key === 'Escape') app.popupSection = null }
    document.addEventListener('pointerdown', onDown, true)
    window.addEventListener('keydown', onKey, true)
    return () => {
      document.removeEventListener('pointerdown', onDown, true)
      window.removeEventListener('keydown', onKey, true)
    }
  })
</script>

<aside
  class="xra-section-popup fixed left-[64px] top-1/2 z-[99992] flex max-h-[72vh] w-[320px] -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-white/12 bg-[var(--xra-ui-bg)] text-[12.5px] leading-[1.45] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"
  bind:this={el}
>
  <header class="flex shrink-0 items-center gap-2 border-b border-white/10 bg-[var(--xra-ui-bg2)] px-3 py-2">
    <Icon name={section.icon} size={15} class="text-[var(--xra-ui-dim)]" />
    <span class="text-[12.5px] font-semibold">{t(section.title)}</span>
  </header>
  <div class="min-h-0 flex-1 overflow-auto px-2.5 py-2">
    <SectionControls {section} />
  </div>
</aside>
