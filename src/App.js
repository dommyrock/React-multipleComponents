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
import LoggedInOut from "./Components/LoggedIn_Out/LoggedInOut";
import Form from "./Components/Form/Form";
import MemeApp from "./Components/MemeGenerator/MemeApp";
import TodosHooksApp from "./Components/Todo/TodoWithHooks";
import TextEditor from "./Components/TextEditor/TextEditor";
import UnsplashPhotos from "./Components/UnsplashPhotosAPI/UnsplashPhotos";

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
        <br />
        <CounterApp /> //////TODO Btn that multyplyes to x2 states to x4 states
        ...
        <LoggedInOut />
        <br />
        <Form />
        <hr />
        <MemeApp />
        <br />
        <TodosHooksApp />
        <div className="TextEditorCss">
          <TextEditor />
        </div>
        <UnsplashPhotos />
      </div>
    );
  }
}

export default App;
