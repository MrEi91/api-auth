'use strict'
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (!req.headers.token) {
    res.send('Login dulu bos')
  } else {
    jwt.verify(req.headers.token, 'test', function (err, decoded) {
      if (err) {
        res.send(err)
      } else {
        next()
      }
    })
  }
}
