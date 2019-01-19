import React, { Component } from 'react';
import Counter from './Counter';

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <Counter caption="First" initValue={0} />
        <Counter caption="First" initValue={10} />
        <Counter caption="First" initValue={20} />
      </div>
    );
  }
}

export default ControlPanel;
