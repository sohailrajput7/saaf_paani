const User = require('../models/User')
const APIError = require('../utils/APIError')
const catchAsync = require('../utils/catchAsync')


exports.registerUser = catchAsync(async (req,res,next)=>{
    const {firstName,lastName,email,password,address} = req.body;

    const isUserExists = await User.findOne({email});

    if(isUserExists) return next(new APIError(400,"The user with same email already exists"))

    const user = await User.create({
        firstName,lastName,email,password,address
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

    if (!user) return next(new APIError(400,"User does not exists"))

    if(!await user.comparePassword(password)) return next(new APIError(400,"Invalid Credentials"))

    res.status(200).json({
        status:"success",
        token:user.getJWTToken()
    })
})