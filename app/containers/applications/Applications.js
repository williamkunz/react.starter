import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

// actions
import { deleteApplications } from 'actions'

/**
 *  Applications Container
 *
 *  @class
 *  @classdesc Container for the Applications section
 */
class Applications extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Applications'
    }

    render() {
        const {
            applications,
            children,
            dispatch,
        } = this.props;

        const apps = (applications.apps.length) ?
            applications.apps.map(app => {
                return (
                    <div key={app.id}>{app.name} - {app.id}</div>
                )
            }) : <p>You have no apps ☹️</p>

        return (
            <section className="applications-container">
                <p>Applications section</p>

                {apps}

                <button onClick={() => dispatch(deleteApplications(applications.apps))}>Delete these applications</button>

                {children}
            </section>
        );
    }
}

Applications.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
};

const mapStateToProps = state => {
    const { applications } = state

    return {
        applications
    }
};

export default connect(mapStateToProps)(Applications)
