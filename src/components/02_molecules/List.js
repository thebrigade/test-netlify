import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const StyledList = styled.div`
  position: relative;
  margin-bottom: 80px;
  padding: 50px 20px 20px;
  background-color: #f5f9fe;
  @media screen and (min-width: 768px) {
    padding: 60px 90px;
    margin-bottom: 40px;
  }
`;

const StyledListIndex = styled.span`
  color: #fff;
  position: absolute;
  background: ${p => p.theme.button.color};
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  opacity: .8;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: 768px) {
    transform: none;
    top: 40px;
    left: -24px;
  } 
`;


const List = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledList>
        <StyledListIndex>
          <span>{props.listIndex}</span>
        </StyledListIndex>
        <div>
          {props.children}
        </div>
      </StyledList>
    </ThemeProvider>
  )
}


export default List;