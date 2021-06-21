import { put, call, all, fork, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";

import axios from "../../api/axios";
import * as actionTypes from "../types/auth.types";
import * as actions from "../actions/auth.actions";
import Roles from "../../constants/Roles";

function getNewSupplierFormData({
  firstName,
  lastName,
  email,
  password,
  address,
  phoneNo,
  age,
  cnic,
  location: coordinates,
}) {
  const form = new FormData();
  form.append("firstName", firstName);
  form.append("lastName", lastName);
  form.append("email", email);
  form.append("password", password);
  form.append("address", address);
  form.append("phoneNo", phoneNo);
  form.append("age", age);
  form.append("cnic", cnic);
  form.append("verified", false);
  form.append("location", JSON.stringify(coordinates));

  return form;
}

function* redirectUser(user) {
  if (user.role === Roles.USER) {
    yield put(push("/order"));
  } else if (user.role === Roles.SUPPLIER) {
    if (!user.verified) {
      yield put(
        actions.setMessage(
          "Your Account is not verified Yet. Please wait for approval"
        )
      );
    } else {
      yield put(push("/stash"));
    }
  } else if (user.role === Roles.ADMIN) {
    yield put(push("/dashboard"));
  }
}

function* registerUserAsync(action) {
  try {
    const response = yield axios.post("auth/register-user", action.payload);
    yield put(actions.registerUserSuccess(response.data.data));
    yield put(push("/order"));
  } catch (error) {
    yield put(actions.registerUserError(error.response.data.message));
  }
}

function* registerSupplierAsync(action) {
  try {
    const response = yield axios.post(
      "suppliers",
      getNewSupplierFormData(action.payload)
    );
    yield put(
      actions.registerSupplierSuccess(
        "Your Request Has Been Submitted To The Company.Please Wait For Your Approval"
      )
    );
  } catch (error) {
    console.log(error);
    yield put(actions.registerSupplierError(error.response.data.message));
  }
}

function* loginUserAsync(action) {
  try {
    const response = yield axios.post("auth/login-user", action.payload);
    const user = response.data.data;
    yield put(actions.loginUserSuccess(user));
    yield redirectUser(user);
  } catch (error) {
    yield put(actions.loginUserError(error.response.data.message));
  }
}

function* getAuthUserAsync() {
  try {
    const response = yield axios.get("auth/me");
    const user = response.data.data;
    yield put(actions.loginUserSuccess(response.data.data));
    yield redirectUser(user);
  } catch (error) {
    yield put(push("/"));
  }
}

function* watchRegisterUser() {
  yield takeLatest(actionTypes.REGISTER_USER_START, registerUserAsync);
}

function* watchRegisterSupplier() {
  yield takeLatest(actionTypes.REGISTER_SUPPLIER_START, registerSupplierAsync);
}

function* watchLoginUser() {
  yield takeLatest(actionTypes.LOGIN_USER_START, loginUserAsync);
}

function* watchGetAuthUser() {
  yield takeLatest(actionTypes.AUTH_USER_START, getAuthUserAsync);
}

function* authSagas() {
  yield all([
    fork(watchRegisterUser),
    fork(watchLoginUser),
    fork(watchGetAuthUser),
    fork(watchRegisterSupplier),
  ]);
}

export default authSagas;
