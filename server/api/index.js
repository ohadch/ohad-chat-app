const express = require("express");

const api = express()

api.use("/user", require("./routes/user"));
api.use("/contacts", require("./routes/contacts"));

module.exports = api;