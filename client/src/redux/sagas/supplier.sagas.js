import axios from '../../api/axios'
import {push} from 'connected-react-router'
import {all, fork,throttle,put,takeLatest} from "redux-saga/effects";
import * as actionTypes from '../types/supplier.types'
import * as actions from '../actions/supplier.actions'


function* createSupplierAsync(action){
    try {
        const response = yield axios.post('suppliers',action.payload);
        yield put(actions.createSupplierSuccess());
        yield put(push("/suppliers/all"))
    }catch (err) {
        console.log(err);
    }
}

function* watchCreateSupplier(){
    yield takeLatest(actionTypes.CREATE_SUPPLIER_START,createSupplierAsync)
}

function* supplierSagas(){
    yield all([
        fork(watchCreateSupplier),
    ])

}

export default supplierSagas;

