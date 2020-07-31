import {model, Schema, Types} from "mongoose";
import {IMessageDocument, IMessageModel} from "../types/interfaces";
import ConversationModel from "./Conversation.model";

const MessageSchema = new Schema({
    text: {type: String, nullable: false},
    sender: {type: Schema.Types.ObjectId, ref: 'User'},
    recipient: {type: Schema.Types.ObjectId, ref: 'User'},
    sentAt: String,
    receivedAt: String,
    seenAt: String
});


MessageSchema.methods.saveOnParticipant = async function (senderId: Types.ObjectId, recipientId: Types.ObjectId) : Promise<any> {
    const conversation = await ConversationModel.getOrCreate(senderId, recipientId);
    conversation.messages.push(this._id);
    return conversation.save();
}

MessageSchema.methods.saveOnParticipants = async function () : Promise<any> {
    return Promise.all([
        this.saveOnParticipant(this.sender._id, this.recipient._id),
        this.saveOnParticipant(this.recipient._id, this.sender._id),
    ])

}


const MessageModel: IMessageModel = model<IMessageDocument, IMessageModel>("Message", MessageSchema, "messages");
export default MessageModel;