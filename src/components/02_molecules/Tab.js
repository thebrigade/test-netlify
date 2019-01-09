import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

Tab.props = {
  tabTitle: PropTypes.string.isRequired
}


export default Tab;