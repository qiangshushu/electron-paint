const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  setModel: (title) => ipcRenderer.send("set-model", title),
});
