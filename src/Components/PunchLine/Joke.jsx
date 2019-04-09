import React from "react";
//in PunchLine we get data from jokesData[] -->We pass jokesData[] to <Joke/> component
// than we fetch props from PunchLine obj[] and do ternary expressions here
function Joke(props) {
  return (
    <div className="todo-list2">
      <p style={{ display: !props.question && "none" }}>
        Question: {props.question}
      </p>

      <p style={{ color: props.question ? "whitesmoke" : "#888888" }}>
        Answer: {props.punchLine}
      </p>
    </div>
  );
}
//change text color of 'Answer' if there is no question (if there is Q paint A text white)
export default Joke;

//Conditional rendering "2 WAYS" (can be done with ternary expression)

//<p style={{ display: props.question ? "block" : "none" }} />;

//or  if 'obj' doesn't have question dont display it
//<p style={{ display: !props.question && "none" }} />;
