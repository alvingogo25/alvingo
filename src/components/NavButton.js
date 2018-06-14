import React from 'react';
import { NavLink } from 'react-router-dom';

class NavButton extends React.Component {
    render() {
        return (
            <button className="btn">
            <NavLink to={this.props.to}>{this.props.title}</NavLink>
            </button>
        )
    }
}

export default NavButton;