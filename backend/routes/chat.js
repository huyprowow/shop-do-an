var express = require('express');
var router = express.Router();
const chatController = require('../controllers/chatController');
const { protecting } = require('../middlewares/auth');

/* GET users listing. */
router.get("/",chatController.get_chat);
router.post("/",chatController.create_chat);
module.exports = router;