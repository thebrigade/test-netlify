import React, { Component, Children } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme, { COLOR_PRIMARY_LINK } from '../../theme';
import Hamburger from '../01_atoms/Hamburger';

const StyledNav = styled.nav`

  position: relative;
  .hamburger{
    position: absolute;
  }
`;

const StyledNavGroup = styled.div`
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
`;


class Navigation extends Component {
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
    return (
      <ThemeProvider theme={theme}>
        <StyledNav>
          <Hamburger className="hamburger"/>
          <StyledNavGroup>
            <ul>
              {this.createLinks()}
            </ul>
          </StyledNavGroup>
        </StyledNav>
      </ThemeProvider>
    )
  }
}


export default Navigation;