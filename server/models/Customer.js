const mongoose = require("mongoose")
const Roles = require('../constants/Roles')

const customerSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
})

const Customer = mongoose.model("Customer",customerSchema);


module.exports = Customer;