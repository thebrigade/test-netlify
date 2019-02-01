import React from 'react';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  display: block;
  width: auto;
  a{
    margin-right: 0px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    a{
      margin-right: 20px;
    }
  }
`;
const ButtonGroup = (props) => {
  return (
    <StyledButtonGroup>
      {props.children}
    </StyledButtonGroup>
  )
}

export default ButtonGroup;