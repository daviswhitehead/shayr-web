import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {screenPaths, HOME, HOW_TO, PRIVACY_POLICY, TERMS_AND_CONDITIONS} from './Routes'
import Home from '../screens/Home'
import HowTo from '../screens/HowTo'
import PrivacyPolicy from '../screens/PrivacyPolicy'
import TermsAndConditions from '../screens/TermsAndConditions'


export default function App() {
  return (
    <Router>
      <Switch> {/* returns the FIRST matching path */}
        <Route path={screenPaths[HOW_TO]}>
          <HowTo />
        </Route>
        <Route path={screenPaths[PRIVACY_POLICY]}>
          <PrivacyPolicy />
        </Route>
        <Route path={screenPaths[TERMS_AND_CONDITIONS]}>
          <TermsAndConditions />
        </Route>
        <Route path={screenPaths[HOME]}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}