const Account = require("../models/account");
const { body, validationResult } = require("express-validator");

exports.get_account_list = (req, res, next) => {
  Account.find().exec((err, accounts) => {
    if (err) return next(err);
    res.json(accounts);
  });
};
exports.create_account = [
  //sannitized data
  body("userID")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Username is required")
    .isAlphanumeric()
    .withMessage("Username must be alphanumeric"),
  body("password")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .isAlphanumeric()
    .withMessage("Password must be alphanumeric"),
  //create
  async (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    } else {
      const account = await new Account({
        userID: req.body.userID,
        password: req.body.password,
      });
      Account.find({ userID: req.body.userID }).exec((err, accounts) => {
        if (err) return next(err);
        if (accounts.length > 0) {
          res
            .status(409)
            .json({ errors: [{ msg: "Username already exists" }] });
        } else {
          try {
            const createdAccount = async () => {
              const result = await account.save();
              res.status(201).json({
                message: "Account created successfully",
                createdAccount: {
                  _id: result._id,
                  userID: result.userID,
                  password: result.password,
                },
              });
              console.log(account);
            };
            createdAccount();
          } catch (err) {
            console.log(err);
            next(err);
          }
        }
      });
    }
  },
];

exports.signin_account = [
  //sannitized data
  body("userID")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Username is required")
    .isAlphanumeric()
    .withMessage("Username must be alphanumeric"),
  body("password")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .isAlphanumeric()
    .withMessage("Password must be alphanumeric"),
  //sigin
  async (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    } else {
      const { userID, password } = req.body;
      Account.findOne({ userID: userID, password: password }).exec(
        (err, account) => {
          if (err) return next(err);
          if (account) {
            res.status(200).json({
              message: "Account signed in successfully",
              account: {
                _id: account._id,
                userID: account.userID,
                password: account.password,
              },
            });
          } else {
            res.status(401).json({
              errors: [{ msg: "Username or password is incorrect" }],
            });
          }
        }
      );
    }
  },
];
