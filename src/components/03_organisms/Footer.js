import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import LinkSocial from '../01_atoms/LinkSocial';
import SociaGroup from '../02_molecules/SocialGroup';
import LanguageSwitcher from '../LanguageSwitcher';
import theme from '../../theme';
import '../i18n';
import { withNamespaces } from 'react-i18next';
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
const StyledRightCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  p{
    margin-right: 20px;
  }
`;
const copyDate = new Date().getFullYear();
const Footer = (props) => (
  <ThemeProvider theme={theme}>
    <StyledFooter>
      <div>
        <SociaGroup title={props.t("nav.bottom.follow")}>
          <LinkSocial
            iconImage={RiotLogo}
            to="https://riot.im/app/#/room/%23tezos:matrix.org"
            external
          />
          <LinkSocial
            iconImage={GitlabLogo}
            to="https://gitlab.com/tezos/tezos"
            external
          />
          <LinkSocial
            iconImage={TwitterLogo}
            to="https://twitter.com/tezos"
            external
          />
        </SociaGroup>
        <StyledRightCol>
          <p>{props.t("nav.bottom.copyright", {date: copyDate})}</p>
          <LanguageSwitcher/>
        </StyledRightCol>
      </div>
    </StyledFooter>
  </ThemeProvider>
)

export default withNamespaces()(Footer)
