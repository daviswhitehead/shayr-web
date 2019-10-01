import React, {Component} from 'react';
import BottomBar from '../../components/BottomBar'
import {
  isMobile
} from "react-device-detect";
import './styles.css';


class Home extends Component {
  
  render() {
    return (
      <div className="Screen-container">
        <BottomBar isMobile={isMobile} />
      </div>
    );
  }
}

export default Home;
