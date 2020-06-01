import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';
import Navbar from './Navbar';
import SingleRobot from './SingleRobot';

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/robots" component={AllRobots} />
          <Route path="/robots/:id" component={SingleRobot} />
          <Route exact path="/projects" component={AllProjects} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
