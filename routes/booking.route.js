
const express = require('express')
const { addBooking, bookingsByUserId } = require('../controller/booking.controller')
const route = express.Router()

route.post('/add-to-cart', addBooking)
route.get('/carts', bookingsByUserId)

module.exports = route