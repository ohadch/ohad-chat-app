import {model, Schema, Types} from "mongoose";
import {IConversationDocument, IConversationModel, IUserDocument} from "../types/interfaces";

const ConversationSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    contact: {type: Schema.Types.ObjectId, ref: 'User'},
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

ConversationSchema.statics.getOrCreate = async function (user: IUserDocument, contact: IUserDocument) : Promise<IConversationDocument> {
    const _this = this;

    const conversation = await getConversation()

    if (conversation) {
        return conversation;
    }

    await new this({
        user,
        contact,
        messages: []
    }).save();

    const savedConversation = await getConversation()
    return savedConversation._doc;

    function getConversation() {
        return _this.findOne({
            user: Types.ObjectId(user._id),
            contact: Types.ObjectId(contact._id),
        }).populate([
            {path: "user", model: "User"},
            {path: "contact", model: "User"},
        ]).exec();
    }
}

const ConversationModel: IConversationModel = model<IConversationDocument, IConversationModel>("Conversation", ConversationSchema, "conversations");
export default ConversationModel;