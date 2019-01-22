import React, { Component } from 'react';

import store from '../Store';

class Summary extends Component {
  render() {
    return (
      <div>Total Count: {this.props.sum}</div>
    )
  }
}

class SummaryContainer extends Component {
  constructor(props) {
    super(props);

    this.getOwnState = this.getOwnState.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    const state = store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return { sum };
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  render() {
    return <Summary sum={this.state.sum} />
  }
}

export default SummaryContainer;
