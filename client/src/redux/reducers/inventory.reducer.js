import produce from "immer";
import * as actions from "../types/inventory.types";

const initialState = {
  isLoading: false,
  items: [],
};

const inventoryReducer = produce((draft, action) => {
  switch (action.type) {
    case actions.ADD_INVENTORY_ITEM_START:
    case actions.GET_ALL_INVENTORY_ITEMS_START:
    case actions.UPDATE_INVENTORY_ITEM_START:
    case actions.DELETE_INVENTORY_ITEM_START:
      draft.isLoading = true;
      break;
    case actions.ADD_INVENTORY_ITEM_SUCCESS:
    case actions.UPDATE_INVENTORY_ITEM_SUCCESS:
    case actions.DELETE_INVENTORY_ITEM_SUCCESS:
      draft.isLoading = false;
      break;

    case actions.GET_ALL_INVENTORY_ITEMS_SUCCESS:
      draft.items = action.payload;
      break;
  }
}, initialState);

export default inventoryReducer;
