import produce from 'immer'
import * as actions from '../types/conversation.types'

const initialState = {
    isLoading:false,
    conversationData:[],
    replies:[],
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

        case actions.CREATE_CONVERSATION_START,actions.GET_REPLIES_OF_CONVERSATION_START:
            draft.isLoading = true;
            draft.replies = []
            break;

        case actions.CREATE_CONVERSATION_SUCCESS:
            draft.isLoading = false;
            break;

        case actions.GET_REPLIES_OF_CONVERSATION_SUCCESS:
            draft.isLoading = false;
            draft.replies = action.payload;
            break;

        case actions.ADD_MSG_IN_REPLIES:
            const {senderId,content,senderProfilePicture} = action.payload;
            draft.replies.push({
                userId:{
                    _id:senderId,
                    profilePicture:senderProfilePicture
                },
                content,
            })
            break;
    }
},initialState)

export default conversationReducer;