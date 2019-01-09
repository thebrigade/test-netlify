import React from 'react'
import Layout from '../layout/page-layout';
import Hero from '../components/02_molecules/Hero';
import * as HeroIcon from '../images/icons/hero-icon-io.svg';
import SectionTabs from '../components/03_organisms/SectionTabs';
import Section from '../components/03_organisms/Section';
import IconCta from '../components/02_molecules/IconCta';
import * as IconGalleon from '../images/icons/icn-galleon-wallet.png';
import * as IconKukai from '../images/icons/icn-kukai.png';
import * as IconTezbox from '../images/icons/icn-tezbox.png';


const SecondPage = () => (
  <Layout>
    <Hero
      icon={HeroIcon}
      text="Getting Started with Tezos"
    />
    <SectionTabs>
      <Section tabLabel="Store and Use" title="Software Wallets">
        <IconCta
          platforms={['macOS','Windows','Linux']}
          title="Galleon Wallet"
          to="https://galleon-wallet.tech/"
          icon={IconGalleon}
        />
        <IconCta
          platforms={['macOS','Windows','Web','Android']}
          title="Tezbox"
          to="https://tezbox.com/"
          icon={IconTezbox}
        />
        <IconCta
          platforms={['Web']}
          title="Kukai"
          to="https://kukai.app/"
          icon={IconKukai}
        />
      </Section>
    </SectionTabs>
  </Layout>
)

export default SecondPage
