import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

/**
 *  Events Container
 *
 *  @class
 *  @classdesc Container for the Events section
 */
class Events extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Events'
    }

    render() {
        const {
            children
        } = this.props;

        return (
            <section className="events-container">
                <p>Events section</p>
                {children}
            </section>
        );
    }
}

Events.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
};

const mapStateToProps = state => {
    // assumption of an Events reducer

    return {};
};

export default connect(mapStateToProps)(Events)
