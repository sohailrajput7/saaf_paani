const express = require('express');


const {createOne,UpdateOne,deleteCustomer,showAll,showOne} = require('./../controllers/CustomerController')

const customerRoutes = express.Router();


customerRoutes.route("/").post(createOne).get(showAll)
customerRoutes.route("/:id").get(showOne).patch(UpdateOne).delete(deleteCustomer)

module.exports = customerRoutes;