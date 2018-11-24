import { PureComponent } from 'react';
import React from "react";

class ButtonClass extends PureComponent {
  constructor(props) {
    super(props);
    this.buttonFunctionalRef = React.createRef();
  }

  render() {
    return <span ref={this.buttonFunctionalRef}>{this.props.children}</span>
  }
}

export default ButtonClass;
