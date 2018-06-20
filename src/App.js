import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Projects from './pages/projects';
import Container from './components/Container';
import Particles from './components/Particles';
import Navbar from './components/Navbar';



const App = () => (
  <Router>
    <div>
      <Particles />
      <Container>
        <Route exact path="/alvingo/" component={Home} />
        <Route path="/alvingo/projects" component={Projects} />
        {/* <Route path="/contact" component={Contact} /> */}

      </Container>
      <Navbar />

    </div>
  </Router>
);

export default App;
