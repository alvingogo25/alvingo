import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <div
    className="row"
    style={{
      color: "#DEE5E5"
    }}>
    
    <div className="col s10 offset-s1 m8 offset-m2">
      <div className="section">
        <p className="flow-text">
          I am a Full Stack Web developer. I recently graduated from UCLA
          Extension Coding Bootcamp and am ready for a career change into web
          development. I'm passionate about building front end applications with
          React and interested in learning Android development. Check out my
          <NavLink to="/projects"> projects!</NavLink>
        </p>
      </div>
    </div>
  </div>
);
