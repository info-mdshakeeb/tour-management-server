const Comment = require("../model/comment.modal")

module.exports.createComment = async (payload) => {
    const data = await Comment.create(payload)
    if (!data) {
        throw new Error("comment is not created")
    }
    return data
}
module.exports.getComments = async () => await Comment.find({})