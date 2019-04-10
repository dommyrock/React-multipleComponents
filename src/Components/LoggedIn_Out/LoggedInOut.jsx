import React, { Component } from "react";

class LoggedInOut extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return { isLogged: !prevState.isLogged }; //switch bool(could also use if/else & turnary ex)
    });
  }
  render() {
    let buttonText = this.state.isLogged ? "Log out" : "Log in";
    let h1Text = this.state.isLogged
      ? "Logged in (press btn to log out)"
      : "Logged out (press btn to log in)";
    return (
      <div>
        <h1>{h1Text}</h1>
        <button className="button button5" onClick={this.handleClick}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default LoggedInOut;
