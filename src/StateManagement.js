import React from "react";

class StateManagement extends React.Component {
  constructor() {
    super(); //to gain access to parent components ('React' in this case)
    this.state = {
      answer: "Yes" //we initialize state value here (we can pass it to children  and change its value with setState method)
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Is state important to know ? {this.state.answer} </h1>
      </div>
    );
  }
}

// export default StateManagement;

class StateManagement2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "dommy",
      age: "24"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    );
  }
}

// export default StateManagement2;

class StateManagement3 extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    let wordDisplay;
    if (this.state.isLoggedIn) {
      wordDisplay = "In";
    } else {
      wordDisplay = "Out";
    }
    return (
      <div>
        <h1>You are currenty not logged: {wordDisplay}</h1>
      </div>
    );
  }
}

export default StateManagement3;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; //date is collection/ [] so we need cast'toLocaleTimeString'
  }
  cmponentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {/* <FormattedDate date={this.state.date} /> 

        The FormattedDate component would receive the date in its props and wouldn’t know 
        whether it came from the Clock’s state, from the Clock’s props, 
        or was typed by hand:*/}
      </div>
    );
  }
}
// export default Clock;
/*When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.

Every second the browser calls the tick() method. Inside it,
 the Clock component schedules a UI update by calling setState()
with an object containing the current time. Thanks to the setState() call,
React knows the state has changed, and calls the render() method again to learn
 what should be on the screen.
 This time, this.state.date in the render() method will be different,
 and so the render output will include the updated time. React updates the DOM accordingly.

If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.*/
