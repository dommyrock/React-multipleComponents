import React, { Component } from "react";

class Counter extends Component {
  //here with this method , we can check if state and props changed , and if so we can make ajax call , else do nothing
  componentDidUpdate(previousProps, previousState) {
    console.log("previousProps", previousProps);
    console.log("previousState", previousState);
    //example
    // if (previousProps.counter.value !== this.props.counter.value) {
    //Ajax calll and get new data from server
    // }
  }
  // this will be called before removing counter from the DOM -->this gives us space for cleanup(timers,listeners...)
  componentWillUnmount() {
    console.log("Counter - Unmounted !");
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //we use inline function here (whenever we need to pas argument to event handlers)
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  //change display/output based on value
  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //let because we're modifing classes value below
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter; //destructuring for simpler use
    //const x =<h1>Zero</h1> ;  we can use jsx as values
    return count === 0 ? "Zero" : count; //is count = 0 return 'zero' else return count
  }
}

export default Counter;
