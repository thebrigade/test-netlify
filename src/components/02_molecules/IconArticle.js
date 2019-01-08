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
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 40px;
  img{
    display: inline-block;
    width: 20%;
    max-width: 80px;
    min-width: 70px;
    margin-right: 30px;
  }
`;

const IconArticle = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledGroup>
        <img src={props.icon} alt="label" />
        <div>
          <StyledArticleTitle text={props.title} />
          <Content>
            {props.copy}
          </Content>
        </div>
      </StyledGroup>
    </ThemeProvider>
  )
}

IconArticle.props = {
  icon: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default IconArticle;