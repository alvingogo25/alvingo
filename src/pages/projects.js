import React from "react";
import ProjectCard from "./../components/ProjectCard";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <ProjectCard
          title="TrackYoSelf"
          app="https://track-yo-self.herokuapp.com"
          github="https://github.com/Fatkiddh/trackYoSelf"
          note="Journaling with emotional analysis"
          image="record"
        />
        <ProjectCard
          title="Pixar Memory"
          app="https://alvingogo25.github.io/Clicky-Memory/"
          github="https://github.com/alvingogo25/Clicky-Memory"
          note="React Memory game"
          image="walle"
        />
        <ProjectCard
          title="Burger Time"
          app="https://alvin-burger-time.herokuapp.com/"
          github="https://github.com/alvingogo25/burger"
          note="CRUD methods with burgers and SQL"
          image="burger"
        />
        <ProjectCard
          title="Toy Story Trivia"
          app="https://alvingogo25.github.io/TriviaGame/"
          github="https://github.com/alvingogo25/TriviaGame"
          note="Javascript Trivia Game built with jquery"
          image="toys"
        />
      </div>
    );
  }
}

export default Projects;
