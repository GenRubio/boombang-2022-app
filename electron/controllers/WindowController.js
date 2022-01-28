const { BrowserWindow, globalShortcut } = require("electron");
const config = require("../package.json");

const WindowController = {
    window: null,
    init(title, width, height, resizable){
        this.makeWindowHandler(title, width, height, resizable);
        this.clearSessionCache();
        this.loadContentWindow();
        this.setListeners();
        this.setWindowKeysListeners();
    },
    setWindowKeysListeners(){
        globalShortcut.register("f5", () => this.window.reload());
        globalShortcut.register("f3", () => this.window.webContents.openDevTools());
    },
    setListeners(){
        this.window.webContents.on("did-finish-load", () => {});
        this.window.webContents.on("new-window", (e, url) => {});
        this.window.on("closed", (event) => {
            this.window = null;
        });
    },
    loadContentWindow(){
        this.window.loadURL(config.url);
        this.window.show();
    },
    clearSessionCache(){
        if (config.appStatus == "dev"){
            this.window.webContents.session.clearStorageData();   
        }
    },
    makeWindowHandler(title, width, height, resizable){
        this.window = new BrowserWindow({
            autoHideMenuBar: true,
            width: width,
            height: height,
            title: title,
            webPreferences: {
                plugins: true,
                nodeIntegration: true,
                enableRemoteModule: true
            },
            show: false,
            frame: true,
            backgroundColor: config.backgroundColor,
            resizable: resizable,
        });
    }
}

module.exports = WindowController;