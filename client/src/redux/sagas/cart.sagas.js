import axios from "../../api/axios";
import * as actionTypes from "../types/cart.types";
import * as actions from "../actions/cart.actions";
import { all, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";

function* checkoutAsync(action) {
  try {
    const response = yield axios.post(
      `payments/supplier/checkout`,
      action.payload
    );
    yield put(actions.checkoutSuccess());
    yield put(push("/dashboard"));
  } catch (error) {
    console.log(error);
  }
}

function* watchCheckout() {
  yield takeLatest(actionTypes.CHECKOUT_START, checkoutAsync);
}

function* cartSagas() {
  yield all([fork(watchCheckout)]);
}

export default cartSagas;
