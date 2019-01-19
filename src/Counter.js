import React, { Component, PropTypes } from 'react';

const buttonStyle = {
  margin: '10px',
}

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onClickIncrementBtn = this.onClickIncrementBtn.bind(this);
    this.onClickDecrementBtn = this.onClickDecrementBtn.bind(this);

    this.state = {
      count: props.initValue,
    };
  }

  onClickIncrementBtn() {
    this.setState({ count: this.state.count + 1});
  }

  onClickDecrementBtn() {
    this.setState({ count: this.state.count - 1});
  }

  render() {
    const { caption } = this.props;
    return (
      <div>
        <button style={ buttonStyle } onClick={this.onClickIncrementBtn}>+</button>
        <button style={ buttonStyle } onClick={this.onClickDecrementBtn}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

Counter.defaultProps = {
  initValue: 0,
};

export default Counter;
