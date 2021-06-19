const express = require('express');
const fileUpload = require('express-fileupload');
const {createInventoryItem, getAllInventoryItems, getInventoryItemById, updateInventroyItem, deleteInventoryItem}  = require('../controllers/InventoryController');

const inventoryRouter = express.Router();

inventoryRouter.route('/').get(getAllInventoryItems).post(createInventoryItem)
inventoryRouter.route('/:itemId').get(getInventoryItemById).patch(updateInventroyItem).delete(deleteInventoryItem)

module.exports = inventoryRouter;