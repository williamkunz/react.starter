/* global __DEV__ */

import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

// middleware
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';

// reducer
import reducer from '../reducers';

const reduxMiddleware = routerMiddleware(browserHistory);

const createStoreWithMiddleware = (__DEV__) ?
    compose(
        applyMiddleware(
            thunkMiddleware,
            reduxMiddleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : devTools => devTools
    )(createStore) :
    compose(applyMiddleware(thunkMiddleware, reduxMiddleware))(createStore);

/**
 *  Application Store
 *
 *  @param {Object} initialState Initial State for app
 *  @returns {Class} Store class with outlets for react bindings
 */
export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}
