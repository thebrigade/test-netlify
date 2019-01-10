import React, { Component } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import PropTypes from 'prop-types';
import { navigate } from "gatsby"
import theme from '../../theme';
import ReactHtmlParser from 'react-html-parser';

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
  display: flex;
  text-decoration: none;
  line-height: 1;
  text-align: ${p => p.buttonModifier ? 'center' : 'left'};
  border-radius: ${p => p.buttonModifier ? '100px' : '0px'};
  text-transform: ${p => p.inline ? 'normal' : 'uppercase'};
  font-weight: ${p => p.inline ? 'normal' : '500'};
  flex-direction: ${p => p.iconDirectionReverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-around;
  img{
    margin: 0 10px;
    display: block;
    width: 100%;
    height: auto;
    max-width: ${p => p.iconSmall ? 14 : 25}px;
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
    inline: PropTypes.bool,
    iconSmall: PropTypes.bool
  }

  static defaultProps = {
    external: false,
    buttonBig: false,
    iconDirectionReverse: false,
    iconSmall: false
  }

  createButton() {
    const { 
      to,
      text,
      external,
      buttonBig,
      iconImage,
      iconDirectionReverse,
      iconSmall,
      inline,
      className
    } = this.props;

    let props = {
      title: text,
      buttonModifier: buttonBig,
      inline: inline,
      iconSmall: iconSmall,
      className: className
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
        {ReactHtmlParser(text)}
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