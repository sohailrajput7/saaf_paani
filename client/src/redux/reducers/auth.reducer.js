import produce from 'immer'
import * as actions from '../types/auth.types'

const initialState = {
    isLoading:false,
    authUser:null,
    error:{
        login:"",
        signUp:"",
    },
}


const authReducer = produce((draft,action)=>{
    switch (action.type) {
        case actions.REGISTER_USER_START:
        case actions.LOGIN_USER_START:
            draft.isLoading = true
            draft.authUser = null
            draft.error = {}
            break
        
        case actions.REGISTER_USER_SUCCESS:
        case actions.LOGIN_USER_SUCCESS:
            draft.isLoading = false
            console.log("test",action.payload);
            draft.authUser = action.payload
            draft.error = {}
            break;
        
        case actions.REGISTER_USER_ERROR:
            draft.isLoading = false
            draft.authUser = null
            draft.error.signUp = action.payload
            break;

        case actions.LOGIN_USER_ERROR:
            draft.isLoading = false
            draft.authUser = null
            draft.error.login = action.payload
            break;

        case actions.LOGOUT:
            draft.authUser = null
            break;
    }
},initialState)

export default authReducer;