import React from 'react';
import styled from 'styled-components';

const StyledIconImage = styled.img`
  margin-right: 50px;
  display: block;
  width: 100%;
  max-width: 57px;
  transition: all .4s;
`;

const StyledTwoColIconMarkup = styled.article`
  display: flex;
  align-items: flex-start;
  & > div {
    width: auto;
  }
`;

const TwoColIconMarkup = (props) => {
  return (
    <StyledTwoColIconMarkup>
      <StyledIconImage src={props.icon} alt="label" />
      <div>
        {props.children}
      </div>
    </StyledTwoColIconMarkup>
  )
}


export default TwoColIconMarkup;