import { Socket } from "socket.io";
import {ISocketHandlerService} from "../ts/interfaces";
const {io} = require("../config");


export default class SocketHandlerService implements ISocketHandlerService {
    socket: Socket

    public constructor(socket: Socket) {
        this.socket = socket
    }

    handle() {
        this.socket.on('message', this.handleMessageSent);
        this.socket.on('disconnect', this.handleDisconnection);
    }

    public handleMessageSent(messageJson) {
        const message = JSON.parse(messageJson);

        io.emit('chat_message', JSON.stringify({
            text: message.text,
            sender: message.user,
            recipient: message.contact,
            sentAt: new Date().toISOString()
        }));
    }

    public handleDisconnection() {
        io.emit('chat message', "----- Somebody just left the chat");
    }
}