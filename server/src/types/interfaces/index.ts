import {Socket} from "socket.io";

export interface ISocketHandlerService {
    socket: Socket
}

export * from "./models"
export * from "./payloads"