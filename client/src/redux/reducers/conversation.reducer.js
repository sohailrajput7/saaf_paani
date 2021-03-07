import produce from 'immer'
import * as actions from '../types/conversation.types'

const initialState = {
    conversationData:[],
    error:{
        login:"",
        signUp:"",
    },
}


const conversationReducer = produce((draft,action)=>{
    switch (action.type) {
        case actions.CONVERSATIONS_OF_USER_START:
            draft.isLoading = true;
            draft.conversationData = [];
            break;

        case actions.CONVERSATIONS_OF_USER_SUCCESS:
            draft.isLoading = false;
            draft.conversationData = action.payload;
            break;

    }
},initialState)

export default conversationReducer;