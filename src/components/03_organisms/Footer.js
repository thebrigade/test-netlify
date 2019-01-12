import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import LinkSocial from '../01_atoms/LinkSocial';
import SociaGroup from '../02_molecules/SocialGroup';
import LanguageSwitcher from '../LanguageSwitcher';
import theme from '../../theme';
import * as TwitterLogo from '../../images/icons/social-icon-twitter.svg';
import * as GitlabLogo from '../../images/icons/social-icon-gitlab.svg';
import * as RiotLogo from '../../images/icons/social-icon-riot.svg';

const StyledFooter = styled.footer`
  width: 100%;
  background: ${p => p.theme ? p.theme.footer.background : 'inherit'};
  color: ${p => p.theme ? p.theme.footer.color : 'inherit'};
  & > div{
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 100px 0;
  }
  h1{
    margin: 0;
  }
`;
const copyDate = new Date().getFullYear();
const Footer = (props) => (
  <ThemeProvider theme={theme}>
    <StyledFooter>
      <div>
        <SociaGroup title="Follow Us">
          <LinkSocial
            iconImage={TwitterLogo}
            to="https://twitter.com"
          />
          <LinkSocial
            iconImage={GitlabLogo}
            to="https://twitter.com"
          />
          <LinkSocial
            iconImage={RiotLogo}
            to="https://twitter.com"
          />
        </SociaGroup>
        <p>{(`Copyright \u00A9 ${copyDate} Tezos. All rights reserved.`)}</p>
        <LanguageSwitcher/>
      </div>
    </StyledFooter>
  </ThemeProvider>
)

export default Footer
