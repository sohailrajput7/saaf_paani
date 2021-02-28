import {all,put,call,fork  } from "redux-saga/effects";

import authSagas from './sagas/auth.sagas'


function* rootSaga(){
    yield all([
        fork(authSagas)
    ])
}


export default rootSaga;