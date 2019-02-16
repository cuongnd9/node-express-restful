const express = require('express')
const controller = require('../controllers/cat.controller')

const router = express.Router()

router.get('/', controller.index)

router.post('/', controller.post)

router.get('/:catId', controller.getCat)

module.exports = router