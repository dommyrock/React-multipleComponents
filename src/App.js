import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeginnerComponents from "./Components/BeginnerComponents/ComponentStack";
import Warning from "./Warning";
import CalculateMonoState from "./CalculateMonoState";
import LoggedInOut from "./Components/LoggedIn_Out/LoggedInOut";
import Form from "./Components/Form/Form";
import MemeApp from "./Components/MemeGenerator/MemeApp";
import TodosHooksApp from "./Components/Todo/TodoWithHooks";
import TextEditor from "./Components/TextEditor/TextEditor";
import UnsplashPhotos from "./Components/UnsplashPhotosAPI/UnsplashPhotos";
import FileUploadApp from "./Components/FileUploader/FileUploadApp";
import AutocompleteTextbox from "./Components/AutoCompleteTextbox/AutocompleteTextbox";
import countries from "./Components/AutoCompleteTextbox/countries";
import CsvTable from "./Components/CsvFileApi/CsvTable";
import PieCharts from "./Components/CsvFileApi/PieCharts";
import BarCharts from "./Components/CsvFileApi/BarCharts";
//this is default class created by React as template
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div style={{ backgroundColor: "lightgrey" }}>
          <h2>--Component Library--</h2>
          <h4>By: Dominik Polzer</h4>
        </div>
        <BeginnerComponents />
        <hr />
        <CalculateMonoState />
        <hr />
        <Warning />
        <br />
        {/* <CounterApp /> temp disabled (because of console output)*/}
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
        <CsvTable />
        <PieCharts />
        {/* <BarCharts /> */}
      </div>
    );
  }
}

export default App;
//AutocompleteTextbox nested <div>'s because of Css classes
