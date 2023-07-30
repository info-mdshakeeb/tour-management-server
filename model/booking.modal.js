const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userName: { type: String, required: true, },
    userEmail: { type: String, required: true, },
    userId: { type: String, required: true, },
    tourId: { type: String, required: true, },
    name: { type: String, required: true, },
    phone: { type: String, required: true, },
    date: { type: Date, required: true, },
    person: { type: Number, required: true, },
}, {
    timestamps: true
});

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
