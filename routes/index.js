const express = require('express')

const { therapy } = require('../controllers')

const router = express.Router()

router.post('/therapy', therapy.postTherapy)

module.exports = router
