import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <div className="row">
    <div className="col s12 m3">
      <img
        className="circle responsive-img"
        src="./assets/images/rbf.png"
        alt="angry face"
      />
    </div>
    <div className="col s12 m9">
      <div className="section">
        <h2>Alvin Go</h2>
        <p className="flow-text">
          I am Full Stack Web developer. I recently graduated from UCLA
          Extension Coding Bootcamp and am ready for a career change into web
          development. I'm passionate about building frontend applications with
          React and interested in learning Android development. Check out my 
          <NavLink to="/projects"> projects!</NavLink>
        </p>
      </div>
    </div>
  </div>
);
