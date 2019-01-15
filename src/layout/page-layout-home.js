import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/03_organisms/Header';
import Footer from '../components/03_organisms/Footer';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme, {COLOR_FOOTER, COLOR_PRIMARY_LINK} from '../theme';
import HeroBg from '../components/02_molecules/HeroBg';

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
  a, a:visited{
    color: ${COLOR_PRIMARY_LINK};
  }
`
const StyledBody = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 50px;
    color: ${p => p.theme.paragraph.color};
    z-index: 99;
    position: relative;
  }
`;

const LayoutHome = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryHome {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
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
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,500" rel="stylesheet"/>
          </Helmet>
          
          <StyledBody>
            <HeroBg />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="container">
              {children}
            </div>
          </StyledBody>
          <Footer />
        </Fragment>
      </ThemeProvider>
    )}
  />
)

LayoutHome.props = {
  children: PropTypes.node.isRequired,
}

export default LayoutHome


