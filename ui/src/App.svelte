<script>
  import { app, boot, toggleClean, refreshStatus } from './lib/xra.svelte.js'
  import { SECTIONS } from './lib/schema.js'
  import Section from './lib/Section.svelte'

  boot()
</script>

{#if app.ready && app.panelOpen}
  <aside class="xra-panel">
    <header class="xra-panel-head">
      <strong>XR Animator</strong>
      <span class="xra-spacer"></span>
      <button title="{window.XRA?.i18n?.t?.('Clean screen mode (Press Esc to restore)') || 'Clean screen (Esc)'}" onclick={toggleClean}>🙈</button>
      <button title="Close panel" onclick={() => app.panelOpen = false}>✕</button>
    </header>
    <div class="xra-panel-body">
      {#each SECTIONS as s (s.id)}<Section section={s} />{/each}
    </div>
  </aside>
{:else if app.ready}
  <button class="xra-panel-launcher" onclick={() => { app.panelOpen = true; refreshStatus() }}>⚙</button>
{/if}
