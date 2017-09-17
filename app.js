var electron = require('electron') // http://electron.atom.io/docs/api
var path = require('path')         // https://nodejs.org/api/path.html
var url = require('url')           // https://nodejs.org/api/url.html

var window = null

// Wait until the app is ready
electron.app.once('ready', function () {
  // Create a new window
  window = new electron.BrowserWindow({
    // Set the initial width to 400px
    width: 1000,
    // Set the initial height to 500px
    height: 800,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    // Don't allow the window to be resized.
    resizable: false,
    // hide title bar (added drag feature in body [may have to add another rule
    // -webkit-app-region: no-drag; (to the buttons)
    //  but it looks like it works without it for now])
    // also had to bring down the entire right hand down a couple of pixels
    //titleBarStyle: 'hidden-inset',
  })

  // window.webContents.openDevTools()

  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Show window when page is ready
  window.once('ready-to-show', function () {
    window.show()
  })
})
