<script>
  import { app, config, boot, toggleClean, refreshStatus } from './lib/xra.svelte.js'
  import { buildSections } from './lib/schema.js'
  import Section from './lib/Section.svelte'
  import Startup from './lib/Startup.svelte'

  boot()

  const sections = $derived(buildSections(config))
</script>

{#if app.ready && app.startupOpen}
  <Startup />
{/if}

{#if app.ready && !app.startupOpen && app.panelOpen}
  <aside class="xra-panel">
    <header class="xra-panel-head">
      <strong>XR Animator</strong>
      <span class="xra-spacer"></span>
      <button title="{window.XRA?.i18n?.t?.('Clean screen mode (Press Esc to restore)') || 'Clean screen (Esc)'}" onclick={toggleClean}>🙈</button>
      <button title="Close panel" onclick={() => app.panelOpen = false}>✕</button>
    </header>
    <div class="xra-panel-body">
      {#each sections as s (s.id)}<Section section={s} />{/each}
    </div>
  </aside>
{:else if app.ready && !app.startupOpen}
  <button class="xra-panel-launcher" onclick={() => { app.panelOpen = true; refreshStatus() }}>⚙</button>
{/if}
