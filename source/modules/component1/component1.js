import React from 'react';
import PropTypes from 'prop-types';

export default class Component1 extends React.Component{
  static propsTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
  };

  render() {
    return (
      <div>
        Component1
      </div>
    )
  }

}
