const mongoose = require("mongoose")
const Roles = require('../constants/Roles')

const customerSchema = new mongoose.Schema({
    user:[{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }]
    // email:{
    //     type:String,
    //     required:[true,"Email is required"],
    //     match:[ /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email is not valid"]
    // },
    // firstName:{
    //     type:String,
    //     required:[true,"First Name is required"],
    // },
    // lastName:{
    //     type:String,
    //     required:[true,"Last Name is required"],
    // },
    // profilePicture:{
    //     type:String,
    //     default:`${process.env.BASE_URL}/profilePictures/default-avatar.jpg`
    // },
    // password:{
    //     type:String,
    //     required:[true,"Password is required"],
    // },
    // address:{
    //     type:String,
    //     required:[true,"Address is required"],
    // },
    // phoneNo:{
    //     type:String,
    //     required:[true,"Phone Number is required"]
    // },
    // role:{
    //     type:String,
    //     enum:[Roles.User,Roles.Admin]
    // }
})

const Customer = mongoose.model("Customer",customerSchema);


module.exports = Customer;