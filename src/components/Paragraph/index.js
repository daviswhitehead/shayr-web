import React, {Component} from 'react';
import './styles.css';

export default class extends Component {
  
  render() {
    return (
        <text className="Paragraph" style={this.props.style}>{this.props.copy}</text>
    );
  }
}