import {all,put,call,fork  } from "redux-saga/effects";

import authSagas from './sagas/auth.sagas'
import userSagas from './sagas/users.sagas'
import supplierSagas from "./sagas/supplier.sagas";


function* rootSaga(){
    yield all([
        fork(authSagas),
        fork(userSagas),
        fork(supplierSagas)
    ])
}


export default rootSaga;