import { mount } from 'svelte'
import App from './App.svelte'
import './ui.css'

// Claim the boot overlay before DOMContentLoaded fires so the legacy
// 60_startup.js overlay stands down (see createOverlay there).
window.XRA_SVELTE_UI = true

function boot() {
  let el = document.getElementById('XRA_SVELTE')
  if (!el) {
    el = document.createElement('div')
    el.id = 'XRA_SVELTE'
    document.body.appendChild(el)
  }
  mount(App, { target: el })
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot)
else boot()
