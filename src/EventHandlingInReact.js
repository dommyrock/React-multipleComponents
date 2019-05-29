import React from "react";

//https://reactjs.org/docs/events.html#supported-events

function handleClick() {
  console.log("I was clicked hard!");
}

function EventHandlingInReact() {
  return (
    <div>
      <img
        onPointerEnter={() => console.log("Image was pointed/hovered ")}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMPK86PDVCSbHaMzzL1R84VvEDgVIQJO3JNnr2NAYloauUo23Sg"
        alt=""
      />
      <br />
      <button onClick={handleClick}>Click me! </button>
      <input
        type="text"
        onKeyPress={event => console.log(event.key)}
        placeholder="Will log keys..."
      />
    </div>
  );
}
//input -->prints pressed key (we acces key prop via event.'key' property "event" is jus alias)
export default EventHandlingInReact;
