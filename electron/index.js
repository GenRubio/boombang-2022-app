const WindowController = require('./controllers/WindowController');
const { app } = require("electron");
const path = require("path");
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
app.on("ready", () => {
    //WindowController.init("Play", 1019, 687, false);
    WindowController.init("Play", 1100, 787, true);
});
