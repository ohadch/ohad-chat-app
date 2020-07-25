const express = require("express");

const api = express()

api.use("/user", require("./routes/user"));

module.exports = api;