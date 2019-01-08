import React from 'react'
import Layout from '../layout/page-layout';
import '../components/i18n';
import { withNamespaces } from 'react-i18next';
import Title from '../components/01_atoms/Title';
import Hero from '../components/02_molecules/Hero';
import Section from '../components/03_organisms/Section';
import IconArticle from '../components/02_molecules/IconArticle';
// icons
import * as heroIcon from '../images/icons/hero-icon-io.svg';
import * as IconScales from '../images/icons/icon-scale.svg';
import * as IconNetwork from '../images/icons/icon-network.svg';
import * as IconSecurity from '../images/icons/icon-lock.svg';


const IndexPage = (props) => (
  <Layout>
    <Hero
      text="Tezos is formalizing<br />blockchain governance"
      sub="In Tezos, stakeholders<br /><a href='https://google.com'>govern</a> the protocol."
    />
    <Title text={props.t("header")} />
    <Section gridColumn={3}>
      <IconArticle 
        icon={IconScales}
        title="On-Chain Governance"
        copy="The Tezos protocol offers a formal process through which stakeholders can efficiently govern the protocol and implement future innovations."
      />
      <IconArticle 
        icon={IconSecurity}
        title="Security"
        copy="The Tezos blockchain was designed to facilitate formal verification, which helps secure smart contracts and avoid buggy code."
      />
      <IconArticle 
        icon={IconNetwork}
        title="Proof-of-Stake"
        copy="Tezos’ unique proof-of-stake consensus algorithm gives every stakeholder the opportunity to participate in the validation of transactions on the network and be rewarded by the protocol for doing so."
      />
    </Section>
  </Layout>
)

export default withNamespaces()(IndexPage)
