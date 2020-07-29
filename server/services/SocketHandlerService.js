const { io } = require("../config");

class SocketHandlerService {
    constructor(socket) {
        this.socket = socket
    }

    handle() {
        const { socket } = this;

        socket.on('message', (messageJson) => {
            console.log("Message Event")
            const message = JSON.parse(messageJson);
            io.emit('chat_message', JSON.stringify({
                text: message.text,
                sender: message.user,
                recipient: message.contact,
                sentAt: new Date().toISOString()
            }));
        });

        socket.on('disconnect', () => {
            io.emit('chat message', "----- Somebody just left the chat");
        });
    }
}


module.exports = SocketHandlerService;