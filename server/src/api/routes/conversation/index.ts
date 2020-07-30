import * as express from "express";

import {createConversation, getConversations} from "./conversations.controller";

const router = express.Router();

router.route("/")
    .get(getConversations)
    .post(createConversation)

export default router;