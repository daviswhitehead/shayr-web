import React, {Component} from 'react'
import { Redirect } from 'react-router';

export default (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirectPath: ''
      };
    }

    navigateToPath = (pathName) => {
      this.setState({
        redirectPath: pathName
      });
    }

    render() {
      const {redirectPath} = this.state;
      if (!!redirectPath) {
        return <Redirect push to={redirectPath} />;
      }
      return <WrappedComponent navigateToPath={this.navigateToPath} {...this.props} />;
    }
  };
}
