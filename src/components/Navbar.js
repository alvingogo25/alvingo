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
      // <div style={style} className="container">
      //   <NavButton to={"/"} title={"Home"} />
      //   <NavButton to={"/projects"} title={"Projects"} />
      //   <NavButton to={"/contact"} title={"Contact"} />
      // </div>
      <div>
      <nav>
        <div className="container">
          <a href="#!" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul style={style} className="hide-on-med-and-down">
            <li><NavButton to={"/"} title={"Home"} /></li>
            <li><NavButton to={"/projects"} title={"Projects"} /></li>
            <NavButton to={"/contact"} title={"Contact"} />
            
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile">
        <li><NavButton to={"/"} title={"Home"} /></li>
        <li><NavButton to={"/projects"} title={"Projects"} /></li>
        <NavButton to={"/contact"} title={"Contact"} />
        
      </ul>
      </div>
    );
  }
}

export default Navbar;
