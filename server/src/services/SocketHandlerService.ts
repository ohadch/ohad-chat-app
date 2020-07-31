import {Socket} from "socket.io";
import {
    IMessageInputPayload,
    ISocketHandlerService,
    IUserConnectionStatusInputPayload,
    IUserConnectionStatusOutputPayload,
} from "../types/interfaces";
import {io} from "../config";
import UserModel from "../models/User.model";
import {SocketInputEvent, SocketOutputEvent, UserConnectionStatus} from "../types/enums";
import MessageModel from "../models/Message.model";

export default class SocketHandlerService implements ISocketHandlerService {
    socket: Socket

    public constructor(socket: Socket) {
        this.socket = socket
    }

    public handle(): void {
        this.socket.on(SocketInputEvent.Message, this.handleMessageSent.bind(this));
        this.socket.on(SocketInputEvent.UserConnectionStatusChanged, this.handleUserConnectionStatusChanged.bind(this));
        this.socket.on(SocketInputEvent.Disconnect, this.handleSocketDisconnected.bind(this));
    }

    public async handleMessageSent(inputMessage: IMessageInputPayload) {
        const [sender, recipient] = await Promise.all([
            UserModel.findById(inputMessage.senderId),
            UserModel.findById(inputMessage.recipientId),
        ])

        if (!sender || !recipient) {
            throw new Error(`Either sender id ${sender?._id} or recipient ${recipient?._id} could not be found`)
        }

        const message = new MessageModel({
            text: inputMessage.text,
            sender: sender._id,
            recipient: recipient._id,
            sentAt: new Date().toISOString()
        })

        console.log("Sending a message to participants")
        await message.save();
        await message.saveOnParticipants();

        io.emit(SocketOutputEvent.ChatMessage, message._doc);
    }

    public async handleUserConnectionStatusChanged(payload: IUserConnectionStatusInputPayload) {
        const user = await UserModel.findById(payload.userId)

        if (!user) {
            throw new Error(`User _id ${payload.userId} does not exist`)
        }

        switch (payload.connectionStatus) {
            case UserConnectionStatus.Online:
                user.isOnline = true
                user.activeSocketId = this.socket.id;
                break;
            case UserConnectionStatus.Offline:
                user.isOnline = false
                user.lastSeen = new Date().toISOString()
                user.activeSocketId = "";
                break;
            default:
                throw new Error(`Handler for connection status is not implemented: ${payload.connectionStatus}`);
        }

        await user.save()
        const outputPayload: IUserConnectionStatusOutputPayload = {
            userId: user._id,
            isOnline: user.isOnline,
            lastSeen: user.lastSeen
        }

        io.emit(SocketOutputEvent.UserConnectionStatusChanged, outputPayload);
    }

    private async handleSocketDisconnected() {
        const user = await UserModel.findBySocketId(this.socket.id);

        if (!user) {
            return
        }

        return this.handleUserConnectionStatusChanged({
            userId: user._id,
            connectionStatus: UserConnectionStatus.Offline
        })
    }
}