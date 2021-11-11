const Food = require("../models/food");
// const async = require('async');

exports.food_list = (req, res, next) => {
  Food.find({})
  .exec((err, foods) => {
    if (err) return next(err);
    res.json(foods);
  });
};
