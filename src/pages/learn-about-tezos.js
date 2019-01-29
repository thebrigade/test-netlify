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
import Button from '../components/01_atoms/Button';
// icons
import * as heroIcon from '../images/icons/hero-icon-io.svg';
import * as IconPlus from '../images/icons/icon-plus-circle.jpg';
import * as IconCheckSquare from '../images/icons/icon-check-square.jpg';
import * as IconSquares from '../images/icons/icon-squares-square.jpg';

import * as IconPaperSqare from '../images/icons/icon-paper-square.jpg';
import * as IconCheckCircle from '../images/icons/icon-check-circle.jpg';
import * as IconPyramid from '../images/icons/icon-pyramid-circle.jpg';

import * as PaperWhite from '../papers/white_paper.pdf';
import * as PaperPosition from '../papers/position_paper.pdf';
import * as IconLearn from '../images/icons/icon-developer_resources.svg';

const StyleLearnTitle = styled(Title)`
  font-size: 3.6rem;
  max-width: 980px;
  margin: 100px auto 40px;
`;

const StyledTabSection = styled(Section)`
  margin-bottom: 50px;
  padding: 0;
  & > div{
    display: flex;
    justify-content: space-between;
  }
`

const StyledTwoColMarkupTitle = styled(Title)`
  font-size: 3.6rem;
  margin-bottom: 20px;
  letter-spacing: 1.5px;
`;

const StyledTwoColIconMarkup = styled(TwoColIconMarkup)`
  padding: 10px;
  width: 50%;
  img{
    max-width: 80px;
    margin-right: 30px;
  }
`;

const StyledLinkGrid = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 500px;
  li{width: 50%; margin-bottom: 10px;}
`;

const StyledArticleBlock = styled.article`
  flex-shrink: 0;
  width: 40%;
  padding: 40px 50px;
  background-color: #f0f3f9;
  a{
    margin-bottom: 20px;
  }
`

const StyledSpecialLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position:relative;
`;

const StyledArticleTitle = styled(Title)`
  font-size: 2.0rem;
  font-weight: 400;
`;

const StyledSpecialButtons = styled(Button)`
  font-weight: 300;
  text-transform: none;
`;

const IndexPage = (props) => (
  <Layout>
    <Hero
      icon={heroIcon}
      text={props.t('learn.hero.text')}
      sub={props.t('learn.hero.sub')}
    />
    <StyleLearnTitle text={props.t('learn.title1')} />
    <Section gridColumn={2} border>
      <IconArticle 
        icon={IconPlus}
        title={props.t('learn.learnblock1.title')}
        copy={props.t('learn.learnblock1.copy')}
      />
      <IconArticle 
        icon={IconCheckSquare}
        title={props.t('learn.learnblock2.title')}
        copy={props.t('learn.learnblock2.copy')}
      />
    </Section>
    <Section gridColumn={2} border>
      <IconArticle 
        icon={IconSquares}
        title={props.t('learn.learnblock3.title')}
        copy={props.t('learn.learnblock3.copy')}
      />
      <IconArticle 
        icon={IconPaperSqare}
        title={props.t('learn.learnblock4.title')}
        copy={props.t('learn.learnblock4.copy')}
      />
    </Section>
    <Section gridColumn={2}>
      <IconArticle 
        icon={IconCheckCircle}
        title={props.t('learn.learnblock5.title')}
        copy={props.t('learn.learnblock5.copy')}
      />
      <IconArticle 
        icon={IconPyramid}
        title={props.t('learn.learnblock6.title')}
        copy={props.t('learn.learnblock6.copy')}
      />
    </Section>
    <StyledSpecialLayout>
      <StyledTwoColIconMarkup icon={IconLearn}>
        <StyledTwoColMarkupTitle text={props.t('learn.title2')} />
        <Content>{props.t('learn.resourcescopy')}</Content>
        <StyledTabSection gridColumn={2}>
          <article>
            <Content>
              <StyledLinkGrid>
                <li>
                  <a href="https://tezos.gitlab.io/master/" target="_blank" rel="noopener noreferrer">{props.t('learn.button1')}</a>
                </li>
                <li>
                  <a href="https://riot.im/app/#/room/#freenode_#tezos:matrix.org" target="_blank" rel="noopener noreferrer">{props.t('learn.button3')}</a>
                </li>
                <li>
                  <a href="https://gitlab.com/tezos/tezos" target="_blank" rel="noopener noreferrer">{props.t('learn.button2')}</a>
                </li>
                <li>
                  <a href="https://groups.google.com/forum/#!forum/tezos-developer-community" target="_blank" rel="noopener noreferrer">{props.t('learn.button4')}</a>
                </li>
              </StyledLinkGrid>
            </Content>
          </article>
        </StyledTabSection>
      </StyledTwoColIconMarkup>
      <StyledArticleBlock>
        <StyledArticleTitle text={props.t('learn.title3')} />
        <StyledSpecialButtons text={props.t('learn.button5')} to={PaperWhite} external buttonBig/>
        <StyledSpecialButtons text={props.t('learn.button6')} to={PaperPosition} external buttonBig/>
      </StyledArticleBlock>
    </StyledSpecialLayout>
  </Layout>
)

export default withNamespaces()(IndexPage)
