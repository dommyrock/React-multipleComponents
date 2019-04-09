import React from "react";

function ProductDetails(props) {
  return (
    <div className="todo-item">
      <h5>Name: {props.name} </h5>
      <p style={{ color: "green" }}>
        Price:
        {props.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
      </p>
      <p style={{ backgroundColor: "whitesmoke" }}>
        -Description: {props.description}
      </p>
    </div>
  );
}

export default ProductDetails;
