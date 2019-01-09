import React from 'react'
import styled from 'styled-components';
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
    border-bottom: ${p => p.border ? '1px solid rgba(0,0,0,.1)' : 'none'};
    margin-bottom: ${p => p.border ? 30 : 0 }px;
    padding-bottom: ${p => p.border ? 30 : 0}px;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(${p => p.column}, 1fr);
      grid-gap: 40px;
      justify-content: space-between;
    }
  }
  h3{
    font-weight: 300;
    margin-bottom: 30px;
    text-transform: capitalize;
    font-size: 2.4rem;
  }
`;

const Section = (props) => (
  <StyledSection column={props.gridColumn} border={props.border}>
    {props.title ? (<h3>{props.title}</h3>) : null}
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
