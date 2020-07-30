import {Socket} from "socket.io";
import {Document, Model} from "mongoose";


export interface ISocketHandlerService {
    socket: Socket
}

export interface IUserDocument extends Document {
    firstName: string;
    lastName: string;
    email: string;
    nickname: string;
    status: string;
    lastSeen: string;
    isOnline: boolean;
}

export interface IUserModel extends Model<IUserDocument> {
    findByEmail(email: string): IUserDocument | null;
}

export interface IMessageDocument extends Document {
    text: string,
    sender: string,
    recipient: string,
    sentAt?: string,
    receivedAt?: string,
    seenAt?: string
}

export interface IMessageModel extends Model<IMessageDocument> {
}

export interface IConversationDocument extends Document {
    user: IUserDocument;
    contact: IUserDocument;
    messages: IMessageDocument[]
}

export interface IConversationModel extends Model<IConversationDocument> {
    getOrCreate(user: IUserDocument, contact: IUserDocument): Promise<IConversationDocument>;
}
