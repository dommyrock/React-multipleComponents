import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todo from "./Components/Todo/Todo";
import ContactCard from "./Components/Contact/ContactCard";
import AppContact from "./Components/Contact/AppContact";
import PunchLine from "./Components/PunchLine/PunchLine";
import Products from "./Components/Products/Products";
import Page from "./Page";
import StateManagement from "./StateManagement";
import EventHandlingInReact from "./EventHandlingInReact";
import ChangingState from "./ChangingState";
import CounterApp from "./Components/SeparateStateCounters/CounterApp";

//this is default class created by React as template
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AppContact />
        <PunchLine />
        <Products />
        <Todo />
        <StateManagement />
        <EventHandlingInReact />
        <hr />
        <ChangingState />
        <hr />
        <Page />
        <CounterApp />
      </div>
    );
  }
}

export default App;
