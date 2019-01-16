import React from 'react'
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as logo from '../../images/logo-tezos.svg';
import styled from 'styled-components';

const StyledLogo = styled.div`

  position: relative;
  z-index: 99;
`;

const Logo = (props) => {
  return (
    <StyledLogo><img src={props.image} alt="logo"/></StyledLogo>
  )
}

Logo.props = {
  image: PropTypes.string
}

Logo.defaultProps = {
  image: logo
}

export default Logo;