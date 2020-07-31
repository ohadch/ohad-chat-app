import {IUserDocument} from "./index";
import {UserConnectionStatus} from "../enums";
export interface IMessageInputPayload {
    text: string,
    senderId: string,
    recipientId: string,
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
