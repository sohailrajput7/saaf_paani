import produce from 'immer'
import * as actions from '../types/customer.types'

const initialState = {
    isLoading:false,
    customersData:[],
    error:{
    },
}


const customerReducer = produce((draft,action)=>{
    switch (action.type) {
        case actions.CREATE_CUSTOMER_START:
        case actions.GET_ALL_CUSTOMERS_START:
            draft.isLoading = true;
            break;

        case actions.CREATE_CUSTOMER_SUCCESS:
            draft.isLoading = false;
            break;

        case actions.GET_ALL_CUSTOMERS_SUCCESS:
            draft.isLoading = true;
            draft.customersData = action.payload;
            break;


    }
},initialState)

export default customerReducer;