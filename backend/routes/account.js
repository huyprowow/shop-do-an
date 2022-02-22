var express = require('express');
var router = express.Router();
const accountController=require('../controllers/accountController');

/* GET users listing. */
router.get('/',accountController.get_account_list);
router.post("/signin",accountController.signin_account);
router.post("/signup",accountController.create_account);
module.exports = router;
