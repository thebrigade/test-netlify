import React, { Component } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import PropTypes from 'prop-types';
import { navigate } from "gatsby"
import theme from '../../theme';
import ReactHtmlParser from 'react-html-parser';

const buttonStyle = (theme) => {
  const regularStyle = css`
    background: ${theme.background};
    color: ${theme.color};
    border: 2px solid ${theme.background};
    &:visited{
      color: ${theme.color};
    }
  `;
  const inverseStyle = css`
    background: none;
    color: black;
    border: 2px solid black;
  `;
  return p => p.inverse ? inverseStyle : regularStyle;
}

const getPadding = (p) => {
  const hasImage = typeof p.iconImage !== 'undefined';
  let pad;
  if (!hasImage) {
    pad = css`
      padding: ${p => p.buttonModifier ? '14px 40px' : '0px'};
    `;
  } else {
    pad = css`
      padding: 14px 40px 14px 60px;
    `;
  }
  
  return pad;
}

const StyledButton = styled.a`
  ${p => p.buttonModifier ? buttonStyle(p.theme.buttonBig, p) : buttonStyle(p.theme.button)};
  ${getPadding};
  display: flex;
  text-decoration: none;
  line-height: 1;
  font-weight: 300;
  text-align: ${p => p.buttonModifier ? 'center' : 'left'};
  border-radius: ${p => p.buttonModifier ? '100px' : '0px'};
  text-transform: ${p => p.smallTxt ? 'normal' : 'uppercase'};
  flex-direction: ${p => p.iconDirectionReverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-around;
  opacity: 1;
  white-space: nowrap;
  position: relative;
  img{
    margin: 0 10px;
    display: block;
    width: 100%;
    height: auto;
    max-width: ${p => p.iconSmall ? 14 : 25}px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
  }
  &:hover{
    opacity: .8;
  }
`;


class Button extends Component {
  static props = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string,
    external: PropTypes.bool,
    buttonBig: PropTypes.bool,
    iconDirectionReverse: PropTypes.bool,
    iconImage: PropTypes.string,
    inline: PropTypes.bool,
    iconSmall: PropTypes.bool,
    smallTxt: PropTypes.bool,
    inverse: PropTypes.bool,
    callBack: PropTypes.func
  }

  static defaultProps = {
    external: false,
    buttonBig: false,
    iconDirectionReverse: false,
    iconSmall: false,
    smallTxt: false,
    inverse: false,
    callBack: null
  }

  createButton() {
    const { 
      to,
      text,
      external,
      buttonBig,
      iconImage,
      iconDirectionReverse,
      inline,
      className,
      smallTxt,
      inverse,
      callBack
    } = this.props;

    let props = {
      title: text,
      buttonModifier: buttonBig,
      inline: inline,
      iconImage: iconImage,
      className: className,
      rel: "noopener noreferrer",
      smallTxt: smallTxt,
      inverse: inverse
    };
    
    if(external) {
      // if external launch a new tab
      props.href = to;
      props.target = "_blank"
      if (typeof callBack === 'function') {
        props.onClick = (e) => {
          callBack();
        }
      }
    } else {
      // if to prop exists AND external is null use navigate
      if (typeof to === 'string') {
        props.href = "#";
        props.onClick = (e) => {
          navigate(to)
          if (typeof callBack === 'function') {
            callBack();
          }
          e.preventDefault();
        }
      } else {
        // allow for non-href button actions
        props.href = "#";
        props.onClick = (e) => {
          if (typeof callBack === 'function') {
            callBack();
          }
          e.preventDefault();
        };
      }
      
    }
    
    if(iconDirectionReverse) {
      props.iconDirectionReverse = true
    }
    
    return (
      <StyledButton {...props}>
        {typeof iconImage !== 'undefined' ? <img src={iconImage} alt="label"/> : null}
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