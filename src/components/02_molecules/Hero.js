import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../01_atoms/Title';
import PropTypes from 'prop-types';

const StyledHeroTitle = styled(Title)`
  font-size: 4.8rem;
`;
const StyledHero = styled.div`
  width: 100%;
  max-width: 1200px;
  ${StyledHeroTitle} {
    max-width: 70%;
  }
`;
class Hero extends Component {
  static props = {
    text: PropTypes.string
  }
  static defaultProps = {
    text: ''
  }
  render() {
    const { text } = this.props;
    return (
      <StyledHero>
        <StyledHeroTitle text={ text }/>
      </StyledHero>
    )
  }
}


export default Hero;