import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as logo from '../../images/logo.png';

const Logo = (props) => {
  return (
    <div className="logo"><img src={props.image}/></div>
  )
}

Logo.props = {
  image: PropTypes.string
}

Logo.defaultProps = {
  image: logo
}

export default Logo;