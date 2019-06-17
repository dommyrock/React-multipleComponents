import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Components/Todo/Todo";
import AppContact from "./Components/Contact/AppContact";
import PunchLine from "./Components/PunchLine/PunchLine";
import Products from "./Components/Products/Products";
import Warning from "./Warning";
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
import FileUploadApp from "./Components/FileUploader/FileUploadApp";
import AutocompleteTextbox from "./Components/AutoCompleteTextbox/AutocompleteTextbox";
import countries from "./Components/AutoCompleteTextbox/countries";
import CsvFile from "./Components/CsvFileApi/CsvFile";
//this is default class created by React as template
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="background2">
          <h2>--Component Library--</h2>
          <h4>By: Dominik Polzer</h4>
        </div>
        <AppContact />
        <PunchLine />
        <Products />
        <Todo />
        <StateManagement />
        <EventHandlingInReact />
        <hr />
        <ChangingState />
        <hr />
        <Warning />
        <br />
        <CounterApp />
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
        <FileUploadApp />
        <div className="App-Component">
          <div className="AutoCompleteText">
            <AutocompleteTextbox data={countries} />
          </div>
        </div>
        <br />
        <CsvFile />
      </div>
    );
  }
}

export default App;
//AutocompleteTextbox nested <div>'s because of Css classes
