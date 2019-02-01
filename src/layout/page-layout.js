import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/03_organisms/Header';
import Footer from '../components/03_organisms/Footer';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme, {COLOR_FOOTER, COLOR_PRIMARY_LINK} from '../theme';
import * as bodyImage from '../images/hero-bg.png';
import * as favicon from '../images/favicon.png';
import ModalContextProvider from '../context/modal-context';
import TabContextProvider from '../context/tab-context';

const GlobalStyle = createGlobalStyle`
  *{
    border: none;
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body,html{
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    background: ${COLOR_FOOTER};
  }
`
const StyledBody = styled.div`
  width: 100%;
  background-color: white;
  background-image: linear-gradient(#f5f9fe, #ffffff);
  background-size: 100% 40vh;
  background-repeat: repeat-x;
  overflow: hidden;
  &:before{
    content: '';
    display: block;
    position: absolute;
    top:50px;
    width: 100%;
    height: 400px;
    z-index: 0;
    width: 0; 
    height: 0; 
    border-top: 200px solid transparent;
    border-bottom: 200px solid transparent;
    border-left: 230px solid #D7E3F1;
    filter: blur(10px);
  }
  &:after{
    content: '';
    display: block;
    position: absolute;
    top: 50px;
    width: 100%;
    height: 400px;
    z-index: 0;
    width: 0; 
    height: 0; 
    border-top: 200px solid transparent;
    border-bottom: 200px solid transparent;
    border-left: 230px solid #f5f9fe; 
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 50px;
    color: ${p => p.theme.paragraph.color};
    position: relative;
    z-index: 1;
  }
  @media screen and (min-width: 768px) {
    background-color: white;
    background-image: url(${bodyImage});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    &:before, &:after{display: none;}
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <TabContextProvider>
          <ModalContextProvider>
            <Fragment>
              <GlobalStyle />
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              >
                
                <html lang="en" />
                <link rel="shortcut icon" href={favicon} />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,500" rel="stylesheet"/>
              </Helmet>
              
              <StyledBody>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div className="container">
                  {children}
                </div>
              </StyledBody>
              <Footer />
            </Fragment>
          </ModalContextProvider>
        </TabContextProvider>
      </ThemeProvider>
    )}
  />
)

Layout.props = {
  children: PropTypes.node.isRequired,
}

export default Layout


