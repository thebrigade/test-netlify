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
import LegalModal from '../components/02_molecules/LegalModal';
import {TabContext} from '../context/tab-context';
import smoothscroll from 'smoothscroll-polyfill';

import * as IconGalleon from '../images/icons/icn-galleon-wallet.png';
import * as IconKukai from '../images/icons/icn-kukai.png';
import * as IconTezbox from '../images/icons/icn-tezbox.png';
import * as IconObsidian from '../images/icons/icn-obsidian.png';
import * as IconTrezor from '../images/icons/icn-trezor.png';
import * as IconCLI from '../images/icons/icn-cli.svg';
import * as IconStore from '../images/icons/hdr-store.svg';
import * as IconBaking from '../images/icons/icon-start_baking.svg';
import * as IconSlack from '../images/icons/icn-slack.svg';
import * as IconCode from '../images/icons/hdr-code.svg';
import * as IconFolder from '../images/icons/hdr-folder.svg';
import * as IconArrow from '../images/icons/icon-arrow-right.svg';
import * as IconCheck from '../images/icons/hdr-check.svg';
import * as IconGitlab from '../images/icons/icn-gitlab-circle.png';
import * as IconTezos from '../images/icons/icn-tezos-circle.png';
import * as IconLedger from '../images/icons/icn-ledger.png';

smoothscroll.polyfill();

const StyledTabSection = styled(Section)`
  margin-bottom: 50px;
  padding: 0;
`

const StyledTwoColMarkupTitle = styled(Title)`
  font-size: 3.6rem;
  margin-bottom: 50px;
  letter-spacing: 1.5px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const StyledSlackButton = styled(Button)`
  font-weight: 300;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px 12px 10px;
  text-align: left;
  line-height: 1.4;
  img{
    position: relative;
    top: auto;
    left: auto;
    transform: none;
  }
`;


const GetStarted = (props) => (
    <Layout>
      <LegalModal
        legalCopy={props.t('getstarted.tab1.disclaimer')}
        buttonLabel="Continue To Application"
      />
      <Hero
        icon={HeroIcon}
        text={props.t("getstarted.hero.text")}
      />      
      <SectionTabs className="section-tabs">
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
                icon={IconLedger}
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
              {ReactHtmlParser(props.t('getstarted.tab1.disclaimer'))}
            </Disclaimer>
          </TwoColIconMarkup>
        </Tab>
        <Tab tabLabel={props.t("getstarted.tab2.label")}>
          <TwoColIconMarkup icon={IconBaking}>
            <StyledTwoColMarkupTitle text={props.t("getstarted.tab2.title1")} />
            <Content>
              {ReactHtmlParser(props.t("getstarted.tab2.content1"))}
            </Content>
            <StyledTabSection>
              <article>
                <Title text={props.t("getstarted.tab2.title2")} />
                <Content>{props.t("getstarted.tab2.content2")}</Content>
              </article>
              <article>
                <Title text={props.t("getstarted.tab2.title3")} />
                <Content>{props.t("getstarted.tab2.content3")}</Content>
              </article>
              <article>
                <Title text={props.t("getstarted.tab2.title4")} />
                <Content>{props.t("getstarted.tab2.content4")}</Content>
                <br />
                <StyledSlackButton text={props.t("getstarted.tab2.slacklabel")} iconImage={IconSlack} buttonBig smallTxt to="mailto:tezos@obsidian.systems" external/>
              </article>
            </StyledTabSection>
          </TwoColIconMarkup>

          <TwoColIconMarkup icon={IconCheck}>

            <StyledTwoColMarkupTitle text={props.t("getstarted.tab2.title5")} />
            
            <StyledTabSection gridColumn={2}>
              <article>
                <Content>
                  <ul>
                    <li>
                      <a href="http://tezos.gitlab.io/mainnet/whitedoc/proof_of_stake.html" target="_blank" rel="noopener noreferrer">{props.t("getstarted.tab2.label2")}</a>
                    </li>
                    <li>
                      <a href="https://medium.com/tezos/its-a-baker-s-life-for-me-c214971201e1" target="_blank" rel="noopener noreferrer">{props.t("getstarted.tab2.label3")}</a>
                    </li>
                  </ul>
                </Content>
              </article>
              <article>
                <Title text={props.t("getstarted.tab2.title6")} />
                <IconCta
                  platforms={['Ledger']}
                  title="Obsidian Systems"
                  to="https://github.com/obsidiansystems/ledger-app-tezos"
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
                <StyledTwoColMarkupTitle text={props.t("getstarted.tab3.title1")} />
                <Content>{ReactHtmlParser(props.t("getstarted.tab3.content1"))}</Content>
                <ButtonGroup>
                  <Button text={props.t("getstarted.tab3.buttonlabel1")} to="https://tezos.gitlab.io/mainnet/" iconImage={IconTezos} buttonBig smallTxt external/>
                  <Button text={props.t("getstarted.tab3.buttonlabel2")} to="https://gitlab.com/tezos/tezos" iconImage={IconGitlab} buttonBig smallTxt external/>
                  <Button text={props.t("getstarted.tab3.buttonlabel3")} to="https://riot.im/app/#/room/#freenode_#tezos:matrix.org" buttonBig smallTxt inverse external/>
                  <Button text={props.t("getstarted.tab3.buttonlabel4")} to="https://groups.google.com/forum/#!forum/tezos-developer-community" buttonBig smallTxt inverse external/>
                </ButtonGroup>
                
              </article>
            </StyledTabSection>
            
            <StyledTabSection gridColumn={1}>
              <article>
                <StyledTwoColMarkupTitle text={props.t("getstarted.tab3.title2")} />
                <Content>{ReactHtmlParser(props.t("getstarted.tab3.content2"))}</Content>
                <ButtonGroup>
                  <Button text={props.t("getstarted.tab3.buttonlabel5")} to="http://tezos.gitlab.io/mainnet/whitedoc/michelson.html" buttonBig smallTxt external/>
                </ButtonGroup>
              </article>
            </StyledTabSection>

          </TwoColIconMarkup>

          <TwoColIconMarkup icon={IconFolder}>
            <StyledTabSection gridColumn={1}>
              <article>
                <StyledTwoColMarkupTitle text={props.t("getstarted.tab3.title3")} />
                <Content>{ReactHtmlParser(props.t("getstarted.tab3.content3"))}</Content>
                <ButtonGroup>
                  <Button text={props.t("getstarted.tab3.buttonlabel6")} to="https://ocaml.org/learn/description.html" buttonBig smallTxt external/>
                  <Button text={props.t("getstarted.tab3.buttonlabel7")} to="https://try.ocamlpro.com/" buttonBig smallTxt inverse external/>
                  <Button text={props.t("getstarted.tab3.buttonlabel8")} to="https://realworldocaml.org/" buttonBig smallTxt inverse external/>
                </ButtonGroup>
              </article>
            </StyledTabSection>
          </TwoColIconMarkup>

        </Tab>
        <Tab tabLabel={props.t("getstarted.tab4.label")}>
          <TwoColIconMarkup icon={IconArrow}>
            <StyledTwoColMarkupTitle text={props.t("getstarted.tab4.title1")} />
            <List listIndex={1}>
              <Title text={props.t("getstarted.tab4.title2")}/>
              <Content>
                {ReactHtmlParser(props.t("getstarted.tab4.content1"))}
              </Content>
              <ButtonGroup>
                <Button text={props.t("getstarted.tab4.buttonlabel1")} to="https://check.tezos.com/" external buttonBig smallTxt external/>
              </ButtonGroup>
            </List>
            <List listIndex={2}>
              <Title text={props.t("getstarted.tab4.title3")}/>
              <Content>
                {ReactHtmlParser(props.t("getstarted.tab4.content2"))}
              </Content>
              <ButtonGroup>
                <Button text={props.t("getstarted.tab4.buttonlabel2")} to="https://verification.tezos.com/" external buttonBig smallTxt/>
                <Button text={props.t("getstarted.tab4.buttonlabel3")} to="https://tezos.foundation/news/kyc-aml-faq" external buttonBig smallTxt inverse/>
              </ButtonGroup>
            </List>
            <List listIndex={3}>
              <Title text={props.t("getstarted.tab4.title4")}/>
              <Content>
                {ReactHtmlParser(props.t("getstarted.tab4.content3"))}
              </Content>
              <ButtonGroup>
                <Button text={props.t("getstarted.tab4.buttonlabel4")} to="https://activate.tezos.com/" external buttonBig smallTxt/>
                <TabContext.Consumer>
                  {({setTab}) => (
                    <Button text={props.t("getstarted.tab4.buttonlabel5")} buttonBig smallTxt inverse callBack={
                      () => {
                        // set current tab the first one and scroll it into view
                        setTab({currentTab: 0});
                        document.querySelector('.section-tabs').scrollIntoView({
                          block: 'start',
                          behavior: 'smooth' 
                        });
                      }
                    }/>
                  )}
                </TabContext.Consumer>
              </ButtonGroup>
            </List>
          </TwoColIconMarkup>
        </Tab>
      </SectionTabs>
    </Layout>

)

export default withNamespaces()(GetStarted);
