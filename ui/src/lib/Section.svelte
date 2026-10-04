<script>
  import { untrack } from 'svelte'
  import SectionControls from './SectionControls.svelte'
  import Icon from './Icon.svelte'
  import { app, config, t, get, set } from './xra.svelte.js'
  let { section } = $props()

  const STORE = 'ui.sections_open'
  // Sections are keyed by id and never re-created, so capturing the initial
  // persisted value once is intended.
  let open = $state(untrack(() => get(STORE, {})?.[section.id] ?? false))
  const searching = $derived(!!(app.search || '').trim())
  let el

  function toggle() {
    open = !open
    set(`${STORE}.${section.id}`, open)
  }

  // The left dock can request a section; open it (persisting the choice) and
  // scroll it into view inside the panel body.
  $effect(() => {
    void app.focusNonce
    if (app.focusSection !== section.id || !app.panelOpen) return
    open = true
    set(`${STORE}.${section.id}`, true)
    requestAnimationFrame(() => el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' }))
  })
</script>

<details class="xra-sec" bind:this={el} open={open || searching}>
  <summary onclick={(e) => { e.preventDefault(); toggle() }}>
    <span class="xra-sec-title">
      <Icon name={section.icon} size={15} class="xra-sec-icon" />
      <span>{t(section.title)}</span>
    </span>
    <svg class="xra-sec-chevron" class:open viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </summary>
  {#if open || searching}
    <div class="xra-sec-body">
      <SectionControls {section} />
    </div>
  {/if}
</details>
