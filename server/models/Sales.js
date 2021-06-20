const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  supplierId: {
    type: mongoose.Types.ObjectId,
    ref: "Supplier",
  },
  items: [
    {
      itemId: {
        type: mongoose.Types.ObjectId,
        ref: "InventoryItem",
      },
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  invoice: {
    type: String,
    required: [true, "Invoice is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;
