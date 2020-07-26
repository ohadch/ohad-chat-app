const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    userA: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userB: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    messages: [{
        type: Schema.ObjectId,
        ref: 'Message'
    }]
});

module.exports = mongoose.model("Conversation", conversationSchema)