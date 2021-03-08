const express = require('express');
const {authJWT} = require('../middlewares/auth')
const {getAllConversationsOfUser,createConversation,getRepliesOfConversation} = require('../controllers/ConversationController')

const conversationRouter = express.Router()


conversationRouter.route('/').get(authJWT,getAllConversationsOfUser).post(authJWT,createConversation)
conversationRouter.route('/replies/').get(authJWT,getRepliesOfConversation)


module.exports = conversationRouter