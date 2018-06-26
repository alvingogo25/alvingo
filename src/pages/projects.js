import React from "react";
import ProjectCard from "./../components/ProjectCard";

const style = {
  display: "flex",
  justifyContent: "center"
}

class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
            <ProjectCard
              title="TrackYoSelf"
              app="track-yo-self.herokuapp.com"
              github="https://github.com/Fatkiddh/trackYoSelf"
              note="Journaling app with emotional analysis"
              image="track"
            />
            <ProjectCard
              title="Pixar Memory"
              app="https://alvingogo25.github.io/Clicky-Memory/"
              github="https://github.com/alvingogo25/Clicky-Memory"
              note="React Memory game"
              image="pixar"
            />
        </div>
        <div className="row">
            <ProjectCard
              title="Burger Time"
              app="https://alvin-burger-time.herokuapp.com/"
              github="https://github.com/alvingogo25/burger"
              note="CRUD methods with burgers and SQL"
              image=""
            />
            <ProjectCard
              title="Toy Story Trivia"
              app="https://alvingogo25.github.io/TriviaGame/"
              github="https://github.com/alvingogo25/TriviaGame"
              note="Javascript Trivia Game built with jquery"
              image=""
            />
        </div>
      </div>
    );
  }
}

export default Projects;
