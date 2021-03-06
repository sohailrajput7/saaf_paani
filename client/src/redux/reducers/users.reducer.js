import produce from 'immer'
import * as actions from '../types/users.types'

const initialState = {
    isLoading:false,
    conversationUsers:null,
    error:{
        login:"",
        signUp:"",
    },
}


const userReducer = produce((draft,action)=>{
    switch (action.type) {
        case actions.USERS_FOR_CONVERSATIONS_START:
            draft.isLoading = true;
            break;

        case actions.USERS_FOR_CONVERSATIONS_SUCCESS:
            draft.isLoading = false;
            draft.conversationUsers = action.payload
            break;


    }
},initialState)

export default userReducer;