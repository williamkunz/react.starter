import {
    browserHistory,
    Route,
    Router
} from 'react-router';
import React from 'react';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

// store
import configureStore from './store/configureStore';
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

// containers
import {default as App} from './containers/app/App'; // grab fresh copy for HMR

// components
import NotFound from './components/notFound/NotFound';


export default (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>

                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>
);
