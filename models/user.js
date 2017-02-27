'use strict'
const crypto = require('crypto')

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function (value, next) {
          User.find({
            where: {
              email: value
            }, attributes: ['id']
          }).done(function (user) {
            if (user) {
              return next(`Email address already in use`)
            }
            next()
          })
        }
      }
    },
    password_hash: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    },
    hooks: {
      beforeCreate: function (value, option) {
        let unique = 'abcdefghijklmnopqrsstuvwxyz0123456789'
        let salt = ''

        for (let i = 0; i < unique.length; i++) {
          salt += unique[Math.floor(Math.random() * unique.length)]
        }

        value.salt = salt

        const hash = crypto.createHmac('sha512', salt)
                           .update(value.password_hash)
                           .digest('hex')

        value.password_hash = hash
      }
    }
  })
  return User
}
