import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/page-layout'
import '../components/i18n';
import { withNamespaces } from 'react-i18next';

const IndexPage = (props) => (
  <Layout>
    <h1>{props.t("header")}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
    <Link to="/get-started/">Go to page 2</Link>
  </Layout>
)

export default withNamespaces()(IndexPage)
