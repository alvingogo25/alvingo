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
        <NavButton to={"/alvingo/"} title={"Home"} />
        <NavButton to={"/alvingo/projects"} title={"Projects"} />
        <NavButton to={"/alvingo/contact"} title={"Contact"} />
      </div>
    );
  }
}

export default Navbar;
