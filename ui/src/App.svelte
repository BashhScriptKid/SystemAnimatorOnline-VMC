<script>
  import { app, config, boot, get, toggleClean, refreshStatus } from './lib/xra.svelte.js'
  import { buildSections } from './lib/schema.js'
  import Section from './lib/Section.svelte'
  import Startup from './lib/Startup.svelte'
  import QuickDock from './lib/QuickDock.svelte'
  import Icon from './lib/Icon.svelte'
  import MocapWindow from './lib/MocapWindow.svelte'
  import SectionPopup from './lib/SectionPopup.svelte'

  boot()

  const sections = $derived(buildSections(config))
</script>

{#if app.ready}
  <QuickDock />
{/if}

{#if app.ready && app.popupSection}
  {@const popup = sections.find((s) => s.id === app.popupSection)}
  {#if popup}<SectionPopup section={popup} />{/if}
{/if}

{#if app.ready && get('ui.mocap_view', 'off') !== 'off'}
  <MocapWindow />
{/if}

{#if app.ready && app.panelOpen}
  <aside class="xra-panel">
    <header class="xra-panel-head">
      <strong>XR Animator</strong>
      <span class="xra-spacer"></span>
      <button title="{window.XRA?.i18n?.t?.('Clean screen mode (Press Esc to restore)') || 'Clean screen (Esc)'}" onclick={toggleClean}><Icon name="EyeOff" size={15} /></button>
      <button title="Close panel" onclick={() => app.panelOpen = false}><Icon name="X" size={15} /></button>
    </header>
    <div class="xra-panel-search">
      <input type="search" placeholder="Search settings…" value={app.search}
             oninput={(e) => app.search = e.currentTarget.value} />
    </div>
    <div class="xra-panel-body">
      {#each sections as s (s.id)}<Section section={s} />{/each}
    </div>
  </aside>
{:else if app.ready}
  <button class="xra-panel-launcher" onclick={() => { app.panelOpen = true; refreshStatus() }}><Icon name="Settings" size={16} /></button>
{/if}

{#if app.ready && app.startupOpen}
  <Startup />
{/if}
