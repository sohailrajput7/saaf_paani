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
  const salesItems = items.map(({ name, quantity, price, _id }) => {
    return {
      itemId: _id,
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

exports.checkoutSupplier = catchAsync(async (req, res, next) => {
  const supplier = await Supplier.findById(req.body.supplierId).populate(
    "userId"
  );

  if (!supplier) return next("No Supplier found with this id", 400);

  const session = await mongoose.startSession();

  session.withTransaction(async () => {
    const inventoryItems = await InventoryItems.find({
      _id: {
        $in: [...req.body.items.map((item) => item.id)],
      },
    });

    await Promise.all([
      ...decreaseItemQuantity(req.body.items, inventoryItems),
    ]);

    const invoiceURL = await generateSupplierInvoice({
      supplier: supplier.userId,
      items: req.body.items,
      totalPrice: calculateTotalPrice(req.body.items),
    });

    await createNewSale(
      req.body.items,
      req.body.supplierId,
      invoice,
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
  const sales = await Sales.find();

  res.status(200).json({
    status: "success",
    data: sales,
  });
});
