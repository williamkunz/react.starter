// NOTE: Header should remain a component and have user data passed in from App

import React, {Component} from 'react'
import { Link } from 'react-router'

// css
import './header.css';

/**
 *  Header Component
 *
 *  @class
 *  @classdesc Component that holds all the Header elements
 */
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }

    render() {
        return (
            <header className="header">
                <Link to="/applications">Applications</Link>
                <Link to="/hosts">Hosts</Link>
                <Link to="/metrics">Metrics</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/logs">Logs?</Link>
                <Link to="/events">Events</Link>
                <Link to="/permissions">Permissions</Link>
            </header>
        );
    }
}
