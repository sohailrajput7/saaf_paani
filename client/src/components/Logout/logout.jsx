import React, {useEffect} from "react";
import {push} from 'connected-react-router'
import {useDispatch} from "react-redux";

import {logout} from '../../redux/actions/auth.actions'

const Logout = ()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(logout())
        dispatch(push('/login'))
        localStorage.removeItem('auth-token')
    },[])

    return null;
}

export default Logout
