const express = require('express');
const router = express.Router();

//// Controller
const { loginLine, getUserData } = require('../controllers/userController');


router.post('/user-login', loginLine)
router.get('/get-users', getUserData )

module.exports = router