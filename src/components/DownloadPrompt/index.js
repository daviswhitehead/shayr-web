import React, {Component} from 'react';
import './styles.css';

export default class extends Component {
  
  render() {
    return (
      <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'left'
      }}
      >
        <a href='https://apps.apple.com/app/id1450594568'>
        <img src='https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg' alt='iOS Store Button' style={{
            width: 126,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10
          }}/>
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.daviswhitehead.shayr.android.prod' >
        <img src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' alt='Android Store Button' style={{
            width: 144,
          }}/>
        </a>
    </div>
    );
  }
}