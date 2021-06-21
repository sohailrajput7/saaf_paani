const mongoose = require("mongoose");
const User = require("../models/User");
const Supplier = require("../models/Supplier");
const catchAsync = require("../utils/catchAsync");
const APIError = require("../utils/APIError");
const Roles = require("../constants/Roles");

const uploadCNICPicture = (file) => {
  const filePath = `cnic/${Date.now()}_${file.name}`;

  file.mv(`${__dirname}/../${process.env.MEDIA_URL}${filePath}`);

  return filePath;
};

const milesToRadian = function (miles) {
  var earthRadiusInMiles = 3963.2;
  return miles / earthRadiusInMiles;
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
    location,
  } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists)
    return next(new APIError("The user with same email already exists", 400));

  const cnic = uploadCNICPicture(req.files.cnic);
  const loc = JSON.parse(location);

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
      role: Roles.SUPPLIER,
      location: { type: "Point", coordinates: [loc.long, loc.latt] },
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

  session.endSession();
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

exports.getSupplierInventory = catchAsync(async (req, res, next) => {
  const supplier = await Supplier.findById(req.params.userId).populate(
    "inventory.itemId"
  );

  if (!supplier)
    return next(new APIError("No supplier found with this id", 400));

  res.status(200).json({
    status: "success",
    data: supplier.inventory,
  });
});

exports.getSuppliersByRadius = catchAsync(async (req, res, next) => {
  const { latt, long } = req.query;
  const radius = req.params.radius;
  const coords = [parseFloat(long), parseFloat(latt)];
  const radisuInRadian = milesToRadian(radius);
  console.log(radisuInRadian);

  const suppliers = await Supplier.find({})
    .populate("inventory.itemId")
    .populate("userId", null, {
      location: {
        $geoWithin: {
          $centerSphere: [coords, radisuInRadian],
        },
      },
    });

  res.status(200).json({
    status: "success",
    data: suppliers.filter((u) => u.userId !== null),
  });
});
