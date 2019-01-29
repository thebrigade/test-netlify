import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Navigation from '../02_molecules/Navigation';
import * as logoImage from '../../images/logo-tezos.svg';
import Logo from '../01_atoms/Logo';
import Button from '../01_atoms/Button';
import * as mediumImage from '../../images/icons/logo-medium.png';
import '../i18n';
import { withNamespaces } from 'react-i18next';

const StyledHeader = styled.div`
  margin-bottom: 1.45rem;
  padding: 30px 20px;
  position: relative;
  z-index: 99;
  & > div{
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  h1{
    margin: 0;
  }
`;
const StyledButton = styled(Button)`
  font-weight: 500;
`;

const Header = (props) => (
  <StyledHeader>
    <div>
      <h1>
        <Link to="/">
          <Logo image={logoImage} />
        </Link>
      </h1>
      <Navigation>
        <StyledButton text={props.t('nav.top.link1')} to="/learn-about-tezos" />
        <StyledButton text={props.t('nav.top.link2')} to="/bug-bounty"/>
        <StyledButton
          text={props.t('nav.top.link3')}
          to="https://medium.com/tezos  "
          iconImage={mediumImage} 
          iconDirectionReverse
          iconSmall
          external
        />
        <StyledButton text={props.t('nav.top.link4')} to="/get-started" buttonBig/>
      </Navigation>
    </div>
  </StyledHeader>
)

export default withNamespaces()(Header)
