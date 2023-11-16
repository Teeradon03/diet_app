
const express = require('express')
const router = express.Router()

const formController = require('../controllers/formController')

router.get('/api/get', formController.list)
router.post('/api/write', formController.write)


module.exports = router