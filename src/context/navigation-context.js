import React, { Component } from 'react';

export const nav = {
  mobileNavOpen: false
}

export const NavigationContext = React.createContext(nav);


class NavigationContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { mobileNavOpen: false }
    this.toggleMobileNav = data => this.setState(data);
  }
  render() {
    const {children} = this.props;
    const {state, toggleMobileNav} = this;
    return (
      <NavigationContext.Provider value={{state, toggleMobileNav}}>
        {children}
      </NavigationContext.Provider>
    );
  }
}

export default NavigationContextProvider;