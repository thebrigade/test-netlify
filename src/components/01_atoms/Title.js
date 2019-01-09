import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import ReactHtmlParser from 'react-html-parser';

const StyledTitle = styled.h2`
  font-weight: 300;
  color: ${p => p.theme ? p.theme.header.color : 'black'};
  padding-left: ${p => p.pad ? p.pad : 0}px;
  margin-bottom: 30px;
`;

const Title = (props) => {
  return (
    <ThemeProvider theme={theme}>
    <StyledTitle className={props.className} pad={props.pad}>
      {ReactHtmlParser(props.text)}
    </StyledTitle>
    </ThemeProvider>
  )
}

Title.props = {
  text: PropTypes.string,
  className: PropTypes.string,
  pad: PropTypes.number
}

Title.defaultProps = {
  text: '',
  pad: 0
}


export default Title;