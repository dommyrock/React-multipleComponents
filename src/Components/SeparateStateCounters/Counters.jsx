import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const { onReset, counters, onDelete, onIncrement } = this.props; //this needed because we use class(if it was function component we cound just use props)
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            //we're not handling events here , we're preparing them for parent of this component
          />
        ))}
      </div>
    );
  }
}

export default Counters;
