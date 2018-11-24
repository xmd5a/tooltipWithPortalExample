import { Children, PureComponent } from 'react';
import { unmountComponentAtNode, unstable_renderSubtreeIntoContainer } from 'react-dom';
const PORTAL_ID = 'ds-portal';

class Portal extends PureComponent {
  constructor(props) {
    super(props);
    this.portal = null;
  }

  componentDidMount() {
    this.openPortal();
  }

  componentWillUnmount() {
    this.closePortal();
  }

  openPortal() {
    if (this.checkPortalExists() === null) {
      this.portal = global.document.createElement('div');
      this.portal.setAttribute('id', PORTAL_ID);
      document.body.prepend(this.portal);
      // render component into portal
      this.renderComponentIntoPortal();
    }
  }

  renderComponentIntoPortal() {
    return unstable_renderSubtreeIntoContainer(
      this,
      Children.only(this.props.children),
      this.portal,
    );
  }

  closePortal() {
    if (this.checkPortalExists()) {
      unmountComponentAtNode(this.portal);
      document.body.removeChild(this.portal);
    }
  }

  checkPortalExists = () => document.getElementById(PORTAL_ID);

  render() {
    return null;
  }
}

export default Portal;
