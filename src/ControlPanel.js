import React, { Component } from 'react';
import Counter from './Counter';

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <Counter caption="First" initValue={0} />
        <Counter caption="Second" initValue={10} />
        <Counter caption="Third" initValue={20} />
        <button onClick={ ()=> this.forceUpdate() }>
          Click me to repaint!
        </button>
      </div>
    );
  }
}

export default ControlPanel;
