import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router'

import history from '../utils/history'
import settingsReducer from './reducers/settings';
import authReducer from './reducers/auth.reducer'
import userReducer from "./reducers/users.reducer";
import conversationReducer from "./reducers/conversation.reducer";
import supplierReducer from "./reducers/supplier.reducer";


export default (history)=>combineReducers({
    router:connectRouter(history),
    settings:settingsReducer,
    auth:authReducer,
    users:userReducer,
    conversation:conversationReducer,
    supplier:supplierReducer
});