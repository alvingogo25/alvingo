import React from 'react';
import { NavLink } from 'react-router-dom';

class NavButton extends React.Component {
    render() {
        return <NavLink to={this.props.to}>
            <button className="btn-large">{this.props.title}</button>
          </NavLink>;
    }
}

export default NavButton;