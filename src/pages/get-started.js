import React from 'react'
import Button from '../components/01_atoms/Button';
import Title from '../components/01_atoms/Title';
import Layout from '../layout/page-layout'

const SecondPage = () => (
  <Layout>
    <Title text="from the second page" />
    <p>Welcome to page 2</p>
    <Button to="/" text="Go back to the homepage" inline />
  </Layout>
)

export default SecondPage
