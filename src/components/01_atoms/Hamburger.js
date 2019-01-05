import React, { Component } from 'react';
import styled  from 'styled-components';
import { COLOR_PRIMARY_LINK } from '../../theme';
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
  constructor(props) {
    super(props);
    this.state = { open: false }
  }
  toggleMenu() {
    const { onToggle } = this.props
    const { open } = this.state;

    if(open) {
      this.setState({open: false})
    } else {
      this.setState({open: true});
    }
    onToggle(this); 
  }
  render() {
    const { open } = this.state;
    const { className } = this.props;
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