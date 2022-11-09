const { app, BrowserWindow, ipcMain } = require("electron");

const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

function onModelChange(event, ignoreMouseEvents) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setIgnoreMouseEvents(ignoreMouseEvents);
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    transparent: true,
    frame: false,
    resizable: false,
    maximizable: false,
    // skipTaskbar: false,
    // backgroundColor: "rgba(0,0,0,0)",
    fullscreen: true,
    // acceptFirstMouse: true,
    // visualEffectState: "active",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDevelopment) {
    win.loadURL("http://localhost:3000");
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, "./build/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }
  // win.webContents.openDevTools();

  // const remote = require("electron").remote;
  // let win2 = remote.getCurrentWindow();
  // window.addEventListener("mousemove", (event) => {
  //   let flag = event.target === document.documentElement;
  //   if (flag) {
  //     win2.setIgnoreMouseEvents(true, { forward: true });
  //   } else {
  //     win2.setIgnoreMouseEvents(false);
  //   }
  // });
  // win2.setIgnoreMouseEvents(true, { forward: true });
};

app.whenReady().then(() => {
  ipcMain.on("set-model", onModelChange);
  createWindow();
});
