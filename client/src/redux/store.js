import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore,persistReducer} from 'redux-persist'
import {routerMiddleware} from 'connected-react-router'
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga'
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory()

const persistConfig = {
    key:'root',
    storage,

}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig,rootReducer(history))

const middlewares = [routerMiddleware(history),sagaMiddleware,thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        rootReducer(history),
        composeEnhancers(applyMiddleware(...middlewares))
    );

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default function configureStore() {
    return {store,persistor}
}