import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

/**
 *  Metrics Container
 *
 *  @class
 *  @classdesc Container for the Metrics section
 */
class Metrics extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Metrics'
    }

    render() {
        const {
            children
        } = this.props

        return (
            <section className="metrics-container">
                <p>Metrics section</p>
                {children}
            </section>
        );
    }
}

Metrics.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
};

const mapStateToProps = state => {
    // assumption of an Metrics reducer

    return {};
};

export default connect(mapStateToProps)(Metrics)
