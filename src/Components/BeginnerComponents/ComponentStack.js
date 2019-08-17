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
function ComponentsToRender() {
  //  Example of modifying child value in state of []

  // this.state = {
  //       input:'',
  //      recipeList :
  //       [{
  //         recipe: "Tacos",
  //         directions: "make tacos",
  //         ingredients: ["meat"]
  //       },
  //       {
  //         recipe: "pizza",
  //         directions: "bake",
  //         ingredients: ["dough"]
  //       }]
  //       ......

  // ) For the handleSubmit method, you are trying to update the state of a nested array.
  //  You can not write: recipeList[0].recipe: newRecipe, but you first create a copy of
  //  the full recipeList array in this.state and the modify the recipe value of the first
  // element of the new copied array and then assign this modified array back to
  //  this.state.recipeList.
  // Also, you need to make sure you set the input property back to a blank string,
  //  so after clicking Submit, the textbox is empty.

  //   handleSubmit() {
  //     const recipeList = [...this.state.recipeList];
  //     recipeList[0].recipe = this.state.input;
  //     this.setState({
  //       recipeList,
  //       input: ""
  //     });
  //   }"

  return (
    <div>
      <code>placehokders</code>
      <AppContact />
      <PunchLine />
      <Products />
      <Todo />
      <StateManagement />
      <EventHandlingInReact />
    </div>
  );
}
