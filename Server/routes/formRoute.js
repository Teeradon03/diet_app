const express = require('express');
const router = express.Router();
/// controller
const { list, create } = require('../controllers/formController')

router.get('/list',list )
router.post('/create', create )


module.exports = router