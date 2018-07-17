import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <div
    className="col s10 offset-s1"
    style={{
      color: "#DEE5E5"
    }}>
    <div className="section">
      <p className="flow-text">
        Hello! I'm a web developer with 5 years experience in GIS in the utilities sector. After multiple field jobs, I decided to follow my interest in technology through coding. I'm passionate about building eye-catching applications and interested in learning Android development. Check out my
        <NavLink to="/projects"> projects!</NavLink>
        <br/>
        <br/>
        Hobbies: Fitness, Sports <img src={`${window.location.origin}/assets/images/gsw.png`} alt="warriors" style={{height:"20px", width:"20px"}} />, Pokemon Go <img src={`${window.location.origin}/assets/images/valor.png`} alt="valor"/> 
      </p>
    </div>
  </div>
);
