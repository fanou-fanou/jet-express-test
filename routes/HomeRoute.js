const express = require('express')
const {home} = require('../controllers/HomeController')

const router = express.Router()

router.get('/' , home)

module.exports = router