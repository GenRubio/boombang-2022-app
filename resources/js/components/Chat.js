
const Chat = {
    chatEl:{
        selector: ".chat-input-js"
    },
    init(){
        this.setListeners();
    },
    setListeners(){
        $(this.chatEl.selector).on('keyup', (e) => this.sendMessageHandler(e));
    },
    sendMessageHandler(e){
        if (e.keyCode === 13){
            e.preventDefault();
            let chatInput = $(this.chatEl.selector);
            this.sendDataMessage(chatInput.val())
            chatInput.val('');
        }
    },
    sendDataMessage(message){
        const data = {
            channel: "send-message",
            token_uid: window.uid,
            paramater: message,
        };
        socket.emit(data.channel, data);
    },
    showChatInputHandler(){
        $(this.chatEl.selector).removeClass('d-none');
    },
    removeChatInputHandler(){
        $(this.chatEl.selector).addClass('d-none');
    }
}
module.exports = Chat;