import React from "react";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Animation from "./components/pages/Animation";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/main" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/Animation" exact component={Animation} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
}

export default App;