import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Container from "./components/Container";
import Particles from "./components/Particles";
import TabBar from "./components/TabBar";

const App = () => (
  <div>
    <Particles />
    <Router>
      <Container>
          <TabBar />
        <div className="col s12 m9">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Container>
    </Router>
  </div>
);

export default App;
