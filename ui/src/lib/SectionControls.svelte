<script>
  import Control from './Control.svelte'
  import { config } from './xra.svelte.js'
  let { section } = $props()
</script>

{#each section.controls as c (c.path)}
  {#if !c.when || c.when(config)}<Control control={c} />{/if}
{/each}
