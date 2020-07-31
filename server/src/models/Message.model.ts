import {model, Schema} from "mongoose";
import {IMessageDocument, IMessageModel, IUserDocument} from "../types/interfaces";
import ConversationModel from "./Conversation.model";

const MessageSchema = new Schema({
    text: {type: String, nullable: false},
    sender: {type: Schema.Types.ObjectId, ref: 'User'},
    recipient: {type: Schema.Types.ObjectId, ref: 'User'},
    sentAt: String,
    receivedAt: String,
    seenAt: String
});

MessageSchema.methods.saveOnParticipants = async function () : Promise<any> {
    const message = this;

    return Promise.all([
        saveOnParticipant(this.sender, this.recipient),
        saveOnParticipant(this.recipient, this.sender),
    ])

    async function saveOnParticipant(sender: IUserDocument, recipient: IUserDocument) {
        const conversation = await ConversationModel.getOrCreate(sender, recipient);
        conversation.messages.push(message);
        return conversation.save();
    }

}


const MessageModel: IMessageModel = model<IMessageDocument, IMessageModel>("Message", MessageSchema, "messages");
export default MessageModel;