import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';


const StyledButton = styled.a`
  display: block;
  border-radius: 100px;
  background: white;
  padding: 5px;
  position: relative;
  bottom: 0;
  transition:  all .4s;
  &:hover{
    bottom: 5px;
  }
  img{
    display: block;
    width: 100%;
    height: auto;
    filter: brightness(1.5) invert(1) sepia(1) saturate(1) hue-rotate(160deg);
  }
`;


class LinkSocial extends Component {
  static props = {
    to: PropTypes.string.isRequired,
    iconImage: PropTypes.string.isRequired
  }

  createButton() {
    const { 
      to,
      iconImage
    } = this.props;

    let props = {
      href: to,
      target: "_blank"
    };
    
    return (
      <StyledButton {...props}>
        <img src={iconImage} alt="label"/>
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


export default LinkSocial;