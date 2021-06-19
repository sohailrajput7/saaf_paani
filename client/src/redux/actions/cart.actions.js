import { createAction } from "../../utils/reduxHelper";
import * as actions from "../types/cart.types";

export const addItemToCart = createAction(actions.ADD_ITEM_TO_CART);
export const deleteItemFromCart = createAction(actions.DELETE_ITEM_FROM_CART);
export const setSupplierId = createAction(actions.SET_SUPPLIER_ID);

export const checkoutStart = createAction(actions.CHECKOUT_START);
export const checkoutSuccess = createAction(actions.CHECKOUT_SUCCESS);
export const checkoutError = createAction(actions.CHECKOUT_ERROR);
