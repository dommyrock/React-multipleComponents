import React from "react";
import TodoItem from "./TodoItem";
import todoData from "./todoData";

// function Todo() {
//   const todoItems = todoData.map(item => (
//     <TodoItem key={item.id} item={item} />
//   ));
//   console.log(todoItems);

//   return <div className="todo-list">{todoItems}</div>;
// }

// export default Todo;

//function transformed into class so we can have statefull component
class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        todos: updatedTodos //we're returning new updated array (where  item.id ==id)
      };
    });
    console.log("Changed", id);
  }
  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} /> // wer'e passing handleChange method to each item in TodoItems
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default Todo;
