var express = require('express')
var router = express.Router()
let controllers = require('../controllers/user')

/* GET users listing. */
router.get('/', controllers.getUsers)
router.get('/:id', controllers.getUser)
router.post('/create', controllers.createUser)
router.delete('/delete/:id', controllers.deleteUser)
router.put('/update/:id', controllers.updateUser)

module.exports = router
