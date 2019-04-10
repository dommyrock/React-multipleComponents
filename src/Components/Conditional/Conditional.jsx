import React from "react";
//Usualy APP is in charge of CONDITIONAL RENDERING (so we do this code in parent component/APP)
function Conditional(props) {
  return <h1>LALALALAL Lean to keep the city clean \__</h1>;
}

export default Conditional;
//or instead with turnary expression
// <div>
//   {props.isLoading ===true ? <h1>Loading..</h1> :<h1>LALALALAL Lean to keep the city clean \__</h1>}
// </div>;
