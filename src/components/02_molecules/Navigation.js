import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Hamburger from '../01_atoms/Hamburger';

const StyledNavHamburger = styled(Hamburger)``

const StyledNavGroup = styled.div`
  display: none;
  ul, li{
    list-style: none;
  }
  ul{
    display: flex;
    align-items: center;
    li{
      margin-left: 60px;
      &:first-child{margin: 0;}
    }
  }
  @media screen and (min-width: 768px) {
    display: block;
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