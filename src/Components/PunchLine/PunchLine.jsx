import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";
//example of mapping arr and maping it to new 2x values array
// function ArrayStore() {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const doubled = numbers.map(function(number) {
//     return number * 2;
//   });
// }

function PunchLine() {
  //   jokeComponents array of objects
  const jokeComponents = jokesData
    .map(joke => (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    ))
    .filter(joke => joke.props.question !== undefined); //filters only mapped jokes with Q &A

  // console.log(jokeComponents);

  return <div className="todo-item">{jokeComponents}</div>;
}

export default PunchLine;
