const mongoose = require('mongoose')


const conversationSchema = new mongoose.Schema({
    userOneId:{
        type:mongoose.Types.ObjectId,
        required:[true,"The user one id is required"],
        ref:"User"
    },
    userTwoId:{
        type:mongoose.Types.ObjectId,
        required:[true,"The user two id is required"],
        ref:"User"
    },
})

const Contact = mongoose.model('Conversation',conversationSchema)

module.exports = Contact;