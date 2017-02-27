'use strict'

var express = require('express')
var router = express.Router()
const controllers = require('../controllers/user')

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/sign-in', controllers.logIn)

module.exports = router
