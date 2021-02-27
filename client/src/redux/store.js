import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore,persistReducer} from 'redux-persist'
import {routerMiddleware} from 'connected-react-router'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory()

const persistConfig = {
    key:'root',
    storage,

}

const persistedReducer = persistReducer(persistConfig,rootReducer(history))

const middlewares = [routerMiddleware(history),thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        rootReducer(history),
        composeEnhancers(applyMiddleware(...middlewares))
    );
const persistor = persistStore(store)

export default function configureStore() {
    return {store,persistor}
}