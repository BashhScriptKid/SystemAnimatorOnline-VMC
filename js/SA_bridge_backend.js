(function () {
  if (typeof SA_bridge === "undefined")
    return

  var __scope = (typeof window !== "undefined") ? window : (typeof self !== "undefined") ? self : globalThis
  function pose() { return (__scope.XRA_BACKEND || __scope.XRA_NATIVE) || null }
  function cam() { return __scope.XRA_BACKEND_CAMERA || null }

  function post(path, body) {
    return fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body || {})
    }).then(function (r) { return r.json() })
  }

  var backend = {
    available: function () { return !!(pose() || cam()) },
    status: function () {
      var c = cam()
      if (c && typeof c.status === "function") { try { return c.status() } catch (e) {} }
      var b = pose()
      if (b && typeof b.status !== "undefined") { try { return (typeof b.status === "function") ? b.status() : b.status } catch (e) {} }
      return null
    },
    list: function () { return fetch("/__xra_backend/list").then(function (r) { return r.json() }) },
    load: function (model, mode) { return post("/__xra_backend/load", { model: model, mode: mode }) },
    configure: function (opts) {
      var c = cam()
      if (c && typeof c.configure === "function") return c.configure(opts)
      return Promise.resolve(false)
    },
    stop: function () {
      var c = cam()
      if (c && typeof c.stop === "function") return c.stop()
      return Promise.resolve()
    },
    setPoseListener: function (fn) {
      var b = pose()
      if (b && typeof b.setPoseListener === "function") return b.setPoseListener(fn)
      return function () {}
    },
    consumeLatestPose: function (w, h) {
      var b = pose()
      if (b && typeof b.consumeLatestPose === "function") return b.consumeLatestPose(w, h)
      return null
    },
    maybeReplaceFrame: function (rgba, w, h) {
      var b = pose()
      if (b && typeof b.maybeReplaceFrame === "function") return b.maybeReplaceFrame(rgba, w, h)
      return false
    },
    waitUntilConfigured: function (t) {
      var b = pose()
      if (b && typeof b.waitUntilConfigured === "function") return b.waitUntilConfigured(t)
      return Promise.resolve(null)
    },
    frontendReady: function (w, h) {
      var b = pose()
      if (b && typeof b.frontendReady === "function") b.frontendReady(w, h)
    },
    shutdown: function () {
      var b = pose()
      if (b && typeof b.shutdown === "function") b.shutdown()
    },
    get: function (name) {
      var b = pose()
      return b ? b[name] : undefined
    }
  }

  SA_bridge.provide("backend", backend)

  // Mirror XRA_NATIVE's property getters so SA_bridge.backend is a shape-compatible
  // drop-in for the worker/data-plane accessor (active/latest/face/hands...).
  ;["active", "latest", "face", "leftHand", "rightHand", "leftHandWorld", "rightHandWorld"].forEach(function (name) {
    var get = function () { return backend.get(name) }
    Object.defineProperty(backend, name, { get: get, configurable: true })
    Object.defineProperty(SA_bridge.backend, name, { get: get, configurable: true })
  })

  if (typeof console !== "undefined" && console.log)
    console.log("[SA_bridge] backend capability provided")
})()
