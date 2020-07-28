const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {type: String, nullable: false},
    sentBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    sentAt: String,
    receivedAt: String,
    seenAt: String
});

module.exports = mongoose.model("Message", messageSchema, "messages")