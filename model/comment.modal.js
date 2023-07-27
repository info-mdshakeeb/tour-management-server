const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment