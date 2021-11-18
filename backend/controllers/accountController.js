const Account = require("../models/account");

exports.get_account_list = (req, res, next) => {
  Account.find().exec((err, accounts) => {
    if (err) return next(err);
    res.json(accounts);
  });
};
