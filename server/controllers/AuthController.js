const User = require('../models/User')
const APIError = require('../utils/APIError')
const catchAsync = require('../utils/catchAsync')


exports.registerUser = catchAsync(async (req,res,next)=>{
    const {firstName,lastName,email,password,address,phoneNo} = req.body;

    const isUserExists = await User.findOne({email});

    if(isUserExists) return next(new APIError("The user with same email already exists",400))

    const user = await User.create({
        firstName,lastName,email,password,address,phoneNo
    })

    res.status(200).json({
        status:"success",
        data:user
    })
})


exports.loginUser = catchAsync(async (req,res,next)=>{

    const {email,password} = req.body;

    const user = await User.findOne({
        email
    })

    if (!user) return next(new APIError("User does not exists",400))

    if(!await user.comparePassword(password)) return next(new APIError("Invalid Credentials",400))

    res.status(200).json({
        status:"success",
        token:user.getJWTToken()
    })
})


exports.getUserFromToken = catchAsync(async (req,res,next)=>{
    res.status(200).json({
        status:"success",
        data:req.user
    })
})