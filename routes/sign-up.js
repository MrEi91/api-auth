var express = require('express')
var router = express.Router()
const controllers = require('../controllers/user')

// /* GET home page. */
router.get('/new', function (req, res, next) {
  res.render('sign-up', { title: 'Express'})
})

router.post('/user', controllers.signUp)

module.exports = router
