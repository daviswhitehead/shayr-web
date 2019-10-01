import React, {Component} from 'react';
import BottomBar from '../../components/BottomBar'
import {
  isMobile
} from "react-device-detect";
import './styles.css';
import { Player, ControlBar, Shortcut } from 'video-react';
import video from '../../assets/videos/compiled.mov';
import DownloadPrompt from '../../components/DownloadPrompt';
import Brand from '../../components/Brand'



class Home extends Component {
  
  render() {
    return (
      <div className="Screen-container-stretch">
        <div className="video-block">

        
        <Player
          fluid
          autoPlay
          muted
          loop
          controls={false} 
          src={video}
        >
          <Shortcut clickable={false} dblclickable={false} />
          <ControlBar disableCompletely disableDefaultControls className="my-class" />
        </Player>
        <div className='download-prompt'>
          <Brand />
          <DownloadPrompt />
        </div>
        </div>
        <BottomBar isMobile={isMobile} />
      </div>
    );
  }
}

export default Home;
