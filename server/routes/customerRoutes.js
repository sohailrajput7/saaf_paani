const express = require('express');


const {createOne,UpdateOne,deleteCustomer,showAll,showOne} = require('./../controllers/CustomerController')

const customerRoutes = express.Router();


customerRoutes.route("/add-customer").post(createOne)
customerRoutes.route("/update-customer").put(UpdateOne)
customerRoutes.route('/delete-customer').delete(deleteCustomer)
customerRoutes.route('/show-customers').get(showAll)
customerRoutes.route('/show-customer').get(showOne)



module.exports = customerRoutes;