const User = require('../models/User')
const catchAsync = require('../utils/catchAsync')



exports.getAllUsersForConversation = catchAsync(async (req,res,next)=>{
    let filter = {}
    const {search} = req.query;

    if(search){
        filter = {
            $or:[
                {firstName:{
                    $regex:new RegExp(`${search}`,'i')
                    }},
                {lastName:{
                    $regex:new RegExp(`${search}`,'i')
                }}
            ]
        }
    }

    const users = await User.find(filter);

    res.status(200).json({
        status:"success",
        data:users
    })
})