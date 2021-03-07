const express = require('express');
var multer = require('multer');


const {createOne,UpdateOne,deleteCustomer,showAll,showOne} = require('./../controllers/InventoryController')

const inventoryRoutes = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, ('./public/uploads/'));
    },
    filename: function(req, file, cb) {
      cb(null,new Date().toISOString().replace(/:/g, '-') +'-' + file.originalname);
    }
  });

  var upload = multer({storage:storage});


inventoryRoutes.post('/add-item',upload.single('itemPicture'),createOne);
inventoryRoutes.route("/update-item").put(UpdateOne)
inventoryRoutes.route('/delete-item').delete(deleteCustomer)
inventoryRoutes.route('/show-items').get(showAll)
inventoryRoutes.route('/show-item').get(showOne)



module.exports = inventoryRoutes;