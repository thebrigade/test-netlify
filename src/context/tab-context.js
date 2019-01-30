import React, { Component } from 'react';


export const tabs = {
  currentTab: 0
}

export const TabContext = React.createContext(tabs);


class TabContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
    this.setTab = data => this.setState(data)
  }
  render() {
    const { children } = this.props;
    const { state, setTab } = this; 
    return (
      <TabContext.Provider value={{state, setTab}}>
        {children}
      </TabContext.Provider>
    )
  }
}


export default TabContextProvider;