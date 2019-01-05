import React from 'react'
import Layout from '../layout/page-layout'
import '../components/i18n';
import { withNamespaces } from 'react-i18next';
import Button from '../components/01_atoms/Button';
import Title from '../components/01_atoms/Title';
import Hero from '../components/02_molecules/Hero';
import * as heroIcon from '../images/icons/hero-icon-io.svg';

const IndexPage = (props) => (
  <Layout>
    <Hero
      icon={heroIcon}
      text="Tezos is formalizing<br />blockchain governance"
      sub="In Tezos, stakeholders<br />govern the protocol."
    />
    <Title text={props.t("header")} />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button to="https://google.com" text="got to page 2 with new button" external buttonBig/>
  </Layout>
)

export default withNamespaces()(IndexPage)
