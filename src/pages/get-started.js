import React from 'react'
import Button from '../components/01_atoms/Button';
import Title from '../components/01_atoms/Title';
import Layout from '../layout/page-layout';
import Hero from '../components/02_molecules/Hero';
import * as HeroIcon from '../images/icons/hero-icon-io.svg';
import SectionTabs from '../components/03_organisms/SectionTabs';

const SecondPage = () => (
  <Layout>
    <Hero
      icon={HeroIcon}
      text="Getting Started with Tezos"
    />
    <SectionTabs>
      <Title text="hello world" tabLabel="testing tab label"/>
    </SectionTabs>
  </Layout>
)

export default SecondPage
