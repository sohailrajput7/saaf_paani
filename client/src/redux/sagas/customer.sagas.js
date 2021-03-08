import {push} from 'connected-react-router'
import axios from '../../api/axios'
import * as actionTypes from '../types/customer.types'
import * as actions from '../actions/customer.actions'
import {all, fork,takeLatest,put} from "redux-saga/effects";


function* createCustomerAsync(action){
    try {
        const response = yield axios.post('customers/',action.payload)
        yield put(actions.createCustomerSuccess())
        yield put(push('/customers/all'))
    }catch (err) {
        console.log(err);
    }
}

function* getAllCustomersAsync(){
    try {
        const response = yield axios.get('customers/')
        yield put(actions.getAllCustomersSuccess(response.data.data));
    }catch (e) {
        console.log(e)
    }
}

function* updateCustomerAsync(action){
    try {
        const response = yield axios.patch(`customers/${action.payload._id}`,action.payload)
        yield put(actions.updateCustomerSuccess());
        yield put(push('/customers/all'));
    }catch (e) {
        console.log(e);
    }
}

function* deleteCustomerAsync(action){
    try {
        const response = yield axios.delete(`customers/${action.payload._id}`);
        yield put(actions.deleteCustomerSuccess());
        yield put(push('/customers/all'));
    }catch (e) {
        console.log(e)
    }
}

function* watchDeleteCustomer(){
    yield takeLatest(actionTypes.DELETE_CUSTOMER_START,deleteCustomerAsync);
}

function* watchUpdateCustomer(){
    yield takeLatest(actionTypes.UPDATE_CUSTOMER_START,updateCustomerAsync)
}


function* watchGetAllCustomers(){
    yield takeLatest(actionTypes.GET_ALL_CUSTOMERS_START,getAllCustomersAsync)
}

function* watchCreateCustomer(){
    yield takeLatest(actionTypes.CREATE_CUSTOMER_START,createCustomerAsync)
}

function* customerSagas(){
    yield all([
        fork(watchCreateCustomer),
        fork(watchGetAllCustomers),
        fork(watchUpdateCustomer),
        fork(watchDeleteCustomer)
    ])

}


export default customerSagas;