export enum SocketInputEvent {
    Message = "message",
    UserConnectionStatusChanged = "user_connection_status_changed"
}

export enum UserConnectionStatus {
    Online = "ONLINE",
    Offline = "OFFLINE"
}

export enum SocketOutputEvent {
    UserConnectionStatus = "user_connection_status",
}