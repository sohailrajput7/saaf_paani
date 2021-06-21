const express = require("express");
const {
  getAllUsersForConversation,
  createAdmin,
} = require("../controllers/UserController");
const catchAsync = require("../utils/catchAsync");
var AppError = require("./../utils/APIError");
const User = require("../models/User");

const userRouter = express.Router();

userRouter.route("/for-conversations").get(getAllUsersForConversation);
userRouter.route("/show-users").get(
  catchAsync(async (req, res, next) => {
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
  })
);

userRouter.route("/delete-users").delete(
  catchAsync(async (req, res, next) => {
    const doc = await User.findByIdAndDelete(req.query.id);
    res.status(200).json({
      status: "success",
    });
  })
);

userRouter.route("/super-admin").get(createAdmin);

module.exports = userRouter;
