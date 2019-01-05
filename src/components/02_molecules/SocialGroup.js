import React from 'react';
import styled from 'styled-components';


const StyledSocialGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4{
    font-weight: 300;
    margin-right: 30px;
  }
  ul,li{list-style: none;}
  ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    li{
      margin: 0 10px;
      img{
        display: block;
        width: 100%;
        max-width:  20px;
      }
    }
  }
`;

const createLinks = (children) => {
  return React.Children.map(children, (el) => {
    return (
      <li>
        {el}
      </li>
    )
  })
}
const SocialGroup = (props) => {
  return (
    <StyledSocialGroup>
      <h4>{props.title}</h4>
      <ul>{createLinks(props.children)}</ul>
    </StyledSocialGroup>
  )
}


export default SocialGroup;