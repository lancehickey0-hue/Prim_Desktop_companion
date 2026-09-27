const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 420,
    height: 720,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadFile(path.join(__dirname, "../renderer/index.html"));
}

ipcMain.on("set-ignore-mouse", (_, value) => {
  win.setIgnoreMouseEvents(value, { forward: true });
});

app.whenReady().then(createWindow);
