import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const StyledContent = styled.article`
  line-height: 1.8;
  font-size: 1.8rem;
  font-weight: 300;
  p{
    margin-bottom: 30px;
    strong{
      color: ${p => p.theme.header.color}
      font-weight: 500;
    }
  }
`;

const Content = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContent>
        {props.children}
      </StyledContent>
    </ThemeProvider>
  )
}


export default Content;