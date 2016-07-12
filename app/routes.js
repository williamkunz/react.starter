import {
    browserHistory,
    Route,
    Router
} from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

// store
import configureStore from './store/configureStore';
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

// containers
import {default as App} from 'containers/app/App' // grab fresh copy for HMR
import Applications from 'containers/applications/Applications'
import Events from 'containers/events/Events' // Maybe "Events" isn't the best name for this class?
import Hosts from 'containers/hosts/Hosts'
import Logs from 'containers/logs/Logs'
import Metrics from 'containers/metrics/Metrics'
import Permissions from 'containers/permissions/Permissions' // same here with naming schema
import Settings from 'containers/settings/Settings'
import Setup from 'containers/setup/Setup'

// components
import NotFound from './components/notFound/NotFound';


export default (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/setup" component={Setup}>
                    {/* setup subroutes */}
                </Route>

                <Route path="/applications" component={Applications}>
                    {/* applications subroutes */}
                </Route>

                <Route path="/hosts" component={Hosts}>
                    {/* hosts subroutes */}
                </Route>

                <Route path="/metrics" component={Metrics}>
                    {/* metrics subroutes */}
                </Route>

                <Route path="/settings" component={Settings}>
                    {/* settings subroutes */}
                </Route>

                <Route path="/logs" component={Logs}>
                    {/* logs subroutes, event though it has a "?" after it in the entry in the brainstorm doc. Delete if needed */}
                </Route>

                <Route path="/events" component={Events}>
                    {/* events subroutes */}
                </Route>

                <Route path="/permissions" component={Permissions}>
                    {/* permissions subroutes */}
                </Route>

                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>
);
