var SA_bridge = (function () {
  var SPEC = {
    fs:       ["exists", "stat", "readDir", "mkdir", "remove", "readFile", "writeFile", "appendFile", "copy", "readlink", "utimes", "access", "rm"],
    exec:     ["run", "spawn"],
    env:      ["home", "platform", "versions", "argv", "get"],
    window:   ["setSize", "setPosition", "setTransparent", "setIgnoreMouseEvents", "setAlwaysOnTop", "setFocusable", "hide", "show", "minimize", "reload", "close", "captureFrame"],
    hotkey:   ["register", "unregister", "isRegistered"],
    dialog:   ["open", "save", "message"],
    shell:    ["openExternal"],
    screen:   ["list", "primary"],
    protocol: ["isRegistered", "register"],
    hash:     ["sha256"],
    image:    ["size"],
    net:      ["wsServer", "wsClient", "wsSend", "oscSend"],
    backend:  ["available", "status", "list", "load", "configure", "stop", "setPoseListener", "consumeLatestPose", "maybeReplaceFrame", "waitUntilConfigured", "frontendReady", "shutdown", "get"]
  }

  var _adapter = null
  var _name = "(none)"

  var api = {}

  function unsupported(group, method) {
    return function () {
      throw new Error("SA_bridge." + group + "." + method + "(): no host adapter implements this" + (_adapter ? " [" + _name + "]" : ""))
    }
  }

  function dispatch(group, method) {
    return function () {
      var g = _adapter && _adapter[group]
      if (g && typeof g[method] === "function")
        return g[method].apply(g, arguments)
      return unsupported(group, method).apply(null, arguments)
    }
  }

  Object.keys(SPEC).forEach(function (group) {
    api[group] = {}
    SPEC[group].forEach(function (method) {
      api[group][method] = dispatch(group, method)
    })
  })

  api.SPEC = SPEC

  api.install = function (adapter, name) {
    _adapter = adapter || null
    _name = name || "(unnamed)"
    return api
  }

  api.provide = function (group, impl) {
    if (!_adapter) { _adapter = {}; _name = "(composed)" }
    _adapter[group] = impl
    return api
  }

  Object.defineProperty(api, "adapter", { get: function () { return _adapter } })
  Object.defineProperty(api, "name", { get: function () { return _name } })
  Object.defineProperty(api, "installed", { get: function () { return !!_adapter } })

  api.available = function () {
    var out = {}
    Object.keys(SPEC).forEach(function (group) {
      out[group] = SPEC[group].filter(function (method) {
        return !!(_adapter && _adapter[group] && typeof _adapter[group][method] === "function")
      })
    })
    return out
  }

  api.missing = function () {
    var out = {}
    Object.keys(SPEC).forEach(function (group) {
      var m = SPEC[group].filter(function (method) {
        return !(_adapter && _adapter[group] && typeof _adapter[group][method] === "function")
      })
      if (m.length) out[group] = m
    })
    return out
  }

  api.selfTest = function () {
    if (!_adapter) {
      console.warn("SA_bridge: no adapter installed")
      return false
    }
    var miss = api.missing()
    var groups = Object.keys(miss)
    if (groups.length)
      console.warn("SA_bridge[" + _name + "]: unimplemented -> " + groups.map(function (g) { return g + "(" + miss[g].join(",") + ")" }).join(" "))
    else
      console.log("SA_bridge[" + _name + "]: all capabilities implemented")
    return groups.length === 0
  }

  return api
})()
