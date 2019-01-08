import React from 'react'
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';


const StyledSection = styled.div`
  margin-bottom: 1.45rem;
  padding: 10px 20px;
  background: white;
  width: 100%;
  & > div{
    margin: 0 auto;
    max-width: 1200px;
    display: block;
    width: 100%;
    border: ${p => p.border ? '1px solid bottom' : 'none'};
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(${p => p.column}, 1fr);
      grid-gap: 40px;
      justify-content: space-between;
    }
  }
  h1{
    margin: 0;
  }
`;

const Section = (props) => (
  <StyledSection column={props.gridColumn} border={props.border}>
    <div>
      {props.children}
    </div>
  </StyledSection>
)

Section.props = {
  gridColumn: PropTypes.number.isRequired,
  border: PropTypes.bool
}

Section.defaultProps = {
  gridColumn: 3,
  border: false
}

export default Section
