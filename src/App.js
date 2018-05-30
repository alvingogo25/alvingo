import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Projects from './pages/projects';
import Container from './components/Container';
import Particles from './components/Particles';



const App = () => (
  <div>
    <Particles />
    <Container>
    <Router>
      <div>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
        </div>
    </Router>
  </Container>
</div>

  
);

export default App;
