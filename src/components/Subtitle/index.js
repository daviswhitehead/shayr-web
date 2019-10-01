import React, {Component} from 'react';
import './styles.css';

class Subtitle extends Component {
  
  render() {
    return (
        <text className="Subtitle" style={this.props.style}>{this.props.copy}</text>
    );
  }
}

export default Subtitle;
