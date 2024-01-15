const express = require('express');
const router = express.Router();

const { model } = require("mongoose");
const { User } = require("../models/user");
const axios = require("axios");
/// Controller
const { loginLine, getUserData, updateUserData } = require('../controllers/userController');

/// middleware
const {isLoggedIn}  = require('../middleware/isLoggedIn')
// router.use(isLoggedIn)

router.post('/user-login',loginLine )
router.post('/update-user-data', updateUserData )
router.get('/get-users', isLoggedIn ,getUserData)


// router.post('/user-update', updateUser)
module.exports = router