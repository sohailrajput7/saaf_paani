const Joi = require('joi');
const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Types.ObjectId,
    ref:"User",
  },
  cnic:{
    type:String,
    minLength:[13,"CNIC must be 13 characters long"],
    maxLength:[13,"CNIC must be 13 characters long"]
  },
  verified: {
    type:Boolean,
    default:false,
  }
});


const Supplier = mongoose.model('Supplier', supplierSchema);


module.exports = Supplier

// function validateSupplier(supplier) {
//   const schema = {
//     firstName: Joi.string().min(5).max(50).required(),
//     lastName: Joi.string().min(5).max(50).required(),
//     email: Joi.string().min(5).max(255).required().email(),
//     password: Joi.string().min(5).max(1024).required(),
//     phoneNo: Joi.Number().min(11).max(13).required(),
//     age: Joi.Number().min(2).max(2).required(),
//     address: Joi.string().min(10).max(255).required(),
//   };
//
//   return Joi.validate(supplier, schema);
// }
// exports.validate = validateSupplier;