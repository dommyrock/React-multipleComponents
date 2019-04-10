import React from "react";
//We're passing item prop here from Todo so we need "props.item." to access props

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p
        style={props.item.completed ? completedStyle : null}
        className="paragraph1"
      >
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;

//when passing method "handleChange" we cant type props.handleChange-> that passes event
//wE need to pass 'event' object instead which contains id (since we only need id we pass it as param to 'handleChange' method)

//We're adding inline style 'completedStyle' to change when 'completed' =true
