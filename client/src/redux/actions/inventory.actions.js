import { createAction } from "../../utils/reduxHelper";
import * as actions from "../types/inventory.types";

export const addInventoryItemStart = createAction(
  actions.ADD_INVENTORY_ITEM_START
);
export const addInventoryItemSuccess = createAction(
  actions.ADD_INVENTORY_ITEM_SUCCESS
);
export const addInventoryItemError = createAction(
  actions.ADD_INVENTORY_ITEM_ERROR
);

export const getAllInventoryItemsStart = createAction(
  actions.GET_ALL_INVENTORY_ITEMS_START
);
export const getAllInventoryItemsSuccess = createAction(
  actions.GET_ALL_INVENTORY_ITEMS_SUCCESS
);
export const getAllInventoryItemsError = createAction(
  actions.GET_ALL_INVENTORY_ITEMS_ERROR
);

export const updateInventoryItemStart = createAction(
  actions.UPDATE_INVENTORY_ITEM_START
);
export const updateInventoryItemSuccess = createAction(
  actions.UPDATE_INVENTORY_ITEM_SUCCESS
);
export const updateInventoryItemError = createAction(
  actions.UPDATE_INVENTORY_ITEM_ERROR
);

export const deleteInventoryItemStart = createAction(
  actions.DELETE_INVENTORY_ITEM_START
);
export const deleteInventoryItemSuccess = createAction(
  actions.DELETE_INVENTORY_ITEM_SUCCESS
);
export const deleteInventoryItemError = createAction(
  actions.DELETE_INVENTORY_ITEM_ERROR
);
