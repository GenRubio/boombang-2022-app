const Login = require('./components/Login');
const Game = require('./components/Game');
const ViewHandler = {
    init(data) {
        this.outdatedBrowserRework = data.outdatedBrowserRework;

        document.addEventListener("DOMContentLoaded", () => {
            this.onDocumentReady();
        });
    },
    onDocumentReady() {
        Login.init();
        Game.init();
    },
};
module.exports = ViewHandler;
