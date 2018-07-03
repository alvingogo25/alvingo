import React from 'react';
import Tab from "./Tab";

const style = {
  backgroundColor: "#B2FFE0"
};
class TabBar extends React.Component {
    render() {
        return <div className="nav-wrapper">
            <ul className="tabs" style={style}>
              <Tab to={"/"} title={"Home"} />
              <Tab to={"/projects"} title={"Projects"} />
              <Tab to={"/contact"} title={"Contact"} />
            </ul>
          </div>;
    }

}

export default TabBar;