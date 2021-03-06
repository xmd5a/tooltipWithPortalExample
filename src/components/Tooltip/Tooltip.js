import React, { PureComponent } from 'react';
import Portal from '../Portal/Portal';

class Tooltip extends PureComponent {
  render() {
    return this.props.isVisible && <Portal>
      <span className="ds-tooltip">{this.props.children}</span>
    </Portal>;
  }
}

export default Tooltip;
