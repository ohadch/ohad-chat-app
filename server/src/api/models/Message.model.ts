const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {type: String, nullable: false},
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    recipient: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    sentAt: String,
    receivedAt: String,
    seenAt: String
});

module.exports = mongoose.model("Message", messageSchema, "messages")