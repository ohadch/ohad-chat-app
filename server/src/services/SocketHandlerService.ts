import { Socket } from "socket.io";
import {ISocketHandlerService} from "../types/interfaces";
import {io} from "../config";


export default class SocketHandlerService implements ISocketHandlerService {
    socket: Socket

    public constructor(socket: Socket) {
        this.socket = socket
    }

    public handle() : void {
        this.socket.on('message', this.handleMessageSent);
        this.socket.on('disconnect', this.handleDisconnection);
    }

    public handleMessageSent(messageJson: string) : void {
        const message = JSON.parse(messageJson);

        io.emit('chat_message', JSON.stringify({
            text: message.text,
            sender: message.user,
            recipient: message.contact,
            sentAt: new Date().toISOString()
        }));
    }

    public handleDisconnection() : void {
        io.emit('chat message', "----- Somebody just left the chat");
    }
}