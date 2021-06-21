const APIError = require("../utils/APIError");
const catchAsync = require("../utils/catchAsync");

const Sales = require("../models/Sales");
const Supplier = require("../models/Supplier");
const Customer = require("../models/Customer");

exports.getDashboardAnalytics = catchAsync(async (req, res, next) => {
  const suppliersCount = await Supplier.countDocuments();
  const customersCount = await Customer.countDocuments();

  const lastMonthDate = new Date();
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);

  const sales = await Sales.aggregate([
    {
      $match: {
        createdAt: {
          $gte: lastMonthDate,
        },
      },
    },
    {
      $unwind: "$items",
    },
    {
      $lookup: {
        from: "inventoryitems",
        localField: "items.itemId",
        foreignField: "_id",
        as: "items.itemId",
      },
    },
    {
      $unwind: "$items.itemId",
    },
    {
      $group: {
        _id: "_id",
        totalSalesAmount: {
          $sum: {
            $multiply: ["$items.price", "$items.quantity"],
          },
        },
        totalPurchasedAmount: {
          $sum: {
            $multiply: ["$items.itemId.purchasedPrice", "$items.quantity"],
          },
        },
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      suppliers: suppliersCount,
      customers: customersCount,
      totalSales: sales[0]?.totalSalesAmount,
      totalPurchasedAmount: sales[0]?.totalPurchasedAmount,
      totalProfit: sales[0]?.totalSalesAmount - sales[0]?.totalPurchasedAmount,
    },
  });
});
