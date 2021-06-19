import produce from "immer";
import * as actions from "../types/cart.types";

const initialState = {
  items: [],
  totalItems: 0,
};

const cartReducer = produce((draft, action) => {
  switch (action.type) {
    case actions.ADD_ITEM_TO_CART:
      const itemIndex = draft.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        draft.items[itemIndex].quantity += 1;
      } else {
        draft.items.push({
          id: action.payload.id,
          quantity: 1,
          price: action.payload.price,
          thumbnail: action.payload.thumbnail,
          name: action.payload.name,
        });
      }
      draft.totalItems += 1;
      break;

    case actions.DELETE_ITEM_FROM_CART:
      const deleteItemIndex = draft.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (draft.items[deleteItemIndex].quantity === 1) {
        draft.items.splice(deleteItemIndex, 1);
      } else {
        draft.items[deleteItemIndex].quantity -= 1;
      }
      draft.totalItems -= 1;
      break;

    case actions.SET_SUPPLIER_ID:
      draft.supplierId = action.payload;
  }
}, initialState);

export default cartReducer;
