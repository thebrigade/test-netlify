import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { navigate } from "gatsby"

const StyledButton = styled.a`
  background: none;
`;

class Button extends Component {
  static props = {
    text: PropTypes.string,
    to: PropTypes.string,
    external: PropTypes.bool
  }
  static defaultProps = {
    text: '',
    to: '/',
    external: false
  }
  createButton() {
    const { to, text, external } = this.props;
    if(external) {
      return (
        <StyledButton href={to} target="_blank" title={text}>
          {text}
        </StyledButton>
      )
    } else {
      return (
        <StyledButton href="#" onClick={() => navigate(to)} title={text}>
          {text}
        </StyledButton>
      )
    }
  }
  render() {
    const { text, to } = this.props;
    return (
      this.createButton()
    )
  }
}


export default Button;