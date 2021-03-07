const mongoose = require('mongoose')

const conversationReplySchema = new mongoose.Schema({
    conversationId:{
        type:mongoose.Types.ObjectId,
        ref:"Conversation"
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
    content:{
        type:String,
        required:[true,"The message content is required"]
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})

const ConversationReply = mongoose.model("ConversationReply",conversationReplySchema)

module.exports = ConversationReply