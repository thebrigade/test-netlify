import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import TabButton from '../01_atoms/TabButton';


const StyledTabs = styled.ul`
  display: flex;
  align-items: stretch;
  list-style: none;
  li{
    width: 100%;
  }
`

const StyledTabsWrap = styled.div`
  padding: 40px;
  background: #fff;
`;

class SectionTabs extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 }
    this.buttonRefs = [];
  }
  setActive(e) {
    this.setState({
      activeTab: e
    })
  }
  createTabs(children) {
    return React.Children.map(children,  (el, i) => {
      return (
        <li>
          <TabButton
            label={el.props.tabLabel}
            callback={(e) => this.setActive(e)}
            ref={(button) => this.buttonRefs[i] = button}
            isActive={i === this.state.activeTab}
            index={i}
          />
        </li>
      )
    })
  }
  
  createSectionTabs(children) {
    return React.Children.map(children,  (el, i) => {
      return React.cloneElement(el, {active: i === this.state.activeTab});
    })
  }

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <StyledTabs>
          {this.createTabs(children)}
        </StyledTabs>
        <StyledTabsWrap>
          {this.createSectionTabs(children)}
        </StyledTabsWrap>
      </Fragment>
    )
  }
}

export default SectionTabs;