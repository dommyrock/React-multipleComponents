import React from "react";
import Todo from "../Todo/Todo";
import AppContact from "../Contact/AppContact";
import PunchLine from "../PunchLine/PunchLine";
import Products from "../Products/Products";
import StateManagement from "../../StateManagement";
import EventHandlingInReact from "../../EventHandlingInReact";

export default class BeginnerComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  };

  render() {
    const show = this.state.show && <ComponentsToRender />; //if true call fetch function for rendering components

    return (
      <div>
        <button className="buttonBlue button5" onClick={this.handleClick}>
          Render beginner components
        </button>
        {show}
      </div>
    );
  }
}
//fetch components to render
function ComponentsToRender(params) {
  return (
    <div>
      <AppContact />
      <PunchLine />
      <Products />
      <Todo />
      <StateManagement />
      <EventHandlingInReact />
    </div>
  );
}
