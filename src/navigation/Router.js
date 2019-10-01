import React from "react";
import { HashRouter, Switch, Route} from "react-router-dom";
import {screenPaths, HOME, HOW_TO, PRIVACY_POLICY, TERMS_AND_CONDITIONS} from './Routes'
import Home from '../screens/Home'
import HowTo from '../screens/HowTo'
import PrivacyPolicy from '../screens/PrivacyPolicy'
import TermsAndConditions from '../screens/TermsAndConditions'


export default function App() {
  return (
    <HashRouter> {/* basename={process.env.PUBLIC_URL} */}
      <Switch> {/* returns the FIRST matching path */}
        <Route path={screenPaths[HOW_TO]} component={HowTo} />
        <Route path={screenPaths[PRIVACY_POLICY]} component={PrivacyPolicy} />
        <Route path={screenPaths[TERMS_AND_CONDITIONS]} component={TermsAndConditions} />
        <Route exact path={screenPaths[HOME]} component={Home} />
      </Switch>
    </HashRouter>
  );
}