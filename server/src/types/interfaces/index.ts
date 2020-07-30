import {Socket} from "socket.io";
import {Document, Model} from "mongoose";
import * as express from "express";

export interface IAuthenticatedRequest extends express.Request {
    user: IUserDocument
}

export interface ISocketHandlerService {
    socket: Socket
}

export interface EnhancedDocuments extends Document {
    _doc: Document,
}

export interface IUserDocument extends EnhancedDocuments {
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

export interface IMessageDocument extends EnhancedDocuments {
    text: string,
    sender: string,
    recipient: string,
    sentAt?: string,
    receivedAt?: string,
    seenAt?: string
}

export interface IMessageModel extends Model<IMessageDocument> {
}

export interface IConversationDocument extends EnhancedDocuments {
    user: IUserDocument;
    contact: IUserDocument;
    messages: IMessageDocument[]
}

export interface IConversationModel extends Model<IConversationDocument> {
    getOrCreate(user: IUserDocument, contact: IUserDocument): Promise<IConversationDocument>;
}
