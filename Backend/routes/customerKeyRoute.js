
const express = require('express')
const router = express.Router()

const customerKeyController = require('../controllers/customerKeyController')

router.post('/api/cusKey', customerKeyController.key)


module.exports = router