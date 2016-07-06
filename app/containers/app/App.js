import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

// components
import Header from '../../components/header/Header';

/**
 *  App Component
 *
 *  @class
 *  @classdesc App lies just under the store Store Provider
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }

    render() {
        const {
            children
        } = this.props;

        return (
            <div className="app">
                <Header/>
                <main className="main-stage">
                    {children}
                </main>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
    sampleReducer: PropTypes.object.isRequired
};

App.contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const {
        sampleReducer
    } = state;

    return {
        sampleReducer
    };
};

export default connect(mapStateToProps)(App);
