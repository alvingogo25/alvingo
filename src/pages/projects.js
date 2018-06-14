import React from "react";
import ProjectCard from "./../components/ProjectCard";

export default () => (
  <div className="section">
    <div className="row">
      <ProjectCard>
        <p>this is my first project</p>
      </ProjectCard>
      <ProjectCard>
        <p>this is my second project</p>
      </ProjectCard>
    </div>
    <div className="row">
      <ProjectCard>
        <p>this is my third project</p>
      </ProjectCard>
      <ProjectCard>
        <p>this is my fourth project</p>
      </ProjectCard>
    </div>
  </div>
);
