const express = require("express");

const {
  checkoutSupplier,
  getAllSupplierSales,
} = require("../controllers/PaymentsController");

const paymentsRoutes = express.Router();

paymentsRoutes.route("/supplier/checkout").post(checkoutSupplier);
paymentsRoutes.route("/supplier-sales").get(getAllSupplierSales);

module.exports = paymentsRoutes;
