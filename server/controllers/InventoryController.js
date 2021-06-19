const InventoryItem = require("../models/InventoryItem");
const catchAsync = require("../utils/catchAsync");
const APIError = require("./../utils/APIError");

const uploadInventoryThumbnail = (file) => {
  const filePath = `inventory/${Date.now()}_${file.name}`;

  file.mv(`${__dirname}/../${process.env.MEDIA_URL}${filePath}`);

  return filePath;
};

exports.createInventoryItem = catchAsync(async (req, res, next) => {
  if (!req.files.thumbnail)
    return next(new APIError("Thumbnail is required", 400));

  const { name, quantity, price, description } = req.body;

  const checkExistingItem = await InventoryItem.findOne({ name });

  if (checkExistingItem)
    return next(
      new APIError("The item already exists with the same name", 400)
    );

  const thumbnail = uploadInventoryThumbnail(req.files.thumbnail);

  const item = await InventoryItem.create({
    name,
    quantity,
    price,
    thumbnail,
    description,
  });

  res.status(200).json({
    status: "success",
    data: item,
  });
});

exports.getAllInventoryItems = catchAsync(async (req, res, next) => {
  const items = await InventoryItem.find();

  res.status(200).json({
    status: "success",
    data: items,
  });
});

exports.getInventoryItemById = catchAsync(async (req, res, next) => {
  const { itemId } = req.params;

  const checkExistingItem = await InventoryItem.findById(itemId);

  if (!checkExistingItem)
    return next(new APIError("No item exists with this id", 400));

  res.status(200).json({
    status: "success",
    data: checkExistingItem,
  });
});

exports.updateInventroyItem = catchAsync(async (req, res, next) => {
  const { itemId } = req.params;

  const checkExistingItem = await InventoryItem.findById(itemId);

  if (!checkExistingItem)
    return next(new APIError("No item exists with this id", 400));

  const { name, quantity, price } = req.body;
  const updatedItem = {
    name,
    quantity,
    price,
  };

  if (req.files.thumbnail)
    updatedItem.thumbnail = uploadInventoryThumbnail(req.files.thumbnail);

  await checkExistingItem.update(updatedItem, {
    new: true,
    omitUndefined: true,
  });

  res.status(200).json({
    status: "success",
    data: checkExistingItem,
  });
});

exports.deleteInventoryItem = catchAsync(async (req, res, next) => {
  const { itemId } = req.params;

  const checkExistingItem = await InventoryItem.findById(itemId);

  if (!checkExistingItem)
    return next(new APIError("No item exists with this id", 400));

  await checkExistingItem.delete();

  res.status(200).json({
    status: "success",
    data: checkExistingItem,
  });
});
