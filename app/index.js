/* global __DEV__ */
import React from 'react';
import ReactDOM from 'react-dom';

import 'babel-polyfill';

// routes
import routes from './routes';

// base css
import './index.css';

const rootEl = document.getElementById('root');

if (__DEV__) {
    let render = () => {
        ReactDOM.render(
            routes,
            rootEl
        );
    };

    if (module.hot) {
        // Support hot reloading of components
        // and display an overlay for runtime errors
        const renderApp = render;
        const renderError = error => {
            const RedBox = require('redbox-react'); // eslint-disable-line global-require

            ReactDOM.render(
                <RedBox error={error} />,
                rootEl
            );
        };

        render = () => {
            try {
                renderApp();
            } catch (error) {
                renderError(error);
            }
        };

        module.hot.accept('./containers/app/App', () => {
            setTimeout(render);
        });
    }

    render();
} else {
    ReactDOM.render(
        routes,
        rootEl
    );
}
