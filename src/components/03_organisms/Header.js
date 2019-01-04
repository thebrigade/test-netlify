import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import Navigation from '../02_molecules/Navigation';
import * as logoImage from '../../images/logo-tezos.svg';
import Logo from '../01_atoms/Logo';
import Button from '../01_atoms/Button';

const StyledHeader = styled.div`

  margin-bottom: 1.45rem;
  & > div{
    margin: 0 auto;
    max-width: 1200px;
  }
  h1{
    margin: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <Link to="/">
          <Logo image={logoImage} />
        </Link>
      </h1>
      <Navigation>
        <Button text="LEARN ABOUT TEZOS" to="/get-started"/>
        <Button text="BUG BOUNTY" to="/get-started"/>
        <Button text="BLOG" to="/get-started"/>
        <Button text="GET STARTED" to="/get-started" buttonBig/>
      </Navigation>
    </div>
  </StyledHeader>
)

export default Header
