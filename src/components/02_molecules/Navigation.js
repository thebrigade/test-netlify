import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }
  static props = {
    children: PropTypes.element
  }
  render() {
    const { children } = this.props;
    return (
      <nav>
        <button className="hamburger"></button>
        <div className="nav-container">
          {children}
        </div>
      </nav>
    )
  }
}


export default Navigation;