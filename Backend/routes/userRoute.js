const express = require('express');
const router = express.Router();

//// Controller
const { loginLine, getUserData, updateUser } = require('../controllers/userController');


router.post('/user-login', loginLine)
// router.post('/user-update', updateUser)
router.get('/get-users', getUserData )

module.exports = router