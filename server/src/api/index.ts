const express = require("express");
const User = require("./models/User.model");

const api = express()

api.use("/user", require("./routes/user"));

mountRestrictedRouter("/contacts", require("./routes/contacts"));
mountRestrictedRouter("/conversations", require("./routes/conversations"));

function mountRestrictedRouter(route, router) {
    api.use(route, async function (req, res, next) {
        const _id = req.get("token").toObjectId()
        const user = await User.findOne({ _id }).exec()
        req.user = user._doc;
        req.user._id = req.get("token")
        next()
    })
    api.use(route, router)
}

module.exports = api;