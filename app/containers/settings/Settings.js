import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

/**
 *  Settings Container
 *
 *  @class
 *  @classdesc Container for the Settings section
 */
class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Settings'
    }

    render() {
        const {
            children
        } = this.props;

        return (
            <section className="settings-container">
                <p>Settings section</p>
                {children}
            </section>
        );
    }
}

Settings.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
};

const mapStateToProps = state => {
    // assumption of an Settings reducer

    return {};
};

export default connect(mapStateToProps)(Settings)
