import { createAction } from "../../utils/reduxHelper";
import * as actions from "../types/auth.types";

export const registerUserStart = createAction(actions.REGISTER_USER_START);
export const registerUserSuccess = createAction(actions.REGISTER_USER_SUCCESS);
export const registerUserError = createAction(actions.REGISTER_USER_ERROR);

export const registerSupplierStart = createAction(
  actions.REGISTER_SUPPLIER_START
);
export const registerSupplierSuccess = createAction(
  actions.REGISTER_SUPPLIER_SUCCESS
);
export const registerSupplierError = createAction(
  actions.REGISTER_SUPPLIER_ERROR
);

export const loginUserStart = createAction(actions.LOGIN_USER_START);
export const loginUserSuccess = createAction(actions.LOGIN_USER_SUCCESS);
export const loginUserError = createAction(actions.LOGIN_USER_ERROR);

export const setMessage = createAction(actions.SET_MESSAGE);
export const removeMessage = createAction(actions.REMOVE_MESSAGE);

export const authUserStart = createAction(actions.AUTH_USER_START);

export const logout = createAction(actions.LOGOUT);
