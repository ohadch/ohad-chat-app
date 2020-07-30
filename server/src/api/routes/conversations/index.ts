const express = require("express")
const controller = require("./conversations.controller");
const router = express.Router();

router.route("/")
    .get(controller.getConversations)
    .post(controller.createConversation)

module.exports = router;