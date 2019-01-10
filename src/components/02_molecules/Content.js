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
  ul li{
    list-style: none;
    margin-bottom: 10px;
    padding-right: 20px;
    overflow: hidden;
    &:before{
      content: "";
      display: block;
      position: relative;
      top: 10px;
      background-size: 10px;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 5px solid #8ba1cd;
      float: left;
      margin-right: 10px;
    }
    a{
      font-size: 1.6rem;
      text-decoration: none;
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