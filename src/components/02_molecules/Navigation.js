import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Hamburger from '../01_atoms/Hamburger';
import {NavigationContext} from '../../context/navigation-context';

const StyledNavHamburger = styled(Hamburger)``
const StyledNavGroup = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  left: ${p => p.showNav ? 0 : 100}%;
  position: fixed;
  width: 100vw;
  height: 100vh;
  transition: all .5s;
  background: #1a2734;
  ul, li{
    list-style: none;
  }
  ul{
    display: block;
    width: 100%;
    text-align: center;
    li{
      margin: 0 0 30px;
      text-align: center;
      display: block
      &:last-child{margin: 0;}
      a{
        margin: 0 auto;
        display: inline-flex;
        font-size: 2.2rem;
        img{
          display: inline-block;
        }
      }
    }
  }
  
  @media screen and (min-width: 768px) {
    display: block;
    left: auto;
    position: relative;
    width: auto;
    height: auto;
    transition: all .5s;
    background: none;
    ul{
      width: auto;
      display: flex;
      align-items: center;
      li{
        margin: 0 60px 0 0;
        &:last-child{margin: 0;}
        a{margin: 0; max-width: auto; font-size: 1.6rem;}
      }
    }
  }
`;

const StyledNav = styled.nav`
  position: relative;
  ${StyledNavHamburger}{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -7px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

class Navigation extends Component {
  static contextType = NavigationContext;
  createLinks() {
    const { children } = this.props;
    return React.Children.map(children, (el) => {
      return (
        <li>
          {el}
        </li>
      )
    })
  }
  render() {
    const { state } = this.context
    return (
      <ThemeProvider theme={theme}>
        <StyledNav>
          <StyledNavGroup showNav={state.mobileNavOpen}>
            <ul>
              {this.createLinks()}
            </ul>
          </StyledNavGroup>
          <StyledNavHamburger />
        </StyledNav>
      </ThemeProvider>
    )
  }
}


export default Navigation;