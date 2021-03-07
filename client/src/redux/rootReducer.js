import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router'
import settingsReducer from './reducers/settings';
import authReducer from './reducers/auth.reducer'
import userReducer from "./reducers/users.reducer";
<<<<<<< HEAD
import supplierInverntoryReducer from "./reducers/supplierInventory.reducer";
=======
import conversationReducer from "./reducers/conversation.reducer";
import supplierReducer from "./reducers/supplier.reducer";
>>>>>>> 4a830426f014bdb8c86efac960530d2aedc5141e


export default (history)=>combineReducers({
    router:connectRouter(history),
    settings:settingsReducer,
    auth:authReducer,
<<<<<<< HEAD
    inverntory:supplierInverntoryReducer,
    users:userReducer
=======
    users:userReducer,
    conversation:conversationReducer,
    supplier:supplierReducer
>>>>>>> 4a830426f014bdb8c86efac960530d2aedc5141e
});