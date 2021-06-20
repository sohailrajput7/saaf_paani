import { all, fork } from "redux-saga/effects";

import authSagas from "./sagas/auth.sagas";
import userSagas from "./sagas/users.sagas";
import supplierSagas from "./sagas/supplier.sagas";
import conversationSagas from "./sagas/conversation.sagas";
import customerSagas from "./sagas/customer.sagas";
import ivnentorySagas from "./sagas/inventory.sagas";
import cartSagas from "./sagas/cart.sagas";
import salesSagas from "./sagas/sales.sagas";
import analyticsSagas from "./sagas/analytics.sagas";

function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(userSagas),
    fork(supplierSagas),
    fork(conversationSagas),
    fork(customerSagas),
    fork(ivnentorySagas),
    fork(cartSagas),
    fork(salesSagas),
    fork(analyticsSagas),
  ]);
}

export default rootSaga;
