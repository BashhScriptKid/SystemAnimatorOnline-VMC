<script>
  import { onMount } from 'svelte'
  import Icon from './Icon.svelte'
  import { config, set } from './xra.svelte.js'

  const X = () => window.XRA
  let backends = $state([])
  let busy = $state(false)
  let status = $state('')
  let activeId = $state('')
  let activeProvider = $state('')

  const selected = $derived(config.performance?.tracker_backend || 'mediapipe-tasks-landmarker')

  async function refresh() {
    const api = X()?.xraBackend
    if (!api) return
    try { backends = (await api.listBackends?.()) || [] } catch (e) {}
    try {
      const s = api.snapshot?.() || {}
      activeId = s.model || ''
      activeProvider = s.providerHuman || s.provider || ''
    } catch (e) {}
  }

  async function download(id) {
    const r = await fetch('/__xra_backend/download', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: id }),
    })
    const d = await r.json().catch(() => ({}))
    if (!d.ok) throw new Error(d.error || 'download failed')
  }

  async function waitReady(id, ms = 30000) {
    const api = X().xraBackend
    const deadline = performance.now() + ms
    while (performance.now() < deadline) {
      const s = api.snapshot?.() || {}
      if (s.model === id && s.ready) return true
      if (s.model === id && s.lastError) throw new Error(s.lastError)
      await new Promise((r) => setTimeout(r, 250))
    }
    return false
  }

  async function pick(event) {
    const id = event.currentTarget.value
    if (id === selected) return
    busy = true
    try {
      const b = backends.find((x) => x.id === id)
      if (b && b.installed === false) { status = 'Downloading models…'; await download(id); await refresh() }
      status = 'Switching…'
      X().xraBackend.select(id)
      const ok = await waitReady(id)
      if (ok) { set('performance.tracker_backend', id); status = '' }
      else status = 'Not ready yet'
    } catch (e) {
      status = 'Error: ' + e.message
    } finally {
      busy = false
      refresh()
    }
  }

  onMount(refresh)
</script>

<div class="xra-backend" class:busy>
  <div class="head">
    <span class="title">Mocap backend</span>
    <span class="prov" title="Active backend / execution provider">{activeProvider || activeId || '—'}</span>
  </div>
  <div class="row">
    <select value={selected} onchange={pick} disabled={busy}>
      {#each backends as b (b.id)}
        <option value={b.id}>{b.label}{b.installed === false ? ' · needs download' : ''}</option>
      {/each}
    </select>
    <button type="button" title="Refresh backends" aria-label="Refresh backends" onclick={refresh} disabled={busy}><Icon name="RefreshCw" size={13} /></button>
  </div>
  {#if status}<div class="status">{status}</div>{/if}
</div>
