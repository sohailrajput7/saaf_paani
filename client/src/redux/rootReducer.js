import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router'

import settingsReducer from './reducers/settings';
import authReducer from './reducers/auth.reducer'
import userReducer from "./reducers/users.reducer";
import supplierInverntoryReducer from "./reducers/supplierInventory.reducer";
import conversationReducer from "./reducers/conversation.reducer";
import supplierReducer from "./reducers/supplier.reducer";
import customerReducer from "./reducers/customer.reducer";


export default (history)=>combineReducers({
    router:connectRouter(history),
    settings:settingsReducer,
    auth:authReducer,
    inverntory:supplierInverntoryReducer,
    users:userReducer,
    conversation:conversationReducer,
    supplier:supplierReducer,
    customer:customerReducer
});