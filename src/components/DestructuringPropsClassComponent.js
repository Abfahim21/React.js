import React, { Component } from 'react';

export default class DestructuringPropsClassComponent extends Component {
  render() {
      const {d3, d4} = this.props;

    return <div>
        <h2>{d3} {d4} Component Destructuring Props Practice</h2>
    </div>;
  }
}
