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
  padding: 50px;
`;

const TwoColIconMarkup = (props) => {
  return (
    <StyledTwoColIconMarkup className={props.className}>
      <StyledIconImage src={props.icon} alt="label" />
      <div>
        {props.children}
      </div>
    </StyledTwoColIconMarkup>
  )
}


export default TwoColIconMarkup;