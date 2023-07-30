const { createBooking, getBookingsByUserId } = require("../services/booking.service");
const catchAsync = require("../utils/catchAsync");
const sandResponse = require("../utils/sandResponse");

const addBooking = catchAsync(
    async (req, res) => {
        const data = await createBooking({ ...req.body })
        sandResponse(res, {
            statusCode: 200,
            message: "create booking successfully",
            data: data
        })
    }
)
const bookingsByUserId = catchAsync(
    async (req, res) => {
        const { id } = req.params
        const data = await getBookingsByUserId(id)
        sandResponse(res, {
            statusCode: 200,
            message: "create booking successfully",
            data: data
        })

    }
)
module.exports = {
    addBooking,
    bookingsByUserId
}