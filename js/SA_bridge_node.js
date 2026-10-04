(function () {
  if (typeof SA_bridge === "undefined")
    return

  function req(name) { return SA_require(name) }
  function remote() { return (typeof webkit_electron_remote !== "undefined" && webkit_electron_remote) || null }
  function win() { return (typeof webkit_window !== "undefined" && webkit_window) || null }
  function v6() { return (typeof webkit_version_milestone !== "undefined") && webkit_version_milestone && webkit_version_milestone["6.0.0"] }

  var fs = {
    exists: function (path) { return Promise.resolve(req("fs").existsSync(path)) },
    stat: function (path) {
      var s = req("fs").statSync(path)
      return Promise.resolve({ isFile: s.isFile(), isDirectory: s.isDirectory(), size: s.size, mtimeMs: s.mtimeMs })
    },
    readDir: function (path) { return Promise.resolve(req("fs").readdirSync(path)) },
    mkdir: function (path) { req("fs").mkdirSync(path); return Promise.resolve() },
    remove: function (path) { req("fs").unlinkSync(path); return Promise.resolve() },
    readFile: function (path, encoding) { return Promise.resolve(req("fs").readFileSync(path, encoding)) },
    writeFile: function (path, data, encoding) { req("fs").writeFileSync(path, data, encoding); return Promise.resolve() },
    appendFile: function (path, data, encoding) { req("fs").appendFileSync(path, data, encoding); return Promise.resolve() },
    copy: function (source, dest) { req("fs-extra").copySync(source, dest); return Promise.resolve() },
    readlink: function (path) { return Promise.resolve(req("fs").readlinkSync(path)) },
    utimes: function (path, atime, mtime) { req("fs").utimesSync(path, atime, mtime); return Promise.resolve() }
  }

  var exec = {
    run: function (command, options) {
      return new Promise(function (resolve, reject) {
        try {
          req("child_process").exec(command, options || {}, function (err, stdout, stderr) {
            resolve({ stdout: stdout, stderr: stderr, code: (err && err.code != null) ? err.code : 0 })
          })
        }
        catch (e) { reject(e) }
      })
    },
    spawn: function (command, args, options) {
      return new Promise(function (resolve, reject) {
        try {
          var cp = req("child_process").spawn(command, args || [], options || {})
          resolve({
            pid: cp.pid,
            stdout: cp.stdout,
            stderr: cp.stderr,
            kill: function (signal) { return cp.kill(signal) },
            onExit: function (cb) { cp.on("exit", cb); return cp }
          })
        }
        catch (e) { reject(e) }
      })
    }
  }

  var env = {
    home: function () {
      var r = remote()
      return Promise.resolve((r && r.process && r.process.env && r.process.env.HOME) || (typeof process !== "undefined" && process.env && process.env.HOME) || "")
    },
    platform: function () { return Promise.resolve((typeof process !== "undefined" && process.platform) || (navigator.platform || "").toLowerCase()) },
    versions: function () { return Promise.resolve((typeof process !== "undefined" && process.versions) || {}) },
    argv: function () {
      var r = remote()
      return Promise.resolve((r && r.process && r.process.argv) || (typeof process !== "undefined" && process.argv) || [])
    },
    get: function (name) {
      var r = remote()
      return Promise.resolve((r && r.process && r.process.env && r.process.env[name]) || (typeof process !== "undefined" && process.env && process.env[name]))
    }
  }

  var window_bridge = {
    setSize: function (w, h) { var x = win(); if (x && x.setSize) x.setSize(w, h); return Promise.resolve() },
    setPosition: function (x0, y0) { var x = win(); if (x && x.setPosition) x.setPosition(x0, y0); return Promise.resolve() },
    setTransparent: function () { return Promise.resolve() },
    setIgnoreMouseEvents: function (ignore, options) { var x = win(); if (x && x.setIgnoreMouseEvents) x.setIgnoreMouseEvents(ignore, options); return Promise.resolve() },
    setAlwaysOnTop: function (flag) { var x = win(); if (x && x.setAlwaysOnTop) x.setAlwaysOnTop(!!flag); return Promise.resolve() },
    setFocusable: function (flag) { var x = win(); if (x && x.setFocusable) x.setFocusable(!!flag); return Promise.resolve() },
    hide: function () { var x = win(); if (x && x.hide) x.hide(); return Promise.resolve() },
    show: function () { var x = win(); if (x && x.show) x.show(); return Promise.resolve() },
    minimize: function () { var x = win(); if (x && x.minimize) x.minimize(); return Promise.resolve() },
    reload: function () { var x = win(); if (x && x.reload) x.reload(); return Promise.resolve() },
    close: function () { var x = win(); if (x && x.close) x.close(); return Promise.resolve() },
    captureFrame: function () {
      var r = remote()
      if (!r) return Promise.reject(new Error("window.captureFrame requires Electron"))
      return Promise.reject(new Error("window.captureFrame: use the shell capture path (capturePage is a 1px probe)"))
    }
  }

  var hotkey = {
    register: function (accelerator, cb) {
      var r = remote()
      if (r && r.globalShortcut) { r.globalShortcut.register(accelerator, cb); return Promise.resolve(true) }
      return Promise.resolve(false)
    },
    unregister: function (accelerator) { var r = remote(); if (r && r.globalShortcut) r.globalShortcut.unregister(accelerator); return Promise.resolve() },
    isRegistered: function (accelerator) { var r = remote(); return Promise.resolve(!!(r && r.globalShortcut && r.globalShortcut.isRegistered(accelerator))) }
  }

  var dialog = {
    open: function (options) {
      var r = remote()
      if (!r || !r.dialog) return Promise.resolve(null)
      return new Promise(function (resolve) {
        try {
          if (v6())
            r.dialog.showOpenDialog(win(), options).then(function (result) { resolve(result.canceled ? null : result.filePaths) }).catch(function () { resolve(null) })
          else
            r.dialog.showOpenDialog(win(), options, function (paths) { resolve(paths || null) })
        }
        catch (e) { resolve(null) }
      })
    },
    save: function (options) {
      var r = remote()
      if (!r || !r.dialog || !r.dialog.showSaveDialog) return Promise.resolve(null)
      return new Promise(function (resolve) {
        try {
          if (v6())
            r.dialog.showSaveDialog(win(), options).then(function (result) { resolve(result.canceled ? null : result.filePath) }).catch(function () { resolve(null) })
          else
            r.dialog.showSaveDialog(win(), options, function (path) { resolve(path || null) })
        }
        catch (e) { resolve(null) }
      })
    },
    message: function (options) {
      var r = remote()
      if (!r || !r.dialog) return Promise.resolve(0)
      try { return Promise.resolve(r.dialog.showMessageBoxSync(win(), options)) }
      catch (e) { return Promise.resolve(0) }
    }
  }

  var shell = {
    openExternal: function (url) { var r = remote(); if (r && r.shell) r.shell.openExternal(url); return Promise.resolve() }
  }

  var screen = {
    list: function () { var r = remote(); return Promise.resolve((r && r.screen && r.screen.getAllDisplays) ? r.screen.getAllDisplays() : []) },
    primary: function () { var r = remote(); return Promise.resolve((r && r.screen && r.screen.getPrimaryDisplay) ? r.screen.getPrimaryDisplay() : null) }
  }

  var protocol = {
    isRegistered: function (scheme) { var r = remote(); return Promise.resolve(!!(r && r.app && r.app.isDefaultProtocolClient && r.app.isDefaultProtocolClient(scheme))) },
    register: function (scheme) { var r = remote(); if (r && r.app && r.app.setAsDefaultProtocolClient) r.app.setAsDefaultProtocolClient(scheme); return Promise.resolve() }
  }

  var hash = {
    sha256: function (data) {
      var r = remote()
      if (r) {
        var h = r.getGlobal("HASH_SHA256")
        if (h && h.hash) return Promise.resolve(h.hash(data))
      }
      try {
        var crypto = req("crypto")
        var h2 = crypto.createHash("sha256")
        h2.update(data)
        return Promise.resolve(h2.digest("hex"))
      }
      catch (e) { return Promise.reject(e) }
    }
  }

  var image = {
    size: function (path) {
      var r = remote()
      if (r) {
        var f = r.getGlobal("GetImageSize")
        if (f) return Promise.resolve(f(path))
      }
      return Promise.reject(new Error("image.size requires Electron"))
    }
  }

  function webSocket() { return (typeof System !== "undefined" && System._browser && System._browser.WebSocket) || null }

  var net = {
    wsServer: function (port, onMessage) {
      var W = webSocket()
      if (!W || !W.init_server) return Promise.reject(new Error("net.wsServer requires the WebSocket shim"))
      return Promise.resolve(W.init_server(port)).then(function () {
        if (onMessage)
          window.addEventListener("SA_WebSocket_server_on_message", function (e) { onMessage(e.detail.message) })
        return true
      })
    },
    wsClient: function (url, onMessage) {
      var W = webSocket()
      if (!W || !W.init_client) return Promise.reject(new Error("net.wsClient requires the WebSocket shim"))
      return W.init_client(url)
    },
    wsSend: function (url, message) {
      var W = webSocket()
      if (!W || !W.send_message) return Promise.reject(new Error("net.wsSend requires the WebSocket shim"))
      return Promise.resolve(W.send_message(url, message))
    },
    oscSend: function (host, port, bundle) {
      var O = (typeof System !== "undefined" && System._browser && System._browser.OSC) || (typeof MMD_SA !== "undefined" && MMD_SA.OSC) || null
      if (!O || !O.VMC) return Promise.reject(new Error("net.oscSend requires the OSC/VMC client"))
      O.VMC.send(bundle)
      return Promise.resolve()
    }
  }

  SA_bridge.install({
    fs: fs,
    exec: exec,
    env: env,
    window: window_bridge,
    hotkey: hotkey,
    dialog: dialog,
    shell: shell,
    screen: screen,
    protocol: protocol,
    hash: hash,
    image: image,
    net: net
  }, "node/electron")

  if (typeof console !== "undefined" && console.log)
    console.log("[SA_bridge] adapter installed: " + SA_bridge.name + " | missing=" + JSON.stringify(Object.keys(SA_bridge.missing())))
})()
