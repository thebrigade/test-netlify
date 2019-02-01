import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../01_atoms/Title';
import PropTypes from 'prop-types';
import { COLOR_PRIMARY_HEADER } from '../../theme';
import ReactHtmlParser from 'react-html-parser';

const StyledHeroTitle = styled(Title)`
  font-size: 5.6rem;
  width: 100%;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
  }
`;

const StyledTitleIcon = styled.div`
  img{
    display: block;
    width: 100%;
    max-width: 170px;
    margin-right: 20px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      margin-bottom: 0;
    }
  }
`;

const StyledHero = styled.div`
  padding: ${p => p.icon ? '5vh 0 5vh 0' : '5vh 0'};
  p{
    margin-top: 30px;
    line-height: 1.8;
    font-size: 1.8rem;
    color: ${COLOR_PRIMARY_HEADER};
    font-weight: 300;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: ${p => p.proximity ? p.proximity : 1200}px;
    padding: ${p => p.icon ? '15vh 0 15vh 50px' : '15vh 0'};
    overflow: hidden;
    p{
      width: ${p => p.sub && p.sub.length > 180 ? 60 : 40}%;
      float: right;
      padding-right: 30px;
      margin-top: 60px;
    }
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
    const { text, sub, proximity, icon, className } = this.props;
    return (
      <StyledHero proximity={proximity} icon={icon} sub={sub} className={className}>
        <StyledTitleIcon>
          {typeof icon !== 'undefined' ? (<img src={icon} alt="header label" />) : null}
          <StyledHeroTitle text={ text }/>
        </StyledTitleIcon>
        {typeof sub !== 'undefined' ? (<p>{ReactHtmlParser(sub)}</p>) : null}
      </StyledHero>
    )
  }
}


export default Hero;