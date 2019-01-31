import React, { Component } from 'react';
import styled  from 'styled-components';
import { COLOR_PRIMARY_LINK } from '../../theme';
import PropTypes from 'prop-types';
import {NavigationContext} from '../../context/navigation-context';

const StyledHamburger = styled.button`
  position: relative;
  width: 25px;
  height: 15px;
  background: none;
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
  &:active{
    outline: none;
    border: none;
  }
`;


class Hamburger extends Component {
  static props = {
    className: PropTypes.string,
    onToggle: PropTypes.func
  }
  static contextType = NavigationContext;

  render() {
    const { className } = this.props;
    const { state, toggleMobileNav } = this.context;
    return (
      <StyledHamburger
        onClick={() => toggleMobileNav({mobileNavOpen: state.mobileNavOpen ? false : true})}
        active={state.mobileNavOpen}
        className={className}
      >
        <span></span>
      </StyledHamburger>
    )
  }
}


export default Hamburger;