import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  color: "#272932", 
  fontWeight: "bolder", 
  fontSize: "15px" 
};

class Tab extends React.Component {
  render() {
    return (
      <li className="tab">
        <NavLink to={this.props.to}>
          <span style={style}>{this.props.title}</span>
        </NavLink>
      </li>
    );
  }
}

export default Tab;
