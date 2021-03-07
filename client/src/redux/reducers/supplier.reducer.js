import produce from 'immer'
import * as actions from '../types/supplier.types'

const initialState = {
    isLoading:false,
    error:{
    },
}


const supplierReducer = produce((draft,action)=>{
    switch (action.type) {
        case actions.CREATE_SUPPLIER_START:
            draft.isLoading = true;
            break;

        case actions.CREATE_SUPPLIER_SUCCESS:
            draft.isLoading = false;
            break;


    }
},initialState)

export default supplierReducer;