const commentServices = require("../services/comment.services");
const catchAsync = require("../utils/catchAsync");
const sandResponse = require("../utils/sandResponse");

module.exports.postComment = catchAsync(
    async (req, res) => {
        const data = await commentServices.createComment()
        sandResponse(res, {
            statusCode: 200,
            success: true,
            message: "successfully post comment",
            data: data
        })
    }
)