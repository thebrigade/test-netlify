import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTabButton = styled.button`
  display: block;
  width: 100%;
  padding: 40px;
  background: ${p => p.active ? 'white' : '#ebeff6'};
  font-size: 2.4rem;
  font-weight: 300;
  cursor: pointer;
  transition: opacity .3s;
  text-align: center;
  
  &:hover{
    opacity: .4s;
  }
`;

class TabButton extends Component {
  clickBack() {
    const { callback, index } = this.props;
    callback(index);
  }
  render() {
    const { label, isActive } = this.props;
    return (
      <StyledTabButton href="#" onClick={() => this.clickBack()} active={isActive}>{label}</StyledTabButton>
    )
  }
}

TabButton.props = {
  isActive: PropTypes.bool,
  callback: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number
}

TabButton.defaultProps = {
  isActive: false
}

export default TabButton;