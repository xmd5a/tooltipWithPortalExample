import React, { cloneElement, PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import Tooltip from './Tooltip';
import TooltipWithRef from './TooltipWithRef';
import { uniqueId } from 'lodash';

class TooltipWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.element = null;
    this.elementRef = null;
    this.state = {
      isVisible: false,
    }
  }

  componentDidMount() {
    this.bindEvents();
  }

  isStateless(component) {
    return typeof component.type !== 'string' && component.type.prototype.render !== 'undefined'
  }

  bindEvents() {
    React.Children.forEach(this.props.children, (child) => {
      this.element = findDOMNode(this.refs[this.elementRef]);
      this.element.addEventListener('mouseenter', this.toggleTooltip);
      this.element.addEventListener('mouseleave', this.toggleTooltip);
    });
  }

  toggleTooltip = () => this.setState({
    isVisible: !this.state.isVisible
  });

  // clone element because we need to add refs
  addRefToElement(element) {
    return React.Children.map(element, (child) => {
      const component = this.isStateless(child) ? <TooltipWithRef>{child}</TooltipWithRef> : child;
      this.elementRef = uniqueId('ds-tooltip');
      const ref = component.ref ? component.ref : this.elementRef;
      return cloneElement(component, {
        ref: ref
      })
    })
  }

  render() {
    const { children } = this.props;

    return (
      <>
        {this.addRefToElement(children)}
        <Tooltip isVisible={this.state.isVisible}>
          { this.props.content }
        </Tooltip>
      </>
    )
  }
}

export default TooltipWrapper;
