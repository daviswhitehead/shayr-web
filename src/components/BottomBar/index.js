import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import {
  HOME,
  ABOUT,
  HOW_TO,
  CONTACT,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS,
  screenPaths,
  screenNames
} from '../../navigation/Routes'

class BottomBar extends Component {
  
  render() {
    const {isMobile} = this.props
    return (
      <div className={`Container ${isMobile ? 'Mobile' : 'Desktop'}`}>
        <Link className="Link" to={screenPaths[HOME]}>{screenNames[HOME]}</Link>
        <Link className="Link" to={screenPaths[ABOUT]}>{screenNames[ABOUT]}</Link>
        <Link className="Link" to={screenPaths[HOW_TO]}>{screenNames[HOW_TO]}</Link>
        <Link className="Link" to={screenPaths[CONTACT]}>{screenNames[CONTACT]}</Link>
        <Link className="Link" to={screenPaths[PRIVACY_POLICY]}>{screenNames[PRIVACY_POLICY]}</Link>
        <Link className="Link" to={screenPaths[TERMS_AND_CONDITIONS]}>{screenNames[TERMS_AND_CONDITIONS]}</Link>
      </div>
    );
  }
}

export default BottomBar;
