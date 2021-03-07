const User = require('../models/User');
const Supplier = require('../models/Supplier')
const catchAsync = require('../utils/catchAsync')
const APIError = require('../utils/APIError')


exports.createSupplier = catchAsync(async (req,res,next)=>{
    const {firstName,lastName,email,password,address,phoneNo,age,cnic} = req.body;

    const isUserExists = await User.findOne({email});

    if(isUserExists) return next(new APIError("The user with same email already exists",400))

    const user = await User.create({
        firstName,lastName,email,password,address,phoneNo,age
    })

    const supplier = await Supplier.create({userId:user._id,cnic:cnic})

    res.status(200).json({
        status:"success",
        data:supplier
    })

})

exports.getAllSuppliers = catchAsync(async (req,res,next)=>{
    const suppliers = await Supplier.find();

    res.status(200).json({
        status:"success",
        data:suppliers
    })
} )

exports.getSupplierById = catchAsync(async(req,res,next)=>{
    const supplier = await Supplier.findById(req.params.id);

    if(!supplier)
        return next(new APIError("No Supplier exists with this id",400))

    res.status(200).json({
        status:"success",
        data:supplier
    })
})

exports.deleteSupplierById = catchAsync(async(req,res,next)=>{
    const supplier = await Supplier.findById(req.params.id);

    if(!supplier)
        return next(new APIError("No Supplier exists with this id",400))

    await User.findByIdAndDelete(supplier.userId);

    await supplier.delete();

})

exports.updateSupplierById = catchAsync(async(req,res,next)=>{
    const supplier = await Supplier.findById(req.params.id);

    if(!supplier)
        return next(new APIError("No Supplier exists with this id",400))

    await User.findByIdAndUpdate(supplier.userId,req.body,{new:true,runValidators:true});

    supplier.cnic = req.body.cnic ?? supplier.cnic;
    supplier.verified = req.body.verified ?? supplier.verified;

    res.status(200).json({
        status:"success",
        data:supplier
    })

})
