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
import Button from '../components/01_atoms/Button';
import List from '../components/02_molecules/List';
import ButtonGroup from '../components/02_molecules/ButtonGroup';
import '../components/i18n';
import { withNamespaces } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';

import * as IconGalleon from '../images/icons/icn-galleon-wallet.png';
import * as IconKukai from '../images/icons/icn-kukai.png';
import * as IconTezbox from '../images/icons/icn-tezbox.png';
import * as IconObsidian from '../images/icons/icn-obsidian.png';
import * as IconTrezor from '../images/icons/icn-trezor.png';
import * as IconCLI from '../images/icons/icn-tezbox.png';
import * as IconStore from '../images/icons/hdr-store.svg';
import * as IconBaking from '../images/icons/icon-start_baking.svg';
import * as IconSlack from '../images/icons/icn-slack.svg';
import * as IconCode from '../images/icons/hdr-code.svg';
import * as IconFolder from '../images/icons/hdr-folder.svg';
import * as IconArrow from '../images/icons/icon-arrow-right.svg';
import * as IconCheck from '../images/icons/hdr-check.svg';
import * as IconGitlab from '../images/icons/icn-gitlab-circle.png';
import * as IconTezos from '../images/icons/icn-tezos-circle.png';

const StyledTabSection = styled(Section)`
  margin-bottom: 50px;
  padding: 0;
`

const StyledTwoColMarkupTitle = styled(Title)`
  font-size: 3.6rem;
  margin-bottom: 20px;
  letter-spacing: 1.5px;
`;

const StyledSlackButton = styled(Button)`
  font-weight: 300;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px 15px 10px;
  text-align: left;
  line-height: 1.4;
`;

const StyledSmallIconbutton = styled(Button)`
  padding: 15px 30px 15px 15px;
  img{
    margin: 0 10px 0 0;
  }
`;

const GetStarted = (props) => (
  <Layout>
    <Hero
      icon={HeroIcon}
      text={props.t("getstarted.hero.text")}
    />
    <SectionTabs>
      <Tab tabLabel={props.t("getstarted.tab1.label")}>
        <TwoColIconMarkup icon={IconStore}>
          <StyledTwoColMarkupTitle text={props.t("getstarted.tab1.title1")} />
          <Content>
            {ReactHtmlParser(props.t("getstarted.tab1.content1"))}
          </Content>
          <StyledTabSection title={props.t("getstarted.tab1.title2")}>
            <IconCta
              platforms={['macOS','Windows','Linux']}
              title="Galleon Wallet"
              to="https://galleon-wallet.tech/"
              icon={IconGalleon}
              external
            />
            <IconCta
              platforms={['macOS','Windows','Web','Android']}
              title="Tezbox"
              to="https://tezbox.com/"
              icon={IconTezbox}
              external
            />
            <IconCta
              platforms={['Web']}
              title="Kukai"
              to="https://kukai.app/"
              icon={IconKukai}
              external
            />
          </StyledTabSection>
          <StyledTabSection title={props.t("getstarted.tab1.title3")}>
            <IconCta
              platforms={['Obsidian Systems']}
              title="Ledger"
              to="https://www.ledger.com/"
              icon={IconObsidian}
              external
            />
            <IconCta
              title="Trezor"
              to="https://trezor.io/"
              icon={IconTrezor}
              external
            />
          </StyledTabSection>
          <StyledTabSection title={props.t("getstarted.tab1.title4")}>
            <IconCta
              title="Tezos CLI"
              to="https://tezos.gitlab.io/master/api/cli-commands.html"
              icon={IconCLI}
              external
            />
          </StyledTabSection>
          <Disclaimer>
            {props.t('getstarted.tab1.disclaimer')}
          </Disclaimer>
        </TwoColIconMarkup>
        
      </Tab>
      <Tab tabLabel={props.t("getstarted.tab2.label")}>
        <TwoColIconMarkup icon={IconBaking}>
          <StyledTwoColMarkupTitle text="Help secure the ledger" />
          <Content>
            <p>“Baking” is the act of signing and publishing blocks to the Tezos blockchain. Bakers are a crucial component of the Proof-of-Stake consensus mechanism by ensuring that all transactions in a block are correct, that the order of transactions is agreed upon, and that no double-spending has occurred.</p>
          </Content>
          <StyledTabSection>
            <article>
              <Title text="Validate Transactions" />
              <Content>Bakers validate all transactions and add them to the blockchain. If a baker behaves dishonestly, the protocol has a built-in mechanism that can cause them to lose their security deposit.</Content>
            </article>
            <article>
              <Title text="Earn Rewards" />
              <Content>Bakers are rewarded with additional tez for securing the network.</Content>
            </article>
            <article>
              <Title text="Become a Baker" />
              <Content>Request to join the baker chat room if you are building a baking operation. A community member runs the chat room and acts on these requests.</Content>
              <br />
              <StyledSlackButton text="<span>Join the Obsidian<br>Baking Slack</span>" iconImage={IconSlack} buttonBig/>
            </article>
          </StyledTabSection>
        </TwoColIconMarkup>

        <TwoColIconMarkup icon={IconCheck}>

          <StyledTwoColMarkupTitle text="Resources to get started with baking:" />
          
          <StyledTabSection gridColumn={2}>
            <article>
              <Content>
                <ul>
                  <li>
                    <a href="http://tezos.gitlab.io/mainnet/whitedoc/proof_of_stake.html" target="_blank" rel="noopener noreferrer">Proof-of-stake documentation for Tezos</a>
                  </li>
                  <li>
                    <a href="https://medium.com/tezos/its-a-baker-s-life-for-me-c214971201e1" target="_blank" rel="noopener noreferrer">"It's a Baker's Life for me: being a Tezos validator"</a>
                  </li>
                </ul>
              </Content>
            </article>
            <article>
              <Title text="Hardware Wallets for Baking" />
              <IconCta
                platforms={['Obsidian Systems']}
                title="Ledger"
                to="https://www.ledger.com/"
                icon={IconObsidian}
              />
            </article>
          </StyledTabSection>

        </TwoColIconMarkup>
      </Tab>
      <Tab tabLabel={props.t("getstarted.tab3.label")}>
        <TwoColIconMarkup icon={IconCode}>

          <StyledTabSection gridColumn={1}>
            <article>
              <StyledTwoColMarkupTitle text="Help secure the ledger" />
              <Content><p>Take a look at these developer resources for specifics on how Tezos operates and stay up to date</p></Content>
              <ButtonGroup>
                <StyledSmallIconbutton text="<span>Documentation</span>" to="https://tezos.gitlab.io/mainnet/" iconImage={IconTezos} buttonBig smallTxt external/>
                <StyledSmallIconbutton text="<span>Tezos Gitlab</span>" to="https://gitlab.com/tezos/tezos" iconImage={IconGitlab} buttonBig smallTxt external/>
                <Button text="Chat Room (Matrix)" to="https://riot.im/app/#/room/#freenode_#tezos:matrix.org" buttonBig smallTxt inverse external/>
                <Button text="Mailing List" to="https://groups.google.com/forum/#!forum/tezos-developer-community" buttonBig smallTxt inverse external/>
              </ButtonGroup>
              
            </article>
          </StyledTabSection>
          
          <StyledTabSection gridColumn={1}>
            <article>
              <StyledTwoColMarkupTitle text="Start writing smart contracts with Michelson" />
              <Content><p>Tezos smart contracts are written in Michelson, a domain-specific language which is stack based and strongly typed. Michelson was designed to facilitate formal verification, allowing users to prove properties of their contracts.</p></Content>
              <ButtonGroup>
                <Button text="Michelson Documentation" to="http://tezos.gitlab.io/mainnet/whitedoc/michelson.html" buttonBig smallTxt external/>
              </ButtonGroup>
            </article>
          </StyledTabSection>

        </TwoColIconMarkup>

        <TwoColIconMarkup icon={IconFolder}>
          <StyledTabSection gridColumn={1}>
            <article>
              <StyledTwoColMarkupTitle text="Help secure the ledger" />
              <Content><p>Tezos is implemented in OCaml, a powerful functional programming language offering speed and a rich set of libraries. OCaml is used by companies such as Bloomberg, Facebook, Jane Street Capital, and Docker in environments where safety is critical. Ocaml’s unambiguous syntax and semantic make Tezos a good candidate for formal proofs of correctness.</p></Content>
              <ButtonGroup>
                <Button text="What is OCaml?" to="https://ocaml.org/learn/description.html" buttonBig smallTxt external/>
                <Button text="Try OCaml" to="https://try.ocamlpro.com/" buttonBig smallTxt inverse external/>
                <Button text="Real-world OCaml" to="https://realworldocaml.org/" buttonBig smallTxt inverse external/>
              </ButtonGroup>
            </article>
          </StyledTabSection>
        </TwoColIconMarkup>

      </Tab>
      <Tab tabLabel={props.t("getstarted.tab4.label")}>
        <TwoColIconMarkup icon={IconArrow}>
          <StyledTwoColMarkupTitle text="How To Get Started" />
          <List listIndex={1}>
            <Title text="Check Your Contribution"/>
            <Content>
              <p>Click on the "Check Your Contribution" button below to check the recommended allocation of a given public key hash. Contributors may find their public key hashes on the PDF documents they created during the Foundation's fundraiser.</p>
            </Content>
            <ButtonGroup>
              <Button text="Check Your Contribution" to="https://check.tezos.com/" external buttonBig smallTxt external/>
            </ButtonGroup>
          </List>
          <List listIndex={2}>
            <Title text="Obtain Your Activation Code"/>
            <Content>
              <p>Activation codes are required to access the recommended allocations of the corresponding public key hashes. In order to obtain these codes, contributors must complete the Foundation’s Know Your Customer / Anti-Money Laundering (“KYC/AML”) process. Contributors who have not completed this process may do so now.</p>
            </Content>
            <ButtonGroup>
              <Button text="Begin KYC/AML" to="https://verification.tezos.com/" external buttonBig smallTxt external/>
              <Button text="KYC/AML FAQ" to="https://tezos.foundation/news/kyc-aml-faq" external buttonBig smallTxt inverse external/>
            </ButtonGroup>
          </List>
          <List listIndex={3}>
            <Title text="Activate Your Recommended Allocation"/>
            <Content>
              <p>Recommended allocations from the fundraiser must be activated before they can be accessed. A contributor may activate the recommended allocation of a given public key hash by using the Activation Tool. This tool may also reveal the blinded key of the given public key hash. Blinded keys, not public key hashes, are the keys that appear in the genesis block proposed by the Foundation, which may be found <a href="https://tezos.foundation/wp-content/uploads/2018/09/5223213-genesis.txt" target="_blank" rel="noopener noreferrer">here</a></p>
              <p>A balance for a public key hash that was recommended an allocation will not appear on a Tezos block explorer until it has been activated. After a contributor has activated its recommended allocation, it may view the “Store and Use” page for information regarding storing and using its Tezos tokens (“tez”).</p>
            </Content>
            <ButtonGroup>
              <Button text="Activate" to="https://activate.tezos.com/" external buttonBig smallTxt external/>
            </ButtonGroup>
          </List>
        </TwoColIconMarkup>
      </Tab>
    </SectionTabs>
  </Layout>
)

export default withNamespaces()(GetStarted);
