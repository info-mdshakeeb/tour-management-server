const Booking = require("../model/booking.modal")

const createBooking = async (payload) => {
    const data = await Booking.create(payload)
    if (!data) {
        throw new Error('booking is not created')
    }
    return data
}
const getBookingsByUserId = async (id) => {
    const data = await Booking.find({ userId: id })
    return data
}
module.exports = {
    createBooking, getBookingsByUserId
}