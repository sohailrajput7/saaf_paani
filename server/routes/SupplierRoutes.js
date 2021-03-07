const mongoose = require('mongoose');
const express = require('express');
const {getSupplierById,deleteSupplierById,updateSupplierById,createSupplier,getAllSuppliers} = require('../controllers/SupplierController')

const supplierRouter = express.Router();

supplierRouter.route('/').post(createSupplier).get(getAllSuppliers);

supplierRouter.route('/:id').get(getSupplierById).patch(updateSupplierById).delete(deleteSupplierById)

module.exports = supplierRouter;