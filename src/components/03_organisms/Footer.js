import React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components';
import Navigation from '../02_molecules/Navigation';
import * as logoImage from '../../images/logo-tezos.svg';
import Logo from '../01_atoms/Logo';
import Button from '../01_atoms/Button';
import * as mediumImage from '../../images/icons/logo-medium.png';
import theme from '../../theme';

const StyledFooter = styled.footer`
  width: 100%;
  background: ${p => p.theme ? p.theme.footer.background : 'inherit'};
  color: ${p => p.theme ? p.theme.footer.color : 'inherit'};
  & > div{
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 100px 0;
  }
  h1{
    margin: 0;
  }
`;

const Footer = (props) => (
  <ThemeProvider theme={theme}>
    <StyledFooter>
      <div>
       <p>Copyright &copy; 2018 Tezos. All rights reserved.</p>
        
      </div>
    </StyledFooter>
  </ThemeProvider>
)

export default Footer
