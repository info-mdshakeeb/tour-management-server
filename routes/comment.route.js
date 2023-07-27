const express = require('express')
const commentController = require('../controller/comment.controller')
const route = express.Router()


route.post('/add-comment', commentController.postComment)

module.exports = route