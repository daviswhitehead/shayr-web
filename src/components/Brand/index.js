import React, {Component} from 'react';
import './styles.css';
import Logo from '../Logo'
import Title from '../Title'
import Subtitle from '../Subtitle'

class Brand extends Component {
  
  render() {
    return (
      <div className="Brand" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
        
      }}>
        <Logo />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'left',
        marginLeft: 8,
        
      }}>
        <Title />
        <Subtitle />
        </div>
      </div>
    );
  }
}

export default Brand;
