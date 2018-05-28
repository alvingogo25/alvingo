import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';

const center= {
  display: "flex",
  alignItems: 'center',
  marginTop: "150px",
}

const App = () => (
  <div className="container" style={center}>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </div>
);

export default App;
