var CustomerModel = require('./../models/Customer');
var UserModel = require('./../models/User');
const catchAsync = require('../utils/catchAsync')
var AppError = require('./../utils/APIError');



exports.createOne = catchAsync(async (req,res,next) => {
        const user = await UserModel.create(req.body);
        var userDoc = {"user": user};
        const doc = await CustomerModel.create(userDoc);

       
        res.status(200).json({
            status:'success',
            doc
        })
})

exports.UpdateOne = catchAsync(async (req,res,next) => {
    
     const doc = await CustomerModel.findById(req.query.id);
     const userDoc = await UserModel.findByIdAndUpdate(doc.user,req.body);

    if(!doc){
        return next(new AppError('Customer does not exists', 400))
    }

    updatedDoc = await CustomerModel.findById(req.query.id).populate('user');

    res.status(200).json({
        status:'success',
        updatedDoc
    })
    
})

exports.showAll = catchAsync(async (req,res,next) => {
    const page = req.query.page * 1 || 1;
    const limit = 10;
    const skip = (page - 1) * limit;
    const doc = await CustomerModel.find().skip(skip).limit(limit).populate('user');
    if(doc.length === 0){
        return next(new AppError('No Customers to show',400));
    }
    res.status(200).json({
        status:'success',
        doc
    })
})

exports.deleteCustomer = catchAsync (async (req,res,next) => {
    
        const doc = await CustomerModel.findById(req.query.id);
        await UserModel.findByIdAndDelete(doc.user);
        await CustomerModel.findByIdAndDelete(req.query.id);
        
        res.status(200).json({
            status:'success'
        })
})

exports.showOne = catchAsync (async (req,res,next) => {

        const doc = await CustomerModel.findById(req.query.id).populate('user'); 

        if(!doc){
            return next(new AppError('Customer does not exists',400));
        }

        res.status(200).json({
            status:'success',
            doc
        })    
})

