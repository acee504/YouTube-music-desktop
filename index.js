const isMac = process.platform === "darwin";
const electron = require("electron");
const { app, BrowserWindow, Menu } = electron;

function createMainWindow() {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  const mainWindow = new BrowserWindow({
    title: "YouTube Music",
    width,
    height,
    webPreferences: {
      devTools: false,
    },
    icon: __dirname + "/yt.ico",
  });
  mainWindow.maximize();
  mainWindow.loadURL("https://music.youtube.com/"); //loads either the html index (with loadfile) or a website with loadURL
}

app.whenReady().then(() => {
  createMainWindow();
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

//Menu template
const menu = [];

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
