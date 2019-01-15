import React from 'react';
import Layout from '../layout/page-layout';
import '../components/i18n';
import { withNamespaces } from 'react-i18next';
import Hero from '../components/02_molecules/Hero';
// icons
import * as heroIcon from '../images/icons/icon-hero-bugbounty.png';
import * as rawTextPGPKEY from '../static/pgpkey.pdf';

const IndexPage = props => (
  <Layout>
    <Hero
      icon={heroIcon}
      text={props.t('bugbounty.hero.text')}
      sub={props.t('bugbounty.hero.sub', {pgpkey: rawTextPGPKEY})}
    />
  </Layout>
)

export default withNamespaces()(IndexPage)
