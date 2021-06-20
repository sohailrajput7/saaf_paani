import { createAction } from "../../utils/reduxHelper";
import * as actions from "../types/sales.types";

export const getAllSuppliersSalesStart = createAction(
  actions.GET_ALL_SUPPLIER_SALES_START
);
export const getAllSuppliersSalesSuccess = createAction(
  actions.GET_ALL_SUPPLIER_SALES_SUCCESS
);
export const getAllSuppliersSalesError = createAction(
  actions.GET_ALL_SUPPLIER_SALES_ERROR
);
