import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import TabButton from '../01_atoms/TabButton';
import {TabContext} from '../../context/tab-context';
import PropTypes from 'prop-types';


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
          <TabContext.Consumer>
            {({state, setTab}) => {
              return (
                <TabButton
                  label={el.props.tabLabel}
                  callback={(e) => setTab({currentTab: e})}
                  ref={(button) => this.buttonRefs[i] = button}
                  isActive={i === state.currentTab}
                  index={i}
                />
              )
            }}
          </TabContext.Consumer>
        </li>
      )
    })
  }
  
  createSectionTabs(children) {
    return React.Children.map(children,  (el, i) => {
      return (
        <TabContext.Consumer>
            {({state}) => {
              return (React.cloneElement(el, {active: i === state.currentTab}))
            }}
        </TabContext.Consumer>
      )
    })
  }

  render() {
    const { children, className } = this.props;
    return (
      <Fragment>
        <StyledTabs className={className}>
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