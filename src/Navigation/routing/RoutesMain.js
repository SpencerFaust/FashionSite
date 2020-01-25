import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import AboutMeMain from "../../about/aboutMeMain";
import resumeMain from "../../resume/resumeMain";
import pastWorkMain from "../../pastWork/pastWorkMain";

const RoutesMain = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={AboutMeMain} />
        <Route exact path="/resume" component={resumeMain} />
        <Route exact path="/past" component={pastWorkMain} />
      </Switch>
    </Router>
  );
};

export default RoutesMain;
