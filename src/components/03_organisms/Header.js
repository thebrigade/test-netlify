import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import Navigation from '../02_molecules/Navigation';
import * as logoImage from '../../images/logo-tezos.svg';
import Logo from '../01_atoms/Logo';
import Button from '../01_atoms/Button';
import * as mediumImage from '../../images/icons/logo-medium.png';
import '../i18n';
import { withNamespaces } from 'react-i18next';
import NavigationContextProvider, {NavigationContext} from '../../context/navigation-context';


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

const StyledButtonWithSmallIcon = styled(Button)`
  font-weight: 500;
  padding: 0;
  img{
    position: relative;
    top: auto;
    transform: none;
    left: auto;
    max-width: 14px;
  }
`;

const Header = (props) => (
  <NavigationContextProvider>
    <StyledHeader>
    <NavigationContext.Consumer>
      {({toggleMobileNav}) => (
      <div>
        <h1>
          <a href="#" onClick={(e) => {
            toggleMobileNav({mobileNavOpen: false});
            navigate('/');
            e.preventDefault();
          }}>
            <Logo image={logoImage} />
          </a>
        </h1>
        
        <Navigation>
          <StyledButton text={props.t('nav.top.link1')} to="/learn-about-tezos" callBack={() => toggleMobileNav({mobileNavOpen: false})}/>
          <StyledButton text={props.t('nav.top.link2')} to="/bug-bounty" callBack={() => toggleMobileNav({mobileNavOpen: false})}/>
          <StyledButtonWithSmallIcon
            text={props.t('nav.top.link3')}
            to="https://medium.com/tezos  "
            iconImage={mediumImage} 
            iconDirectionReverse
            iconSmall
            external
            callBack={() => toggleMobileNav({mobileNavOpen: false})}
          />
          <StyledButton text={props.t('nav.top.link4')} to="/get-started" buttonBig callBack={() => toggleMobileNav({mobileNavOpen: false})}/>
        </Navigation>
          
      </div>
      )}  
      </NavigationContext.Consumer>
    </StyledHeader>
  </NavigationContextProvider>
)

export default withNamespaces()(Header)
