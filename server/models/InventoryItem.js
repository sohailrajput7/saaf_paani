const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  thumbnail: {
    type: String,
    required: [true, "Thumbnail is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
});

const InventoryItem = mongoose.model("InventoryItem", inventorySchema);

module.exports = InventoryItem;
