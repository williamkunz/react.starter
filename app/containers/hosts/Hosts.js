import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

/**
 *  Hosts Component
 *
 *  @class
 *  @classdesc Container for the Hosts section
 */
class Hosts extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Hosts'
    }

    render() {
        const {
            children
        } = this.props;

        return (
            <section className="hosts-container">
                <p>Hosts section</p>
                {children}
            </section>
        );
    }
}

Hosts.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
};

const mapStateToProps = state => {
    // assumption of an Hosts reducer

    return {};
};

export default connect(mapStateToProps)(Hosts)
