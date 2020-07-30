import mongoose, {Schema} from "mongoose";
import {IMessageDocument, IMessageModel} from "../types/interfaces";

const messageSchema = new Schema({
    text: {type: String, nullable: false},
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    recipient: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    sentAt: String,
    receivedAt: String,
    seenAt: String
});

const MessageModel: IMessageModel = mongoose.model<IMessageDocument, IMessageModel>("Message", messageSchema, "messages");
export default MessageModel;