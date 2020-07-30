const express = require("express")
const controller = require("./contacts.controller");
const router = express.Router();

router.get("/", controller.getContacts)


module.exports = router;