import {createAction} from '../../utils/reduxHelper'
import * as actions from '../types/supplier.types'

export const createSupplierStart = createAction(actions.CREATE_SUPPLIER_START)
export const createSupplierSuccess= createAction(actions.CREATE_SUPPLIER_SUCCESS)
export const createSupplierError = createAction(actions.CREATE_SUPPLIER_ERROR)

export const getAllSuppliersStart = createAction(actions.GET_ALL_SUPPLIERS_START)
export const getAllSuppliersSuccess= createAction(actions.GET_ALL_SUPPLIERS_SUCCESS)
export const getAllSuppliersError = createAction(actions.GET_ALL_SUPPLIERS_ERROR)

export const updateSupplierStart = createAction(actions.UPDATE_SUPPLIER_START)
export const updateSupplierSuccess= createAction(actions.UPDATE_SUPPLIER_SUCCESS)
export const updateSupplierError = createAction(actions.UPDATE_SUPPLIER_ERROR)

export const deleteSupplierStart = createAction(actions.DELETE_SUPPLIER_START)
export const deleteSupplierSuccess= createAction(actions.DELETE_SUPPLIER_SUCCESS)
export const deleteSupplierError = createAction(actions.DELETE_SUPPLIER_ERROR)