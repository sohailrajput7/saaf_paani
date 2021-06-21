const mongoose = require("mongoose");
const APIError = require("../utils/APIError");
const catchAsync = require("../utils/catchAsync");
const generateSupplierInvoice = require("../utils/generateInvoice");
const Supplier = require("../models/Supplier");
const InventoryItems = require("../models/InventoryItem");
const Sales = require("../models/Sales");

const calculateTotalPrice = (items) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const decreaseItemQuantity = (itemsPayload, items) => {
  return items.map((item) => {
    item.quantity -= itemsPayload.find(
      (el) => el.id === item._id.toString()
    ).quantity;
    return item.save();
  });
};

const createNewSale = async (items, supplierId, invoiceURL) => {
  const salesItems = items.map(({ name, quantity, price, id }) => {
    return {
      itemId: id,
      name,
      quantity,
      price,
    };
  });

  return await Sales.create({
    supplierId,
    items: salesItems,
    invoice: invoiceURL,
  });
};

const changeSupplierInventory = (supplierInventory, items) => {
  items.forEach((item) => {
    const itemFound = supplierInventory.find((i) => item.id === item._id);
    if (itemFound) itemFound += item.quantity;
    else itemFound = item.quantity;
  });

  return supplierInventory;
};

exports.checkoutSupplier = catchAsync(async (req, res, next) => {
  const supplier = await Supplier.findById(req.body.supplierId).populate(
    "userId"
  );

  if (!supplier) return next("No Supplier found with this id", 400);

  const session = await mongoose.startSession();

  let sales = {};

  session.withTransaction(async () => {
    const inventoryItems = await InventoryItems.find({
      _id: {
        $in: [...req.body.items.map((item) => item.id)],
      },
    });

    await Promise.all([
      ...decreaseItemQuantity(req.body.items, inventoryItems),
    ]);

    const supplier = await Supplier.findById(req.body.supplierId);

    if (!supplier)
      return next(new APIError("No supplier found with this ID", 400));

    const updatedInventory = await changeSupplierInventory(
      supplier.inventory,
      req.body.items
    );
    supplier.inventory = updatedInventory;
    await supplier.save();

    const invoiceURL = await generateSupplierInvoice({
      supplier: supplier.userId,
      items: req.body.items,
      totalPrice: calculateTotalPrice(req.body.items),
    });

    sales = await createNewSale(
      req.body.items,
      req.body.supplierId,
      invoiceURL
    );
  });

  session.endSession();

  res.status(200).json({
    status: "success",
    data: sales,
  });
});

exports.getAllSupplierSales = catchAsync(async (req, res, next) => {
  const sales = await Sales.find().populate({
    path: "supplierId",
    populate: {
      path: "userId",
    },
  });
  res.status(200).json({
    status: "success",
    data: sales,
  });
});
