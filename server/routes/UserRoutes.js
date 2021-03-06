const express = require('express')
const {getAllUsersForConversation} = require('../controllers/UserController')

const userRouter = express.Router()


userRouter.route('/for-conversations').get(getAllUsersForConversation)


module.exports = userRouter;