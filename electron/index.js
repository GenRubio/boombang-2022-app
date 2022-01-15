const {
    app,
    BrowserWindow,
    globalShortcut,
    session,
} = require("electron");
const path = require("path");
const run = "dev";
let mainWindow;
var iconpath = path.join(__dirname, "icon.ico");
var pjson = require(__dirname + "/package.json");
let pluginName;

if (require("electron-squirrel-startup")) {
    app.quit();
}

switch (process.platform) {
    case "win32":
        pluginName = "flash/pepflashplayer.dll";
        break;
    case "darwin":
        pluginName = "flash/PepperFlashPlayer.plugin";
        break;
    case "linux":
        pluginName = "flash/libpepflashplayer.so";
        break;
}
app.commandLine.appendSwitch(
    "ppapi-flash-path",
    path.join(__dirname, pluginName)
);

const createWindow = () => {
    mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1019,
        height: 687,
        icon: iconpath,
        title: "Play",
        webPreferences: {
            plugins: true,
            nodeIntegration: true,
            enableRemoteModule: true
        },
        show: false,
        frame: true,
        backgroundColor: pjson.backgroundColor,
        resizable: true,
    });

    if (run == "dev"){
        mainWindow.webContents.session.clearStorageData();
    }
    mainWindow.loadURL("http://127.0.0.1:8000");
    //mainWindow.setMenu(null);
    mainWindow.show();

    mainWindow.webContents.on("did-finish-load", () => {});
    
    mainWindow.webContents.on("new-window", function (e, url) {
        e.preventDefault();
        require('electron').shell.openExternal(url);
    });

    mainWindow.on("closed", (event) => {
        mainWindow = null;
    });

    globalShortcut.register("f5", function () {
        mainWindow.reload();
    });
    globalShortcut.register("f6", function () {
        mainWindow.reload();
    });
    globalShortcut.register("f2", function () {
        session.defaultSession.clearCache();
    });

    globalShortcut.register("f3", function () {
        mainWindow.webContents.openDevTools();
    });
};
app.on("ready", () => {
    createWindow();
});
