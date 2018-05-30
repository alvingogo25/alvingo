import React from "react";
import ProjectCard from "./../components/ProjectCard";

export default () => (
  <div className="section">
    <div className="row">
      <div className="col s12 m4">
        <ProjectCard />
      </div>
      <div className="col s12 m4">
        <ProjectCard />
      </div>
    </div>
    <div className="row">
      <div className="col s12 m4">
        <ProjectCard />
      </div>
      <div className="col s12 m4">
        <ProjectCard />
      </div>
    </div>
  </div>
);
