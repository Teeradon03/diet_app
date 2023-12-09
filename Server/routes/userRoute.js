const express = require('express');
const router = express.Router();

//// Controller
const { loginLine } = require('../controllers/userController');


router.post('/login-line', loginLine)


module.exports = router