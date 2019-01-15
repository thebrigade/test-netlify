import React from 'react';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: flex-start;
  width: auto;
  a{
    margin-right: 20px;
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