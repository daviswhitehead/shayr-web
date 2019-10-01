import React, {Component} from 'react';
import './styles.css';
import Logo from '../Logo'
import Title from '../Title'
import Subtitle from '../Subtitle'

class Brand extends Component {
  
  render() {
    const {onPress} = this.props;

    return (
      <div>
      <button className="Brand" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRadius: 8,
        margin: 8,
        
      }}
        onClick={onPress}
      >
        <Logo />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'left',
        marginLeft: 8,
        
      }}>
        <Title copy="Shayr"/>
        <Subtitle copy="Discover Together" />
        </div>
      </button>
      </div>
    );
  }
}

export default Brand;
