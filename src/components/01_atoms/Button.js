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
  display: inline-flex;
  text-decoration: none;
  line-height: 1em;
  text-align: ${p => p.buttonModifier ? 'center' : 'left'};
  border-radius: ${p => p.buttonModifier ? '25px' : '0px'};
  text-transform: ${p => p.inline ? 'normal' : 'uppercase'};
  font-weight: ${p => p.inline ? 'normal' : '500'};
  flex-direction: ${p => p.iconDirectionReverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-around;
  img{
    margin: 0 20px;
  }
`;


class Button extends Component {
  static props = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    external: PropTypes.bool,
    buttonBig: PropTypes.bool,
    iconDirectionReverse: PropTypes.bool,
    iconImage: PropTypes.string,
    inline: PropTypes.bool
  }

  static defaultProps = {
    external: false,
    buttonBig: false,
    iconDirectionReverse: false,
  }

  createButton() {
    const { 
      to,
      text,
      external,
      buttonBig,
      iconImage,
      iconDirectionReverse,
      inline
    } = this.props;

    let props = {
      title: text,
      buttonModifier: buttonBig,
      inline: inline
    };
    
    if(external) {
      props.href = to;
      props.target = "_blank"
    } else {
      props.href = '#';
      props.onClick = (e) => {
        navigate(to)
        e.preventDefault();
      }
    }

    if(iconDirectionReverse) {
      props.iconDirectionReverse = true
    }
    
    return (
      <StyledButton {...props}>
        {typeof(iconImage) !== 'undefined' ? <img src={iconImage} alt="label"/> : null}
        {text}
      </StyledButton>
    )
  }
  
  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.createButton()}
      </ThemeProvider>
    )
  }
}


export default Button;