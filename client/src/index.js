import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {PersistGate} from 'redux-persist/integration/react'

import configureStore from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {history} from './redux/store'
// import registerServiceWorker from './registerServiceWorker';

const {store,persistor} = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
                <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
