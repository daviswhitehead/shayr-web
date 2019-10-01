import React, {Component} from 'react';
import './styles.css';
// import {ReactComponent as ShayrLogo} from '../../assets/images/shayr-logo2.svg'
import {ReactComponent as ShayrLogo} from '../../assets/images/shayr-logo.svg'

class Logo extends Component {
  
  render() {
    const {width} = this.props

    return (
      <div style={{
        width: width ? width : 32,
        height: 'auto',
      }}>

        <ShayrLogo height={'100%'} width={'100%'} />
      </div>
    );
  }
}

export default Logo;
