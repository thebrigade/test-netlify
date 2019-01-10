import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';


const StyledIconImage = styled.img`
  margin-right: 20px;
  width: 100%;
  max-width: 57px;
  opacity: 1;
  transition: all .4s;
`;

const StyledIconCTA = styled.a`
  display: block;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  text-decoration: none;
  color: ${p => p.theme.support.color};
  cursor: pointer;
  h5{
    font-weight: 300;
    text-transform: capitalize;
    font-size: 1.8rem;
    margin-bottom: 5px;
  }
  p{
    font-style: italic;
    font-size: 1.6rem;
    font-weight: 300;
    color: ${p => p.theme.paragraph.color};
  }
  &:visited{
    color: ${p => p.theme.support.color};
  }
  &:hover{
  ${StyledIconImage} {
      opacity: .8;
    }
  }
`;



const commaSeparatedPlatforms = (data) => {
  return data.join(', ');
}


const IconCta = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledIconCTA href={props.to} className={props.className}>
        <StyledIconImage src={props.icon} alt="label" />
        <div className="meta">
          <h5>{props.title}</h5>
          {props.platforms ? (<p>({commaSeparatedPlatforms(props.platforms)})</p>) : null}
        </div>
      </StyledIconCTA>
    </ThemeProvider>
  )
}


export default IconCta;