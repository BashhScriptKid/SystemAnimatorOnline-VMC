import { mount } from 'svelte'
import App from './App.svelte'

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
