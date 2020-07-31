export enum SocketInputEvent {
    Message = "message",
    UserConnectionStatusChanged = "user_connection_status_changed",
    Disconnect = "disconnect"
}

export enum UserConnectionStatus {
    Online = "ONLINE",
    Offline = "OFFLINE"
}

export enum SocketOutputEvent {
    UserConnectionStatusChanged = "user_connection_status_changed"
}