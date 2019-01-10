import React from 'react'
import Layout from '../layout/page-layout';
import '../components/i18n';
import { withNamespaces } from 'react-i18next';
import Title from '../components/01_atoms/Title';
import Hero from '../components/02_molecules/Hero';
import Section from '../components/03_organisms/Section';
import IconArticle from '../components/02_molecules/IconArticle';
import styled from 'styled-components';
import Content from '../components/02_molecules/Content';
import TwoColIconMarkup from '../components/03_organisms/TwoColIconMarkup';

// icons
import * as heroIcon from '../images/icons/hero-icon-io.svg';
import * as IconScales from '../images/icons/icon-scale.svg';
import * as IconNetwork from '../images/icons/icon-network.svg';
import * as IconSecurity from '../images/icons/icon-lock.svg';
import * as IconLearn from '../images/icons/icon-developer_resources.svg';

const StyleLearnTitle = styled(Title)`
  font-size: 5.0rem;
  max-width: 930px;
  margin: 0 auto 80px;
`;

const StyledTabSection = styled(Section)`
  margin-bottom: 50px;
  padding: 0;
`

const StyledTwoColMarkupTitle = styled(Title)`
  font-size: 3.6rem;
  margin-bottom: 20px;
  letter-spacing: 1.5px;
`;

const StyledTwoColIconMarkup = styled(TwoColIconMarkup)`
  padding: 10px;
  img{
    max-width: 80px;
    margin-right: 30px;
  }
`;

const IndexPage = (props) => (
  <Layout>
    <Hero
      icon={heroIcon}
      text="Learn more about Tezos. <br /> Get involved."
      sub="Tezos is a blockchain that can evolve by upgrading itself. Stakeholders vote on amendments to the protocol, including amendments to the voting procedure itself, to reach social consensus on proposals. Tezos supports smart contracts and offers a platform to build decentralized applications."
    />
    <StyleLearnTitle text="Overview" />
    <Section gridColumn={2} border>
      <IconArticle 
        icon={IconScales}
        title="Self-Amendment"
        copy="Self-amendment allows Tezos to upgrade itself without having to split (“fork”) the network into two different blockchains. This is important as the suggestion or expectation of a fork can divide the community, alter stakeholder incentives, and disrupt the network effects that are formed over time. Because of self-amendment, coordination and execution costs for protocol upgrades are reduced and future innovations can be seamlessly implemented."
      />
      <IconArticle 
        icon={IconSecurity}
        title="On-Chain Governance"
        copy="In Tezos, all stakeholders can participate in governing the protocol. The election cycle provides a formal and systematic procedure for stakeholders to reach agreement on proposed protocol amendments. By combining this on-chain mechanism with self-amendment, Tezos can change this initial election process to adopt better governance mechanisms when they are discovered."
      />
    </Section>
    <Section gridColumn={2}>
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
    </Section>
    <StyledTwoColIconMarkup icon={IconLearn}>

      <StyledTwoColMarkupTitle text="Developer Resources" />
      <Content>Take a look at these developer resources for specifics on how Tezos operates.</Content>
      <StyledTabSection gridColumn={2}>
        <article>
          <Content>
            <ul>
              <li>
                <a href="https://tezos.gitlab.io/master/" target="_blank">Developer Documentation</a>
              </li>
              <li>
                <a href="https://gitlab.com/tezos/tezos" target="_blank">Gitlab</a>
              </li>
              <li>
                <a href="https://riot.im/app/#/room/#freenode_#tezos:matrix.org" target="_blank">Developer Chat Room</a>
              </li>
              <li>
                <a href="https://groups.google.com/forum/#!forum/tezos-developer-community" target="_blank">Developer Mailing List</a>
              </li>
            </ul>
          </Content>
        </article>
        <article>
          <Title text="Hardware Wallets for Baking" />
        </article>
      </StyledTabSection>

    </StyledTwoColIconMarkup>
  </Layout>
)

export default withNamespaces()(IndexPage)
