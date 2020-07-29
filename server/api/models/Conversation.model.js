const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    contact: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    messages: [{
        type: Schema.ObjectId,
        ref: 'Message'
    }]
});

conversationSchema.statics.getOrCreate = async function (user, contact) {
    let _this = this;

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
            user: user._id.toObjectId(),
            contact: contact._id.toObjectId(),
        }).populate([
            {path: "user", model: "User"},
            {path: "contact", model: "User"},
        ]).exec();
    }
}

module.exports = mongoose.model("Conversation", conversationSchema, "conversations")