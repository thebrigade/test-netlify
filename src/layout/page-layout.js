import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import LanguageSwitcher from '../components/LanguageSwitcher';
import Header from '../components/03_organisms/Header';
import Footer from '../components/03_organisms/Footer';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme, {COLOR_FOOTER} from '../theme';


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
  background: white;
  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
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
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="container">
              {children}
              <LanguageSwitcher />
            </div>
          </StyledBody>
          <Footer />
        </Fragment>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


