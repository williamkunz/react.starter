import React, {Component} from 'react';

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
            <header className="header">Sample Header</header>
        );
    }
}
