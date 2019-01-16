import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Hamburger from '../01_atoms/Hamburger';

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
        a{margin: 0; max-width: auto;}
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
  constructor(props) {
    super(props);
    this.state = { mobileNavOpen: false }
  }
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
  hamburgerToggle(e) {
    console.log(e.state.open);
    this.setState({mobileNavOpen: e.state.open})
  }
  render() {
    const {mobileNavOpen} = this.state;
    return (
      <ThemeProvider theme={theme}>
        <StyledNav>
          <StyledNavGroup showNav={mobileNavOpen}>
            <ul>
              {this.createLinks()}
            </ul>
          </StyledNavGroup>
          <StyledNavHamburger onToggle={(e) => this.hamburgerToggle(e)}/>
        </StyledNav>
      </ThemeProvider>
    )
  }
}


export default Navigation;