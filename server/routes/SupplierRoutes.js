const express = require("express");
const {
  getSupplierById,
  deleteSupplierById,
  updateSupplierById,
  createSupplier,
  getAllSuppliers,
  getSupplierInventory,
  getSuppliersByRadius,
} = require("../controllers/SupplierController");

const supplierRouter = express.Router();

supplierRouter.route("/").post(createSupplier).get(getAllSuppliers);

supplierRouter
  .route("/:id")
  .get(getSupplierById)
  .patch(updateSupplierById)
  .delete(deleteSupplierById);

supplierRouter.route("/inventory/:userId").get(getSupplierInventory);
supplierRouter.route("/near/:radius").get(getSuppliersByRadius);

module.exports = supplierRouter;
