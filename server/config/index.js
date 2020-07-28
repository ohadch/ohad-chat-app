module.exports.mongoose = require("./mongoose.config");
module.exports.PORT = 8000;

String.prototype.toObjectId = function() {
  if (typeof this === "string") return this;
  const ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
}

