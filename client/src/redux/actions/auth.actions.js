import {createAction} from '../../utils/reduxHelper'
import {push} from 'connected-react-router'
import * as actions from '../types/auth.types'
import axios from '../../api/axios'

export const registerUserStart = createAction(actions.REGISTER_USER_START)
export const registerUserSuccess= createAction(actions.REGISTER_USER_SUCCESS)
export const registerUserError = createAction(actions.REGISTER_USER_ERROR)


export const registerUserAsync = (data)=>async dispatch=>{
    dispatch(registerUserStart())

    try {
        const response = await axios.post("auth/register-user",data)
        dispatch(registerUserSuccess(response.data.data))
        dispatch(push('/dashboard'))
        
    } catch (error) {
        dispatch(registerUserError(error.response.data.message))
    }
}

export const loginUserStart = createAction(actions.LOGIN_USER_START)
export const loginUserSuccess= createAction(actions.LOGIN_USER_SUCCESS)
export const loginUserError = createAction(actions.LOGIN_USER_ERROR)

export const loginUserAsync = (data)=>async dispatch =>{
    dispatch(loginUserStart())

    try {
        const response = await axios.post("auth/login-user",data)
        dispatch(loginUserSuccess(response.data.data))
        dispatch(push('/dashboard'))
        
    } catch (error) {
        dispatch(loginUserError(error.response.data.message))
    }
}


export const getAuthUserAsync = ()=>async dispatch=>{
    dispatch(loginUserStart())

    try {
        const response = await axios.post('auth/me')
        dispatch(loginUserSuccess(response.data.data))
        dispatch(push('/dashboard'))

    } catch (error) {
        dispatch(push('/login'))
    }
}
