import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
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
const copyDate = new Date().getFullYear();
const Footer = (props) => (
  <ThemeProvider theme={theme}>
    <StyledFooter>
      <div>
       <p>{(`Copyright &copy; ${copyDate} Tezos. All rights reserved.`)}</p>
        
      </div>
    </StyledFooter>
  </ThemeProvider>
)

export default Footer
