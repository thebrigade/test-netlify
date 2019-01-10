import React from 'react';
import styled from 'styled-components';

const StyledDisclaimer = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  font-weight: 300;
`;


const Disclaimer = (props) => {
  return (
    <StyledDisclaimer>
      {props.children}
    </StyledDisclaimer>
  )
}


export default Disclaimer;