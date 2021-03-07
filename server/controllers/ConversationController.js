const catchAsync = require('../utils/catchAsync')
const Conversation = require('../models/Conversation')

exports.getAllConversationsOfUser = catchAsync(async (req,res,next)=>{
    const conversations = await Conversation.find({
        $or:[
            {userOneId:req.user._id},
            {userTwoId:req.user._id}
        ]

    })

    res.status(200).json({
        status:"success",
        data:conversations
    })
})