const express = require('express');
const router = express.Router();


const { login } = require('../controllers/login')


router.post('/line', login)

module.exports = router;