import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

/**
 *  Permissions Container
 *
 *  @class
 *  @classdesc Container for the Permissions section
 */
class Permissions extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Permissions'
    }

    render() {
        const {
            children
        } = this.props;

        return (
            <section className="permissions-container">
                <p>Permissions section</p>
                {children}
            </section>
        );
    }
}

Permissions.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
};

const mapStateToProps = state => {
    // assumption of an Permissions reducer

    return {};
};

export default connect(mapStateToProps)(Permissions)
