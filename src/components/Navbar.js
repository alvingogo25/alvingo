import React from "react";
import NavButton from "./NavButton";

const style={
    position: "relative",
    display: "flex",
    alignItems: 'flex-end',
    justifyContent: 'space-around'
}

class Navbar extends React.Component {
  render() {
    return (
      <div style={style} className="container">
        <NavButton to={"/"} title={"Home"} />
        <NavButton to={"/projects"} title={"Projects"} />
        <NavButton to={"/contact"} title={"Contact"} />
      </div>
    );
  }
}

export default Navbar;
