const express = require('express');
const router = express.Router();

/// Controller
const { loginLine, getUserData, updateUserData, currentUser} = require('../controllers/userController');

/// middleware
const { isLoggedIn }  = require('../middleware/isLoggedIn')
// router.use(isLoggedIn)

router.post('/user-login',loginLine )
router.post('/update-user-data', isLoggedIn ,updateUserData )
router.get('/get-users' ,getUserData)

router.post('/current-user',isLoggedIn ,currentUser)

// router.post('/user-update', updateUser)  
module.exports = router