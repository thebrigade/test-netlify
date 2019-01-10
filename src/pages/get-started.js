import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/page-layout';
import Hero from '../components/02_molecules/Hero';
import * as HeroIcon from '../images/icons/hero-icon-io.svg';
import SectionTabs from '../components/03_organisms/SectionTabs';
import Tab from '../components/02_molecules/Tab';
import Section from '../components/03_organisms/Section';
import IconCta from '../components/02_molecules/IconCta';
import Title from '../components/01_atoms/Title';
import TwoColIconMarkup from '../components/03_organisms/TwoColIconMarkup';
import Content from '../components/02_molecules/Content';
import Disclaimer from '../components/01_atoms/Disclaimer';

import * as IconGalleon from '../images/icons/icn-galleon-wallet.png';
import * as IconKukai from '../images/icons/icn-kukai.png';
import * as IconTezbox from '../images/icons/icn-tezbox.png';
import * as IconObsidian from '../images/icons/icn-obsidian.png';
import * as IconTrezor from '../images/icons/icn-trezor.png';
import * as IconCLI from '../images/icons/icn-tezbox.png';
import * as IconStore from '../images/icons/hdr-store.svg';

const StyledIconGroup = styled(Section)`
  margin-bottom: 50px;
  padding: 0;
`

const StyledTwoColMarkupTitle = styled(Title)`
  font-size: 3.6rem;
  margin-bottom: 20px;
  letter-spacing: 1.5px;
`;


const SecondPage = () => (
  <Layout>
    <Hero
      icon={HeroIcon}
      text="Getting Started with Tezos"
    />
    <SectionTabs>
      <Tab tabLabel="Store and Use">
        <TwoColIconMarkup icon={IconStore}>
          <StyledTwoColMarkupTitle text="Store and use Tez" />
          <Content>
            <p>Holding Tezos tokens (“tez”) enables one to interact with the Tezos blockchain. There are many wallets with which to store and use tez. Wallets listed below have undergone at least one independent external security audit.</p>
            <p>Always remember: <strong>if you do not control your private keys, you do not control your tokens</strong>. Every user should make sure to exercise extreme care and take all available safety precautions when entering private key information anywhere. Any party or software, such as a wallet, that gains knowledge of private key information will have access to the tez controlled by the corresponding public key hash.</p>
            <p><strong>Note: Contributors to the Tezos Foundation’s fundraiser can get started via the Activate tab</strong></p>
          </Content>
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
          <Disclaimer>
            <p>*These links for wallets are being provided as a convenience and for informational purposes only; they do not constitute an endorsement or an approval by the Tezos Foundation of any of the products or services provided by those sites. The Tezos Foundation bears no responsibility for the accuracy, legality or content of the external sites or for that of subsequent links, or for the performance or lack thereof of any wallets provided by those sites. Contact the external site for answers to questions regarding its content.</p>
          </Disclaimer>
        </TwoColIconMarkup>
        
      </Tab>
      <Tab tabLabel="Bake">
      </Tab>
      <Tab tabLabel="Build">
      </Tab>
      <Tab tabLabel="Activate">
      </Tab>
    </SectionTabs>
  </Layout>
)

export default SecondPage
