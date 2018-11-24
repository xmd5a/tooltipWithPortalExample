import React, { PureComponent } from 'react';
import Portal from '../Portal/Portal';

class Tooltip extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const tooltip = this.props.isVisible && <Portal>
      <span className="ds-tooltip">{this.props.children}</span>
    </Portal>;

    return tooltip;
  }
}

export default Tooltip;
