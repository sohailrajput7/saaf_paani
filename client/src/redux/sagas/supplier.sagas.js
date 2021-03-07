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

function* getAllSuppliersAsync(action){
    try {
        const response = yield axios.get('suppliers');
        yield put(actions.getAllSuppliersSuccess(response.data.data));
    }catch (e) {
        console.log(e);
    }
}

function* updateSupplierAsync(action){
    try {
        const response = yield axios.patch(`suppliers/${action.payload._id}`,action.payload)
        yield put(actions.updateSupplierSuccess());
        yield put(push('/suppliers/all'));
    }catch (e) {
        console.log(e);
    }
}

function* deleteSupplierAsync(action){
    try {
        const response = yield axios.delete(`suppliers/${action.payload._id}`);
        yield put(actions.deleteSupplierSuccess());
        yield put(push('/suppliers/all'));
    }catch (e) {
        console.log(e)
    }
}

function* watchDeleteSupplier(){
    yield takeLatest(actionTypes.DELETE_SUPPLIER_START,deleteSupplierAsync);
}

function* watchUpdateSupplier(){
    yield takeLatest(actionTypes.UPDATE_SUPPLIER_START,updateSupplierAsync)
}

function* watchGetAllSuppliers(){
    yield takeLatest(actionTypes.GET_ALL_SUPPLIERS_START,getAllSuppliersAsync)
}

function* watchCreateSupplier(){
    yield takeLatest(actionTypes.CREATE_SUPPLIER_START,createSupplierAsync)
}

function* supplierSagas(){
    yield all([
        fork(watchCreateSupplier),
        fork(watchGetAllSuppliers),
        fork(watchUpdateSupplier),
        fork(watchDeleteSupplier)
    ])

}

export default supplierSagas;

