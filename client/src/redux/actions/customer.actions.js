import {createAction} from '../../utils/reduxHelper'
import * as actions from '../types/customer.types'



export const createCustomerStart = createAction(actions.CREATE_CUSTOMER_START);
export const createCustomerSuccess = createAction(actions.CREATE_CUSTOMER_SUCCESS);
export const createCustomerError = createAction(actions.CREATE_CUSTOMER_ERROR)

export const getAllCustomersStart = createAction(actions.GET_ALL_CUSTOMERS_START);
export const getAllCustomersSuccess = createAction(actions.GET_ALL_CUSTOMERS_SUCCESS);
export const getAllCustomersError = createAction(actions.GET_ALL_CUSTOMERS_ERROR)


export const updateCustomerStart = createAction(actions.UPDATE_CUSTOMER_START)
export const updateCustomerSuccess= createAction(actions.UPDATE_CUSTOMER_SUCCESS)
export const updateCustomerError = createAction(actions.UPDATE_CUSTOMER_ERROR)

export const deleteCustomerStart = createAction(actions.UPDATE_CUSTOMER_START)
export const deleteCustomerSuccess= createAction(actions.UPDATE_CUSTOMER_SUCCESS)
export const deleteCustomerError = createAction(actions.UPDATE_CUSTOMER_ERROR)