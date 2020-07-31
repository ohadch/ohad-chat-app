import { Socket } from "socket.io";
import {
    IMessageFromClientPayload,
    IMessageFromServerPayload,
    ISocketHandlerService, IUserDocument
} from "../types/interfaces";
import {io} from "../config";
import UserModel from "../models/User.model";
import {Types} from "mongoose";
import {SocketEvent} from "../types/enums";

export default class SocketHandlerService implements ISocketHandlerService {
    socket: Socket

    public constructor(socket: Socket) {
        this.socket = socket
    }

    public handle() : void {
        this.socket.on(SocketEvent.Message, this.handleMessageSent);
        this.socket.on(SocketEvent.Disconnection, this.handleDisconnection);
    }

    public async handleMessageSent(message: IMessageFromClientPayload) {
        const [sender, recipient] = await Promise.all([
            UserModel.findOne({ _id: Types.ObjectId(message.senderId) }),
            UserModel.findOne({ _id: Types.ObjectId(message.recipientId) }),
        ])

        if (!sender || !recipient) {
            throw new Error(`Either sender id ${sender?._id} or recipient ${recipient?._id} could not be found`)
        }

        const messageFromServer : IMessageFromServerPayload = {
            text: message.text,
            sender: sender._doc as IUserDocument,
            recipient: recipient._doc as IUserDocument,
            sentAt: new Date().toISOString()
        }

        io.emit('chat_message', messageFromServer);
    }

    public handleDisconnection() : void {
        io.emit('chat message', "----- Somebody just left the chat");
    }
}