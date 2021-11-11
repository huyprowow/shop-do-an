var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var FoodSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
});

FoodSchema.virtual("url").get(function () {
  return "/api/food/" + this._id;
});
module.exports = mongoose.model("Food", FoodSchema);
