'use strict'
let models = require('../models')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

module.exports = {

  signUp: function (req, res) {
    models.User.create(req.body).then(function (users) {
      res.send(users)
    })
  },

  logIn: function (req, res) {
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
          let token = jwt.sign({username: user.username, email: user.email, role: user.role}, 'test', {})
          res.send(token)
        } else {
          res.send('Soryy bos, password lo salah')
        }
      } else {
        res.send('Soryy bos, username not found')
      }
    }).catch(function (err) {
      res.send(err)
    })
  },

  getUsers: function (req, res, next) {
    models.User.findAll().then(function (users) {
      res.send(users)
    }).catch(function (err) {
      res.send(err)
    })
  },

  getUser: function (req, res, next) {
    models.User.findById(req.params.id).then(function (user) {
      res.send(user)
    }).catch(function (err) {
      res.send(err)
    })
  },

  createUser: function (req, res, next) {
    models.User.create(req.body).then(function (user) {
      res.send(user)
    }).catch(function (err) {
      res.send(err)
    })
  },

  deleteUser: function (req, res, next) {
    models.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      res.send('User has been deleted')
    }).catch(function (err) {
      res.send(err)
    })
  },

  updateUser: function (req, res, next) {
    models.User.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      res.send('User has been deleted')
    }).catch(function (err) {
      res.send(err)
    })
  }
}
