"use strict";
const { app, BrowserWindow, shell } = require("electron");
const path = require("node:path");

const prefs = { nodeIntegration: false, contextIsolation: true, sandbox: true };
function external(url) {
  try {
    const protocol = new URL(url).protocol;
    if (protocol === "https:" || protocol === "http:") {
      void shell.openExternal(url);
      return true;
    }
  } catch {}
  return false;
}
app.on("web-contents-created", (_e, contents) => {
  contents.setWindowOpenHandler(({url}) => {
    external(url);
    return {action:"deny"};
  });
});
function openNorthstar() {
  const win = new BrowserWindow({
    title:"Northstar", width:1400,height:900,minWidth:700,minHeight:560,
    backgroundColor:"#ffffff",autoHideMenuBar:true,
    webPreferences:prefs
  });
  win.webContents.on("will-navigate", (event,url) => {
    const current=win.webContents.getURL().split("#")[0];
    if(url.split("#")[0]!==current) {event.preventDefault(); external(url);}
  });
  win.loadFile(path.join(__dirname,"index.html"));
}
app.whenReady().then(() => {
  openNorthstar();
  app.on("activate",()=>{if(BrowserWindow.getAllWindows().length===0)openNorthstar()});
});
app.on("window-all-closed",()=>{if(process.platform!=="darwin")app.quit()});
