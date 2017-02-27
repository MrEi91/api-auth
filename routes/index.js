'use strict'

var express = require('express')
var router = express.Router()
let models = require('../models')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/sign-in', function (req, res) {
  models.User.find({
    where: {
      email: req.body.email
    }
  }).then(function (user) {
    if (user) {
      const hash = crypto.createHmac('sha512', user.salt)
                         .update(req.body.password)
                         .digest('hex')

      if (hash == user.password_hash) {
        let token = jwt.sign({username: user.username, email: user.email, role: user.role}, 'test')
        res.send(token)
      } else {
        res.send('Soryy bos, password lo salah')
      }
    } else {
      res.send('Soryy bos, username not found')
    }
  })
})

module.exports = router
