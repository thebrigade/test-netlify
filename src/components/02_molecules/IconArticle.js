import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../01_atoms/Title';
import Content from '../02_molecules/Content';
import theme from '../../theme';


const StyledArticleTitle = styled(Title) `
  font-size: 2.4rem;
  margin-bottom: 20px;
  color: ${p => p.theme.paragraph.color};
`

const StyledGroup = styled.div`
  width: 100%;
  img{
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    margin-bottom: 40px;
    img{
      display: inline-block;
      width: 20%;
      max-width: ${p => p.small ? '80' : '40'}px;
      min-width: 40px;
      margin-right: 30px;
    }
    p{
      font-size: ${p => p.small ? '1.6' : '1.8'}rem;
    }
  }
`;

const IconArticle = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledGroup >
        <img src={props.icon} alt="label" />
        <div>
          <StyledArticleTitle text={props.title} />
          <Content>
            <p>{props.copy}</p>
          </Content>
        </div>
      </StyledGroup>
    </ThemeProvider>
  )
}

IconArticle.props = {
  icon: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool
}

IconArticle.defaultProps = {
  small: false
}

export default IconArticle;