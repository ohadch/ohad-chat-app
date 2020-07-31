import {model, Schema, Types} from "mongoose";
import {IConversationDocument, IConversationModel, IUserDocument} from "../types/interfaces";
import UserModel from "./User.model";

const ConversationSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    contact: {type: Schema.Types.ObjectId, ref: 'User'},
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

ConversationSchema.statics.getOrCreate = async function (userId: Types.ObjectId, contactId: Types.ObjectId) : Promise<IConversationDocument> {
    const _this = this;

    const [user, contact] = await Promise.all([
        UserModel.findById(userId),
        UserModel.findById(contactId)
    ])

    const conversation = await getConversation()

    if (conversation) {
        return conversation;
    }
    console.log(`Creating a new conversation between ${user!.nickname!} and ${contact!.nickname!}`)
    await new this({
        user,
        contact,
        messages: []
    }).save();

    return getConversation()

    function getConversation() {
        return _this.findOne({
            user: Types.ObjectId(user!._id!),
            contact: Types.ObjectId(contact!._id!),
        }).populate([
            {path: "user", model: "User"},
            {path: "contact", model: "User"},
        ]).populate("messages").exec();
    }
}

const ConversationModel: IConversationModel = model<IConversationDocument, IConversationModel>("Conversation", ConversationSchema, "conversations");
export default ConversationModel;