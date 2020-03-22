import React from 'react';
import Homepage from './homepage';
import About from './about';
import Projects from './projects';
import Resume from './resume';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/fork1028_website" component={Homepage} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
