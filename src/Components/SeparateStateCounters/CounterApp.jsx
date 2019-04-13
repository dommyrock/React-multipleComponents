import React, { Component } from "react";
import Counters from "./Counters";
import Navbar from "./Navbar";
// import "App.css"; //import for styles path broken atm

class CounterApp extends Component {
  //state is private(internal) and cannot be accessed from other components (data that is private to that component)

  constructor() {
    super(); //is constructor of parents class
    this.state = {
      counters: [
        { id: 1, value: 650 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 12 }
      ]
    };
    console.log("App -Constructor");
  }
  //called only once when instance of class is created (same as C#)
  // is we want access to props , we need to pass 'prop' as paraeter to constructor , and base constructor (super)

  componentDidMount() {
    //Ajax call
    console.log("App - Mounted (into DOM-Document object model)");
  }
  //resets state of each counter to 0
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Event Handler Caller", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //copy
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //state react component ---includes any data that this component needs
  };
  render() {
    console.log("App - Rendered"); //when component is rendered --->all its children are also rendered recursively

    //React.Fragment removes unnecessary <div> 's
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container" />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          //this are the properties of the prop object (passed to child comp'Counters')
        />
      </React.Fragment>
    );
  }
}

export default CounterApp;
