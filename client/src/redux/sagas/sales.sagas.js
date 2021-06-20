import axios from "../../api/axios";
import * as actionTypes from "../types/sales.types";
import * as actions from "../actions/sales.actions";
import { all, fork, takeLatest, put } from "redux-saga/effects";

function* getAllSuppliersSalesAsync(action) {
  try {
    const response = yield axios.get("payments/supplier-sales");
    yield put(actions.getAllSuppliersSalesSuccess(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetAllSuppliersSales() {
  yield takeLatest(
    actionTypes.GET_ALL_SUPPLIER_SALES_START,
    getAllSuppliersSalesAsync
  );
}

function* salesSagas() {
  yield all([fork(watchGetAllSuppliersSales)]);
}

export default salesSagas;
