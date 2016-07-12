import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

/**
 *  Setup Container
 *
 *  @class
 *  @classdesc Container for the Setup section
 */
class Setup extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Setup'
    }

    render() {
        const {
            children
        } = this.props;

        return (
            <section className="setup-container">
                <p>Setup section</p>
                {children}
            </section>
        );
    }
}

Setup.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
};

const mapStateToProps = state => {
    // assumption of an Setup reducer

    return {};
};

export default connect(mapStateToProps)(Setup)
