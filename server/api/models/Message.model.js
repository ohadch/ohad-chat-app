const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {type: String, nullable: false},
    sentAt: String,
    receivedAt: String,
    seenAt: String
});

module.exports = mongoose.model("Message", messageSchema)