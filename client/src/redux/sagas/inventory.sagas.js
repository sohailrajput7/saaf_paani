import axios from "../../api/axios";
import * as actionTypes from "../types/inventory.types";
import * as actions from "../actions/inventory.actions";
import { all, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";

function getFormData({
  name,
  quantity,
  description,
  purchasedPrice,
  price,
  thumbnail,
}) {
  const form = new FormData();
  form.append("name", name);
  form.append("purchasedPrice", purchasedPrice);
  form.append("price", price);
  form.append("quantity", quantity);
  form.append("description", description);
  form.append("thumbnail", thumbnail);

  return form;
}

function* deleteInventoryAsync(action) {
  try {
    const response = yield axios.delete(`inventory/${action.payload._id}`);
    yield put(push("/inventory/all"));
  } catch (error) {
    console.log(error);
  }
}

function* updateInventoryAsync(action) {
  try {
    const response = yield axios.patch(
      `inventory/${action.payload._id}`,
      getFormData(action.payload)
    );
    yield put(push("/inventory/all"));
  } catch (error) {
    console.log(error);
  }
}

function* addInventoryItemAsync(action) {
  try {
    const response = yield axios.post("inventory", getFormData(action.payload));
    yield put(actions.addInventoryItemSuccess());
    yield put(push("/inventory/all"));
  } catch (err) {
    console.log("error", err);
  }
}

function* getAllInventoryItemsAsync(action) {
  try {
    const response = yield axios.get("inventory");
    yield put(actions.getAllInventoryItemsSuccess(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchAddInventoryItem() {
  yield takeLatest(actionTypes.ADD_INVENTORY_ITEM_START, addInventoryItemAsync);
}

function* watchGetALLInventoryItems() {
  yield takeLatest(
    actionTypes.GET_ALL_INVENTORY_ITEMS_START,
    getAllInventoryItemsAsync
  );
}

function* watchUpdateInventoryItems() {
  yield takeLatest(
    actionTypes.UPDATE_INVENTORY_ITEM_START,
    updateInventoryAsync
  );
}

function* watchDeleteInventoryItem() {
  yield takeLatest(
    actionTypes.DELETE_INVENTORY_ITEM_START,
    deleteInventoryAsync
  );
}

function* ivnentorySagas() {
  yield all([
    fork(watchAddInventoryItem),
    fork(watchGetALLInventoryItems),
    fork(watchUpdateInventoryItems),
    fork(watchDeleteInventoryItem),
  ]);
}

export default ivnentorySagas;
