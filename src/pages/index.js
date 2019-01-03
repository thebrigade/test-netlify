import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/page-layout'
import '../components/i18n';
import { withNamespaces } from 'react-i18next';
import Logo from '../components/01_atoms/Logo';
const IndexPage = (props) => (
  <Layout>
    <h1>{props.t("header")}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Logo />
    <Link to="/get-started/">Go to page 2</Link>
  </Layout>
)

export default withNamespaces()(IndexPage)
