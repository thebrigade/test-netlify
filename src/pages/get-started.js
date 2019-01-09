import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/page-layout';
import Hero from '../components/02_molecules/Hero';
import * as HeroIcon from '../images/icons/hero-icon-io.svg';
import SectionTabs from '../components/03_organisms/SectionTabs';
import Tab from '../components/02_molecules/Tab';
import Section from '../components/03_organisms/Section';
import IconCta from '../components/02_molecules/IconCta';
import * as IconGalleon from '../images/icons/icn-galleon-wallet.png';
import * as IconKukai from '../images/icons/icn-kukai.png';
import * as IconTezbox from '../images/icons/icn-tezbox.png';
import * as IconObsidian from '../images/icons/icn-obsidian.png';
import * as IconTrezor from '../images/icons/icn-trezor.png';
import * as IconCLI from '../images/icons/icn-tezbox.png';

const StyledIconGroup = styled(Section)`
  margin-bottom: 50px;
`

const SecondPage = () => (
  <Layout>
    <Hero
      icon={HeroIcon}
      text="Getting Started with Tezos"
    />
    <SectionTabs>
      <Tab tabLabel="Store and Use">
        <StyledIconGroup title="Software Wallets">
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
        </StyledIconGroup>
        <StyledIconGroup title="Hardware Wallets">
          <IconCta
            platforms={['Obsidian Systems']}
            title="Ledger"
            to="https://www.ledger.com/"
            icon={IconObsidian}
          />
          <IconCta
            title="Trezor"
            to="https://trezor.io/"
            icon={IconTrezor}
          />
        </StyledIconGroup>
        <StyledIconGroup title="Command Line">
          <IconCta
            title="Tezos CLI"
            to="https://tezos.gitlab.io/master/api/cli-commands.html"
            icon={IconCLI}
          />
        </StyledIconGroup>
      </Tab>
    </SectionTabs>
  </Layout>
)

export default SecondPage
