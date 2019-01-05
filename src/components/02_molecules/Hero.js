import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../01_atoms/Title';
import PropTypes from 'prop-types';
import { breakLine } from '../../lib/helpers';
import { COLOR_PRIMARY_HEADER } from '../../theme';

const StyledHeroTitle = styled(Title)`
  font-size: 4.8rem;
  width: 100%;
  padding-left: 30px;
  
`;

const StyledTitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    display: block;
    width: 100%;
    max-width: 170px;
    margin-right: 20px;
  }
`;

const StyledHero = styled.div`
  width: 100%;
  max-width: ${p => p.proximity ? p.proximity : 1200}px;
  padding: 100px 0;
  overflow: hidden;
  p{
    width: 40%;
    float: right;
    line-height: 1.8;
    font-size: 1.8rem;
    color: ${COLOR_PRIMARY_HEADER};
    font-weight: 300;
    padding-right: 30px;
    margin-top: 60px;
  }
`;

class Hero extends Component {
  static props = {
    text: PropTypes.string.isRequired,
    sub: PropTypes.string,
    proximity: PropTypes.number,
    icon: PropTypes.string
  }
  static defaultProps = {
    text: ''
  }
  render() {
    const { text, sub, proximity, icon } = this.props;
    return (
      <StyledHero proximity={proximity}>
        <StyledTitleIcon>
          {typeof icon !== 'undefined' ? (<img src={icon} alt="header label" />) : null}
          <StyledHeroTitle text={ text }/>
        </StyledTitleIcon>
        {typeof sub !== 'undefined' ? (<p>{breakLine(sub)}</p>) : null}
      </StyledHero>
    )
  }
}


export default Hero;