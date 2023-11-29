
const express = require('express')
const router = express.Router()

const formController = require('../controllers/formController')

router.post('/api/register', formController.list)



module.exports = router