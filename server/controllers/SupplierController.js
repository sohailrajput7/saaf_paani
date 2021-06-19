const User = require("../models/User");
const Supplier = require("../models/Supplier");
const catchAsync = require("../utils/catchAsync");
const APIError = require("../utils/APIError");

const uploadCNICPicture = (file) => {
  const filePath = `cnic/${Date.now()}_${file.name}`;

  file.mv(`${__dirname}/../${process.env.MEDIA_URL}${filePath}`);

  return filePath;
};

exports.createSupplier = catchAsync(async (req, res, next) => {
  if (!req.files.cnic)
    return next(new APIError("CNIC picture is required", 400));

  const {
    firstName,
    lastName,
    email,
    password,
    address,
    phoneNo,
    age,
    verified,
  } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists)
    return next(new APIError("The user with same email already exists", 400));

  const cnic = uploadCNICPicture(req.files.cnic);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    address,
    phoneNo,
    age,
  });

  const supplier = await Supplier.create({
    userId: user._id,
    cnic,
    verified: verified === "true",
  });

  res.status(200).json({
    status: "success",
    data: supplier,
  });
});

exports.getAllSuppliers = catchAsync(async (req, res, next) => {
  const suppliers = await Supplier.find().populate("userId");

  res.status(200).json({
    status: "success",
    data: suppliers,
  });
});

exports.getSupplierById = catchAsync(async (req, res, next) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier)
    return next(new APIError("No Supplier exists with this id", 400));

  res.status(200).json({
    status: "success",
    data: supplier,
  });
});

exports.deleteSupplierById = catchAsync(async (req, res, next) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier)
    return next(new APIError("No Supplier exists with this id", 400));

  await User.findByIdAndDelete(supplier.userId);

  await supplier.delete();

  res.status(200).json({
    status: "success",
    data: supplier,
  });
});

exports.updateSupplierById = catchAsync(async (req, res, next) => {
  const supplier = await Supplier.findById(req.params.id);
  delete req.body["_id"];

  if (!supplier)
    return next(new APIError("No Supplier exists with this id", 400));

  await User.findByIdAndUpdate(supplier.userId, req.body, {
    new: true,
    runValidators: true,
  });

  supplier.cnic = req.body.cnic ?? supplier.cnic;
  supplier.verified = req.body.verified ?? supplier.verified;

  await supplier.save();

  res.status(200).json({
    status: "success",
    data: supplier,
  });
});
