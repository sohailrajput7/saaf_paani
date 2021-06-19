import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import settingsReducer from "./reducers/settings";
import authReducer from "./reducers/auth.reducer";
import userReducer from "./reducers/users.reducer";
import conversationReducer from "./reducers/conversation.reducer";
import supplierReducer from "./reducers/supplier.reducer";
import customerReducer from "./reducers/customer.reducer";
import inventoryReducer from "./reducers/inventory.reducer";
import cartReducer from "./reducers/cart.reducer";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: settingsReducer,
    auth: authReducer,
    inventory: inventoryReducer,
    users: userReducer,
    conversation: conversationReducer,
    supplier: supplierReducer,
    customer: customerReducer,
    cart: cartReducer,
  });
