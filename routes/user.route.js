const express = require('express')
const userController = require('../controller/user.controller')

const route = express.Router()

route.post('/create-user', userController.addUser)
route.get('/', userController.users)

module.exports = route