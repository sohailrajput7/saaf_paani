const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({

    Name:{
        type:String,
        required:[true,"Name is required"],
    },
    Price:{
        type:Number,
        required:[true,"Price is required"],
    },
    Picture:{
        type:String,
        default:`${process.env.BASE_URL}/profilePictures/default-avatar.jpg`
    },
    Quantity:{
        type:Number,
        required:[true,"Quantity is required"],
    }
})

const Inventory = mongoose.model("Inventory",inventorySchema);


module.exports = Inventory;