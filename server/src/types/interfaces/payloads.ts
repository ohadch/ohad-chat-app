import {IUserDocument} from "./index";
import {UserConnectionStatus} from "../enums";
export interface IMessageInputPayload {
    text: string,
    senderId: string,
    recipientId: string,
}


export interface IMessageOutputPayload {
    text: string,
    sender: IUserDocument,
    recipient: IUserDocument,
    sentAt: string
}

export interface IUserConnectionStatusInputPayload {
    userId: string,
    connectionStatus: UserConnectionStatus
}

export interface IUserConnectionStatusOutputPayload {
    userId: string,
    isOnline: boolean,
    lastSeen: string
}
