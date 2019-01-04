import React, { Component, Children } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme, { COLOR_PRIMARY_LINK } from '../../theme';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  position: relative;
  width: 25px;
  height: 15px;
  &:before, &:after{content: '';}
  &:before, &:after{
    display: block;
    width: 100%;
    height: 2px;
    background: ${COLOR_PRIMARY_LINK};
    position: absolute;
    left: 0;
  }
  &:before{
    opacity: ${p => p.active ? '0' : '1'};
    top: ${p => p.active ? '-10px' : '0px'};
    transition: all .4s;
  }
  &:after{
    opacity: ${p => p.active ? '0' : '1'};
    bottom: ${p => p.active ? '-10px' : '0px'};
    transition: all .4s;
  }
  span{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    &:before, &:after{
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: ${COLOR_PRIMARY_LINK};
      position: absolute;
      left: 50%;
      top: 50%;
      transition: transform .4s;
    }
    &:before{
      transform: translateY(-50%) translateX(-50%) rotate(${p => p.active ? 45 : 0}deg);
    }
    &:after{
      transform: translateY(-50%) translateX(-50%) rotate(${p => p.active ? -45 : 0}deg);
    }
  }
  &:hover{
    cursor: pointer;
  }
`;


class Hamburger extends Component {
  static props = {
    className: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = { open: false }
  }
  toggleMenu() {
    const { open } = this.state;

    if(open) {
      this.setState({open: false})
    } else {
      this.setState({open: true});
    }    
  }
  render() {
    const { open, className } = this.state;
    return (
      <StyledHamburger
        onClick={() => this.toggleMenu()}
        active={open}
        className={className}
      >
      <span></span>
      </StyledHamburger>
    )
  }
}


export default Hamburger;