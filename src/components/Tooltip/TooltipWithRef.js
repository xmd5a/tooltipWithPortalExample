import React, { PureComponent } from 'react';

class TooltipWithRef extends PureComponent {
  render() {
    return (
      <span>{this.props.children}</span>
    );
  }
}

export default TooltipWithRef;
