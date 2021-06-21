const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/APIError");
const Roles = require("../constants/Roles");

exports.showAll = catchAsync(async (req, res, next) => {
  const page = req.query.page * 1 || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const doc = await User.find().skip(skip).limit(limit);
  if (doc.length === 0) {
    return next(new AppError("No Users to show", 400));
  }
  res.status(200).json({
    status: "success",
    doc,
  });
});

exports.createAdmin = catchAsync(async (req, res, next) => {
  const admin = await User.create({
    firstName: "Super",
    lastName: "Admin",
    email: "superadmin@mail.com",
    address: "UET Lahore",
    phoneNo: "9874563214",
    age: 20,
    role: Roles.ADMIN,
    password: "admin1234",
  });

  res.status(200).json({
    status: "success",
    data: admin,
  });
});

exports.getAllUsersForConversation = catchAsync(async (req, res, next) => {
  let filter = {};
  const { search } = req.query;

  if (search) {
    filter = {
      $or: [
        {
          firstName: {
            $regex: new RegExp(`${search}`, "i"),
          },
        },
        {
          lastName: {
            $regex: new RegExp(`${search}`, "i"),
          },
        },
      ],
    };
  }

  const users = await User.find(filter);

  res.status(200).json({
    status: "success",
    data: users,
  });
});
