module.exports.mongoose = require("./mongoose.config");
module.exports.PORT = 8000;

const { app, http, io } = require("./app.config")

String.prototype.toObjectId = function() {
  if (typeof this === "string") return this;
  const ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
}

module.exports.app = app;
module.exports.http = http;
module.exports.io = io;
