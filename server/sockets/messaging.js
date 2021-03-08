const types = require('./types')
const ConversationReply = require('../models/ConversationReply')


function messagingSockets(io,socket){
    socket.on(types.CHAT_CONNECT,async ({userId})=>{
        socket.join(userId)
        socket.emit(types.CHAT_CONNECT);
    })

    socket.on(types.PRIVATE_MESSAGE,async ({senderId,receiverId,senderProfilePicture,conversationId,content})=>{
        io.to(receiverId).emit('private-message',{
            senderId,
            senderProfilePicture,
            receiverId,
            content
        })

        const reply = ConversationReply.create({
            userId:senderId,
            conversationId,
            content
        })
    })
}

module.exports = messagingSockets;
