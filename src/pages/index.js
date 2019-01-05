import React from 'react'
import Layout from '../layout/page-layout'
import '../components/i18n';
import { withNamespaces } from 'react-i18next';
import Button from '../components/01_atoms/Button';
import Title from '../components/01_atoms/Title';
import Hero from '../components/02_molecules/Hero';


const IndexPage = (props) => (
  <Layout>
    <Hero text="Tezos is formalizing blockchain governance" />
    <Title text={props.t("header")} />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button to="https://google.com" text="got to page 2 with new button" external buttonBig/>
  </Layout>
)

export default withNamespaces()(IndexPage)
