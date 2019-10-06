import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-primary btn-sm mr-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-dark btn-sm mr-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          x
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
