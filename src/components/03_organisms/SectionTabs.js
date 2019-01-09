import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const StyledTabs = styled.ul`
  display: flex;
  align-items: stretch;
  list-style: none;
  li{
    width: 100%;
    padding: 40px;
    background: #ebeff6;
    font-size: 2.4rem;
    font-weight: 300;
  }
`

const StyledTabsWrap = styled.div`
  padding: 40px;
`;


class SectionTabs extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 }
  }
  createTabs({children}) {
    return React.Children.map(children,  (el) => (<li>{el.props.tabLabel}</li>))
  }
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <StyledTabs>
          {this.createTabs(this.props)}
        </StyledTabs>
        <StyledTabsWrap>
          {children}
        </StyledTabsWrap>
      </Fragment>
    )
  }
}

export default SectionTabs;