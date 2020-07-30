const {io} = require("../config");

class SocketHandlerService {
    constructor(socket) {
        this.socket = socket
    }

    handle() {
        this.socket.on('message', this.handleMessageSent);
        this.socket.on('disconnect', this.handleDisconnection);
    }

    handleMessageSent(messageJson) {
        const message = JSON.parse(messageJson);

        io.emit('chat_message', JSON.stringify({
            text: message.text,
            sender: message.user,
            recipient: message.contact,
            sentAt: new Date().toISOString()
        }));
    }

    handleDisconnection() {
        io.emit('chat message', "----- Somebody just left the chat");
    }
}


module.exports = SocketHandlerService;