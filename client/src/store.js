import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const persistConfig = {
    key:'root',
    storage,

}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const middlewares = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        persistedReducer,
        composeEnhancers(applyMiddleware(...middlewares))
    );
const persistor = persistStore(store)

export default function configureStore() {
    return {store,persistor}
}