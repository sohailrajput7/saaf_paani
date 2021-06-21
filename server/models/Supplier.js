const Joi = require("joi");
const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  cnic: {
    type: String,
    required: [true, "CNIC picture is required"],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  inventory: [
    {
      itemId: {
        type: mongoose.Types.ObjectId,
        ref: "InventoryItem",
      },
      price: Number,
      quantity: Number,
      salePrice: Number,
    },
  ],
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
