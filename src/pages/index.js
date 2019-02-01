import React from 'react'
import LayoutHome from '../layout/page-layout-home';
import '../components/i18n';
import { withNamespaces } from 'react-i18next';
import Title from '../components/01_atoms/Title';
import Hero from '../components/02_molecules/Hero';
import Section from '../components/03_organisms/Section';
import IconArticle from '../components/02_molecules/IconArticle';
import MailChimpForm from '../components/02_molecules/MailChimpForm';
// icons
import * as IconScales from '../images/icons/icon-scale.svg';
import * as IconNetwork from '../images/icons/icon-network.svg';
import * as IconSecurity from '../images/icons/icon-lock.svg';
import styled from 'styled-components';

const StyleHomeTitle = styled(Title)`
  @media screen and (min-width: 768px) {
    font-size: 5.0rem;
    max-width: 990px;
    margin: 0 auto 80px;
    padding-left: 0;
  }
`;

const StyledHero = styled(Hero)`
  margin-bottom: 180px;
  @media screen and (min-width: 768px) {
    
    margin-top: 50px;
  }
`
const IndexPage = (props) => (
  <LayoutHome>

    <StyledHero
      text={props.t("index.hero.text")}
      sub={props.t("index.hero.sub")}
    />
    <StyleHomeTitle text={props.t("index.title1")} pad={30} />
    
    <Section gridColumn={3}>
      <IconArticle 
        icon={IconScales}
        title={props.t("index.cta1.title")}
        copy={props.t("index.cta1.copy")}
      />
      <IconArticle 
        icon={IconSecurity}
        title={props.t("index.cta2.title")}
        copy={props.t("index.cta2.copy")}
      />
      <IconArticle 
        icon={IconNetwork}
        title={props.t("index.cta3.title")}
        copy={props.t("index.cta3.copy")}
      />
    </Section>
    <MailChimpForm
      label={props.t("index.mailchimp.label")}
      placeholder={props.t("index.mailchimp.placeholder")}
      buttonLabel={props.t("index.mailchimp.buttonlabel1")}
    />
  </LayoutHome>
)

export default withNamespaces()(IndexPage)
