import {all,put,call,fork  } from "redux-saga/effects";

import authSagas from './sagas/auth.sagas'
import userSagas from './sagas/users.sagas'


function* rootSaga(){
    yield all([
        fork(authSagas),
        fork(userSagas)
    ])
}


export default rootSaga;