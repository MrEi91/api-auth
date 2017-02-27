var express = require('express')
var router = express.Router()
let models = require('../models')

// /* GET home page. */
// router.get('/sign-up', function (req, res, next) {
//   res.render('sign-up', { title: 'Express'})
// })

router.post('/new', function (req, res) {
  models.User.create(req.body).then(function (users) {
    res.send(users)
  })
})

module.exports = router