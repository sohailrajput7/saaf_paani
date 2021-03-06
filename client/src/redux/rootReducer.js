import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router'

import history from '../utils/history'
import settingsReducer from './reducers/settings';
import authReducer from './reducers/auth.reducer'
import userReducer from "./reducers/users.reducer";


export default (history)=>combineReducers({
    router:connectRouter(history),
    settings:settingsReducer,
    auth:authReducer,
    users:userReducer
});