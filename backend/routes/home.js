var express = require('express');
const food_controller = require('../controllers/foodController');
var router = express.Router();


/* GET home page. */
router.get('/', food_controller.food_list);

module.exports = router;
