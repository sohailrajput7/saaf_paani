const express = require('express');
const {authJWT} = require('../middlewares/auth')
const {getAllConversationsOfUser} = require('../controllers/ConversationController')

const conversationRouter = express.Router()


conversationRouter.route('/').get(authJWT,getAllConversationsOfUser)


module.exports = conversationRouter