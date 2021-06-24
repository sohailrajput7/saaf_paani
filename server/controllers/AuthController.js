const mongoose = require("mongoose");
const Roles = require("../constants/Roles");
const APIError = require("../utils/APIError");
const catchAsync = require("../utils/catchAsync");

const User = require("../models/User");
const Supplier = require("../models/Supplier");
const Customer = require("../models/Customer");

exports.registerUser = catchAsync(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    address,
    phoneNo,
    age,
    location,
  } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists)
    return next(new APIError("The user with same email already exists", 400));

  const session = await mongoose.startSession();

  await session.withTransaction(async () => {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNo,
      age,
      location: { type: "Point", coordinates: [location.long, location.latt] },
    });

    const customer = await Customer.create({
      user: user._id,
    });

    res.status(200).json({
      status: "success",
      data: user,
      token: user.getJWTToken(),
    });
  });
});

exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) return next(new APIError("User does not exists", 400));

  if (!(await user.comparePassword(password)))
    return next(new APIError("Invalid Credentials", 400));

  let response = { ...user._doc };
  if (user.role === Roles.SUPPLIER) {
    const supplier = await Supplier.findOne({ userId: user._id })
      .populate("inventory.itemId")
      .select("-userId -_id");
    
      if(!supplier) return next(new APIError("The supplier doesnot exists with this id",400))

    response = {
      ...response,
      ...supplier._doc,
    };
  }

  res.status(200).json({
    status: "success",
    data: response,
    token: user.getJWTToken(),
  });
});

exports.getUserFromToken = catchAsync(async (req, res, next) => {
  let response = {
    ...req.user._doc,
  };
  if (req.user.role === Roles.SUPPLIER) {
    const supplier = await Supplier.findOne({ userId: req.user._id })
      .populate("inventory.itemId")
      .select("-userId");
    response = {
      ...response,
      ...supplier._doc,
    };
  }
  res.status(200).json({
    status: "success",
    data: response,
  });
});
