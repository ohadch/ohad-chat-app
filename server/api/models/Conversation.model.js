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

conversationSchema.statics.getOrCreate = async function(user, contact) {
    const conversation = await this.findOne({
        user: user._id.toObjectId(),
        contact: contact._id.toObjectId(),
    }).populate("user", "contact").exec();

    if (conversation) {
        return conversation;
    }

    const newConversation = new this({
        user,
        contact,
        messages: []
    })

    await newConversation.save();

    return newConversation;
}

module.exports = mongoose.model("Conversation", conversationSchema, "conversations")