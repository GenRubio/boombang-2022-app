const Utils = require('./Utils');
const Shop = require('./Shop');
const Chat = require('./Chat');
const Game = {
    pageEl:{
        selector: "#game-page"
    },
    init(){
        if (!Utils.checkSection(this.pageEl.selector)) return false;
        this.setListeners();
        this.setPanelsListeners();
    },
    setPanelsListeners(){
        Shop.init();
    },
    setComponentsGame(){
        Chat.init();
    },
    setListeners(){
        const $this = this;
        socket.on('user-login-' + window.user_id, (parameters) => {
            window.uid = parameters[0];
            this.setComponentsGame();
            $this.setListenersSockets();
        });
    },
    setListenersSockets(){
        socket.on('user-within-area-' + window.uid, (parameters) => {
            Shop.showShopButtonHandler();
            Chat.showChatInputHandler();
        });
        socket.on('user-entering-area-' + window.uid, (parameters) => {
            //alert("Usuario entrando a area");
        });
        socket.on('user-leaving-area-' + window.uid, (parameters) => {
            Shop.removeShopButtonHandler();
            Chat.removeChatInputHandler();
        });
        socket.on('user-in-flowepower-' + window.uid, (parameters) => {
            //alert("Usuario en flowepower");
        });
    }
};

module.exports = Game;