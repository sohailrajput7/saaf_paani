import produce from 'immer'
import * as actions from '../types/supplier.types'

const initialState = {
    isLoading:false,
    suppliersData:[],
    error:{
    },
}


const supplierReducer = produce((draft,action)=>{
    switch (action.type) {
        case actions.CREATE_SUPPLIER_START:
            draft.isLoading = true;
            break;

        case actions.CREATE_SUPPLIER_SUCCESS:
        case actions.UPDATE_SUPPLIER_SUCCESS:
        case actions.DELETE_SUPPLIER_SUCCESS:
            draft.isLoading = false;
            break;

        case actions.GET_ALL_SUPPLIERS_START:
        case actions.UPDATE_SUPPLIER_START:
        case actions.DELETE_SUPPLIER_START:
            draft.isLoading = true;
            break;

        case actions.GET_ALL_SUPPLIERS_SUCCESS:
            draft.isLoading = false;
            draft.suppliersData = action.payload;
            break;

    }
},initialState)

export default supplierReducer;