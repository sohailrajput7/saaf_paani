const catchAsync = require('../utils/catchAsync')
const APIError = require('../utils/APIError')
const Conversation = require('../models/Conversation')
const ConversationReply = require('../models/ConversationReply')

exports.getAllConversationsOfUser = catchAsync(async (req,res,next)=>{
    const conversations = await Conversation.find({
        $or:[
            {userOneId:req.user._id},
            {userTwoId:req.user._id}
        ]

    }).populate('userOneId').populate('userTwoId')

    res.status(200).json({
        status:"success",
        data:conversations
    })
})

exports.createConversation = catchAsync(async(req,res,next)=>{

    const checkConversation = await Conversation.findOne({
        $and:[
            {
                $or:[
                    {userOneId:req.user._id},
                    {userTwoId:req.user._id}
                ]
            },
            {
                $or:[
                    {userOneId:req.body.userTwoId},
                    {userTwoId:req.body.userTwoId}
                ]
            }
        ]
    })


    if(checkConversation) return next( new APIError("Conversation Already Exists Between These Users",400));

    const conversation = await Conversation.create({
        userOneId:req.user._id,
        userTwoId:req.body.userTwoId
    })

    res.status(200).json({
        status:"success",
        data:conversation
    })
})

exports.getRepliesOfConversation = catchAsync(async (req,res,next)=>{
    const {conversationId} = req.query;

    const conversation = await Conversation.findById(conversationId);

    if(!conversation) return next(new APIError("No Conversation exists with this id",400));

    const conversationReplies = await ConversationReply.find({
        conversationId,
    }).populate('userId')

    res.status(200).json({
        status:"success",
        data:conversationReplies
    })

})