import { put,call,all,fork, takeLatest } from "redux-saga/effects";
import {push} from 'connected-react-router'

import axios from '../../api/axios'
import * as actionTypes from '../types/auth.types'
import * as actions from '../actions/auth.actions'


function* registerUserAsync(action){
    try {
        const response = yield axios.post("auth/register-user",action.payload)
        yield put(actions.registerUserSuccess(response.data.data))
        yield put(push('/dashboard'))
        
    } catch (error) {
        yield put(actions.registerUserError(error.response.data.message))
    }
}

function* loginUserAsync(action){

    try {
        const response = yield axios.post("auth/login-user",action.payload)
        yield put(actions.loginUserSuccess(response.data.data))
        yield put(push('/dashboard'))
        
    } catch (error) {
        yield put(actions.loginUserError(error.response.data.message))
    }
}

function* getAuthUserAsync(){
    try {
        const response = yield axios.get('auth/me')
        yield put(actions.loginUserSuccess(response.data.data))
        yield put(push('/dashboard'))

    } catch (error) {
        yield put(push('/'))
    }
}


function* watchRegisterUser(){
    yield takeLatest(actionTypes.REGISTER_USER_START,registerUserAsync)
}


function* watchLoginUser(){
    yield takeLatest(actionTypes.LOGIN_USER_START,loginUserAsync)
}

function* watchGetAuthUser(){
    yield takeLatest(actionTypes.AUTH_USER_START,getAuthUserAsync)
}


function* authSagas(){
    yield all([
        fork(watchRegisterUser),
        fork(watchLoginUser),
        fork(watchGetAuthUser),
    ])

}


export default authSagas;