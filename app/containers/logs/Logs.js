import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

/**
 *  Logs Container
 *
 *  @class
 *  @classdesc Container for the Logs section
 */
class Logs extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Logs'
    }

    render() {
        const {
            children
        } = this.props;

        return (
            <section className="logs-container">
                <p>Logs section</p>
                {children}
            </section>
        );
    }
}

Logs.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
};

const mapStateToProps = state => {
    // assumption of an Logs reducer

    return {};
};

export default connect(mapStateToProps)(Logs)
