import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import AboutMeMain from "../../about/aboutMeMain";
import resumeMain from "../../resume/resumeMain";
import pastWorkMain from "../../pastWork/pastWorkMain";
import { ABOUT_PATH, RESUME_PATH, PAST_WORK_PATH } from "./constants.route";
import navigationStyles from "../NavigationStyles/NavigationStyles";

const RoutesMain = () => {
  return (
    <Router>
      <view>
        <view style={navigationStyles.menuLinks}>
          <Link to="/about" style={navigationStyles.removeLinkStyle}>
            About
          </Link>
          <Link to="/pastWork" style={navigationStyles.removeLinkStyle}>
            Past Work
          </Link>
          <Link to="/resume" style={navigationStyles.removeLinkStyle}>
            Resume
          </Link>
        </view>
      </view>
      <Switch>
        <Route exact path={ABOUT_PATH} component={AboutMeMain} />
        <Route exact path={RESUME_PATH} component={resumeMain} />
        <Route exact path={PAST_WORK_PATH} component={pastWorkMain} />
      </Switch>
    </Router>
  );
};

export default RoutesMain;
