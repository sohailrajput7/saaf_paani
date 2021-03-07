var InventoryModel = require('./../models/Inventory');
const catchAsync = require('../utils/catchAsync')
var AppError = require('./../utils/APIError');



exports.createOne = catchAsync(async (req,res,next) => {

    const data = req.body;
    data.Picture = `http://localhost:7000/uploads/${req.file.filename}`; 

        const doc = await InventoryModel.create(data); 
       
        res.status(200).json({
            status:'success',
            doc
        })
})

exports.UpdateOne = catchAsync(async (req,res,next) => {
    const doc = await InventoryModel.findByIdAndUpdate(req.query.id,req.body);

    if(!doc){
        return next(new AppError('Item does not exists', 400))
    }

    updatedDoc = await InventoryModel.findById(req.query.id);

    res.status(200).json({
        status:'success',
        updatedDoc
    })
    
})

exports.showAll = catchAsync(async (req,res,next) => {
    const page = req.query.page * 1 || 1;
    const limit = 10;
    const skip = (page - 1) * limit;
    const doc = await InventoryModel.find().skip(skip).limit(limit);
    if(doc.length === 0){
        return next(new AppError('No Items to show',400));
    }
    res.status(200).json({
        status:'success',
        doc
    })
})

exports.deleteCustomer = catchAsync (async (req,res,next) => {
        const doc = await InventoryModel.findByIdAndDelete(req.query.id);   
        res.status(200).json({
            status:'success'
        })
})

exports.showOne = catchAsync (async (req,res,next) => {
        const doc = await InventoryModel.findById(req.query.id); 

        if(!doc){
            return next(new AppError('Item does not exists',400));
        }

        res.status(200).json({
            status:'success',
            doc
        })    
})

