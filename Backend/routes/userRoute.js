const express = require('express');
const router = express.Router();

//// Controller
const { loginLine, getUserData, updateUser } = require('../controllers/userController');

/// middleware
const {isLoggedIn}  = require('../middleware/isLoggedIn')





router.post('/user-login', loginLine)
router.get('/get-users', isLoggedIn , getUserData)

// router.post('/user-update', updateUser)
module.exports = router