import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const StyledTitle = styled.h2`
  font-weight: 300;
  color: ${p => p.theme ? p.theme.header.color : 'black'};
`;

const Title = (props) => {
  return (
    <ThemeProvider theme={theme}>
    <StyledTitle className={props.className}>
      {props.text}
    </StyledTitle>
    </ThemeProvider>
  )
}

Title.props = {
  text: PropTypes.string,
  className: PropTypes.string
}

Title.defaultProps = {
  text: ''
}


export default Title;