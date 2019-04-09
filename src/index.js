import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Layout from "./Components/Layout";
import TodoComponent from "./Components/Todo/Todo";
import StateManagement from "./StateManagement";
import EventHandlingInReact from "./EventHandlingInReact";
import ChangingState from "./ChangingState";

ReactDOM.render(<App />, document.getElementById("root"));
// Uncomment bellow to show separate component

// ReactDOM.render(<Layout />, document.getElementById("root"));
// ReactDOM.render(<TodoComponent />, document.getElementById("root"));
// ReactDOM.render(<StateManagement />, document.getElementById("root"));
// ReactDOM.render(<EventHandlingInReact />, document.getElementById("root"));
// ReactDOM.render(<ChangingState />, document.getElementById("root"));
