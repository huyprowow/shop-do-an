var express = require('express');
const food_controller = require('../controllers/foodController');
var router = express.Router();


/* GET home page. */
router.get('/', food_controller.get_food_list);

module.exports = router;
