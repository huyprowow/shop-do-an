var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AccountSchema = new Schema({
  userID: { type: String, required: true },
  password: { type: String, required: true },
},{collection:'account'});

AccountSchema.virtual("url").get(function () {
  return "/api/account/" + this._id;
});

module.exports = mongoose.model("Account", AccountSchema,'account');
