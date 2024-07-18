const { app, BrowserWindow, Menu } = require("electron");
const isMac = process.platform === "darwin"

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: "YouTube Music",
        width: 1500,
        height: 900,
        webPreferences: {
            devTools: false
            },
        icon:__dirname + '/yt.ico'
    });

    mainWindow.loadURL("https://music.youtube.com/") //loads either the html index (with loadfile) or a website with loadURL
}

app.whenReady().then(() => {
    createMainWindow();
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);
    app.on("activate", ()=>{
        if(BrowserWindow.getAllWindows().length===0){
            createMainWindow();
        }
    })
});

//Menu template
const menu=[]

app.on("window-all-closed", ()=>{
    if(!isMac){
        app.quit()
    }
})