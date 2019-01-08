import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.article`
  line-height: 1.8;
  font-size: 1.8rem;
  font-weight: 300;
`;

const Content = (props) => {
  return (
    <StyledContent>
      {props.children}
    </StyledContent>
  )
}


export default Content;