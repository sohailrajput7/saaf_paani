const types = require('./types')
const Conversation = require('../models/Conversation')
const ConversationReply = require('../models/ConversationReply')


function messagingSockets(io,socket,usersConnected){
    socket.on(types.PRIVATE_MESSAGE,async ({senderId,receiverId,content})=>{
        let conversation = await Conversation.findOne({
            $or:[
                {userOneId:receiverId},
                {userTwoId:senderId}
                ]
        })

        if(!conversation){
            conversation = await Conversation.create({userOneId:senderId,userTwoId:receiverId})
        }
        const reply = await ConversationReply.create({conversationId:conversation._id,content})
    })
}

module.exports = messagingSockets;
