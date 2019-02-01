import React from 'react';
import styled from 'styled-components';

const StyledIconImage = styled.img`
  margin: 0 0 30px;
  @media screen and (min-width: 768px) {
    margin-right: 50px;
    margin: 0 50px 0;
    display: block;
    width: 100%;
    max-width: 57px;
    transition: all .4s;
  }
`;

const StyledTwoColIconMarkup = styled.article`
  display: block;
  padding: 30px 0;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    padding: 50px;
  }
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