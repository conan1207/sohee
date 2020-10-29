import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Header from "./components/Header";
import ScrollTop from "./components/ScrollTop";

import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";

import "./css/aos/aos.scss"

library.add(fab);

const App = () => {
  return (
    <Router basename="/sohee">
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <ScrollTop />
    </Router>
  );
};

export default App;
