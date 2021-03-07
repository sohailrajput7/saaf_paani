import {createAction} from '../../utils/reduxHelper'
import * as actions from '../types/supplier.types'

export const createSupplierStart = createAction(actions.CREATE_SUPPLIER_START)
export const createSupplierSuccess= createAction(actions.CREATE_SUPPLIER_SUCCESS)
export const createSupplierError = createAction(actions.CREATE_SUPPLIER_ERROR)