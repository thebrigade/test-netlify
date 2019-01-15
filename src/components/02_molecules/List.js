import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const StyledList = styled.div`
  position: relative;
  margin-bottom: 40px;
  padding: 60px 90px;
  background-color: #f5f9fe;
`;

const StyledListIndex = styled.span`
  color: #fff;
  background: ${p => p.theme.button.color};
  position: absolute;
  top: 40px;
  left: -24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  opacity: .8;
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