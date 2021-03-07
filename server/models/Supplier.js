const Joi = require('joi');
const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  phoneNo: {
    type: Number,
    required: true,
    minlength: 11,
    maxlength: 13
  },
  age: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 2
  },
  address: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255
  },
  varified: Boolean
});


const Supplier = mongoose.model('Supplier', supplierSchema);

function validateSupplier(supplier) {
  const schema = {
    firstName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
    phoneNo: Joi.Number().min(11).max(13).required(),
    age: Joi.Number().min(2).max(2).required(),
    address: Joi.string().min(10).max(255).required(),
  };

  return Joi.validate(supplier, schema);
}

exports.Supplier = Supplier; 
exports.validate = validateSupplier;