const express = require('express')
const Services = require('../controller/Services.controller')
const route = express.Router()

route.post('/create-one', Services.postServices)

module.exports = route