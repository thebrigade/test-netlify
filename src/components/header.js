import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: blue;
  margin-bottom: 1.45rem;
  & > div{
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
  h1{
    margin: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

export default Header
