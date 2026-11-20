import { Component } from 'react';
import PropTypes from 'prop-types';

export default class CityErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    const { failed } = this.state;
    const { children, onClassic } = this.props;
    if (failed) {
      return (
        <div className="cp-fallback" role="alert">
          <div>
            <h1>City mode is unavailable</h1>
            <p>
              This browser could not draw the 3D city. The classic portfolio has the same work,
              in a standard layout.
            </p>
            <button type="button" onClick={onClassic}>Open classic portfolio</button>
          </div>
        </div>
      );
    }
    return children;
  }
}

CityErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  onClassic: PropTypes.func.isRequired,
};
