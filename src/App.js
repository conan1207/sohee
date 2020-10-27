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

library.add(fab);

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/sohee/" component={About} />
        <Route path="/sohee/projects" component={Projects} />
        <Route path="/sohee/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <ScrollTop />
    </Router>
  );
};

export default App;
