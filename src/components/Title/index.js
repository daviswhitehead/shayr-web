import React, {Component} from 'react';
import './styles.css';

class Title extends Component {
  
  render() {
    return (
        <text className="Title" style={this.props.style}>{this.props.copy}</text>
    );
  }
}

export default Title;
