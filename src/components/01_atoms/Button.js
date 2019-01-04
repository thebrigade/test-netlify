import React, { Component } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import PropTypes from 'prop-types';
import { navigate } from "gatsby"
import theme from '../../theme';


const buttonStyle = (theme) => {
  return css`
    background: ${theme.background};
    color: ${theme.color};
    &:visited{
      color: ${theme.color};
    }
  `
}

const StyledButton = styled.a`
  ${p => p.buttonModifier ? buttonStyle(p.theme.buttonBig) : buttonStyle(p.theme.button)};
  padding: ${p => p.buttonModifier ? '17px 40px' : '0px'};
  display: inline-block;
  text-decoration: none;
  line-height: 1em;
  text-align: ${p => p.buttonModifier ? 'center' : 'left'};
  border-radius: ${p => p.buttonModifier ? '25px' : '0px'};
  text-transform: uppercase;
  font-weight: 500;
`;


class Button extends Component {
  static props = {
    text: PropTypes.string,
    to: PropTypes.string,
    external: PropTypes.bool,
    buttonBig: PropTypes.bool
  }
  static defaultProps = {
    text: '',
    to: '/',
    external: false,
    buttonBig: false
  }
  createButton() {
    const { to, text, external, buttonBig } = this.props;
    if(external) {
      return (
        <StyledButton href={to} target="_blank" title={text} buttonModifier={buttonBig}>
          {text}
        </StyledButton>
      )
    } else {
      return (
        <StyledButton href="#" onClick={() => navigate(to)} title={text} buttonModifier={buttonBig}>
          {text}
        </StyledButton>
      )
    }
  }
  render() {
    const { text, to } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {this.createButton()}
      </ThemeProvider>
    )
  }
}


export default Button;