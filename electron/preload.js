const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("desktopAPI", {
  setIgnoreMouse: (val) => ipcRenderer.send("set-ignore-mouse", val)
});
