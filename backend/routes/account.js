var express = require('express');
var router = express.Router();
const accountController=require('../controllers/accountController');

/* GET users listing. */
router.get('/',accountController.get_account_list);

module.exports = router;
