import React, { Component } from 'react';
import Counter from './Counter-divided';
import Summary from './Summary-divided';
import { StoreContext } from '../store-context';

const style = {
  margin: '20px',
};

class ControlPanel extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store => (
          <div style={style}>
            <Counter caption="First" store={store} />
            <Counter caption="Second" store={store} />
            <Counter caption="Third" store={store} />
            <hr />
            <Summary />
          </div>
          ))
        }
      </StoreContext.Consumer>
    );
  }
}

export default ControlPanel;
