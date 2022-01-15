const Utils = require('./Utils')
const Game = {
    pageEl:{
        selector: "#game-page"
    },
    init(){
        if (!Utils.checkSection(this.pageEl.selector)) return false;
        this.setListeners();
    },
    setListeners(){
        const $this = this;
        socket.on('user-login-' + window.user_id, (parameters) => {
            window.uid = parameters[0];
            $this.setListenersSockets();
        });
    },
    setListenersSockets(){
        socket.on('user-within-area-' + window.uid, (parameters) => {
            alert("Usuario dentro de area");
        });
        socket.on('user-entering-area-' + window.uid, (parameters) => {
            alert("Usuario entrando a area");
        });
        socket.on('user-leaving-area-' + window.uid, (parameters) => {
            alert("Usuario saliendo de area");
        });
        socket.on('user-in-flowepower-' + window.uid, (parameters) => {
            alert("Usuario en flowepower");
        });
    }
};

module.exports = Game;