import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';


const StyledButton = styled.a`
  display: block;
  border-radius: 100px;
  background: white;
  padding: 3px;
  img{
    display: block;
    width: 100%;
    height: auto;
  }
`;


class LinkSocial extends Component {
  static props = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    iconImage: PropTypes.string.isRequired
  }

  createButton() {
    const { 
      to,
      iconImage
    } = this.props;

    let props = {
      title: text,
      href: to,
      target: "_blank"
    };

    if(iconDirectionReverse) {
      props.iconDirectionReverse = true
    }
    
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