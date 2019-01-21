import React, { Component } from 'react';
import store from '../Store';
import * as Actions from '../Actions';

const buttonStyle = {
  margin: '10px',
}

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onClickIncrementBtn = this.onClickIncrementBtn.bind(this);
    this.onClickDecrementBtn = this.onClickDecrementBtn.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption],
    };
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  onClickIncrementBtn() {
    store.dispatch(Actions.increment(this.props.caption));
  }

  onClickDecrementBtn() {
    store.dispatch(Actions.decrement(this.props.caption));
  }

  render() {
    const value = this.state.value;
    const { caption } = this.props;

    return (
      <div>
        <button style={ buttonStyle } onClick={this.onClickIncrementBtn}>+</button>
        <button style={ buttonStyle } onClick={this.onClickDecrementBtn}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    );
  }
}

Counter.defaultProps = {
  initValue: 0,
};

export default Counter;
