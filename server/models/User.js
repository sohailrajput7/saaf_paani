const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Roles = require('../constants/Roles')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required"],
        match:[ /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email is not valid"]
    },
    firstName:{
        type:String,
        required:[true,"First Name is required"],
    },
    lastName:{
        type:String,
        required:[true,"Last Name is required"],
    },
    profilePicture:{
        type:String,
        default:`${process.env.BASE_URL}/profilePictures/default-avatar.jpg`
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    address:{
        type:String,
        required:[true,"Address is required"],
    },
    phoneNo:{
        type:String,
        required:[true,"Phone Number is required"]
    },
    age: {
        type: Number,
        required: true,
        min: [18,"Age must be at least 18"],
        max: [60,"Age can not be greater than 60"]
    },
    role:{
        type:String,
        enum:[Roles.User,Roles.Admin]
    },
})

userSchema.methods.getHashPassword = async function(password){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(this.password,salt)
}

userSchema.methods.getJWTToken =function(){
    return jwt.sign({
        id:this._id
    },process.env.JWT_SECRET_KEY)
}

userSchema.methods.comparePassword = async function(inputPassword){
    return await bcrypt.compare(inputPassword,this.password)
}

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await this.getHashPassword(this.password);
    }

    next()
})




const User = mongoose.model("User",userSchema);


module.exports = User;