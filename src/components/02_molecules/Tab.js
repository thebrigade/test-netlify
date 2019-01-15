import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTab = styled.div`
  display: ${p => p.active ? 'block' : 'none'};
`;

const Tab = (props) => {
  return (
    <StyledTab active={props.active}>
      {props.children}
    </StyledTab>
  )
}

Tab.props = {
  tabTitle: PropTypes.string.isRequired,
  active: PropTypes.bool
}


export default Tab;