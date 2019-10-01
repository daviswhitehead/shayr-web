import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {screenPaths, HOME, HOW_TO} from './Routes'
import Home from '../screens/Home'
import HowTo from '../screens/HowTo'


export default function App() {
  return (
    <Router>
      <Switch> {/* returns the FIRST matching path */}
        <Route path={screenPaths[HOW_TO]}>
          <HowTo />
        </Route>
        <Route path={screenPaths[HOME]}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}