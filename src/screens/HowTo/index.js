import React, {Component} from 'react';
import './styles.css';
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import Brand from '../../components/Brand'


class HowTo extends Component {
  
  render() {
    return (
      <div className="Screen-container">
        <text>Welcome to Shayr!</text>
        <Brand />
        <Title />
        <Subtitle />
        <Logo />
      </div>
    );
  }
}

export default HowTo;
