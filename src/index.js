//App.css works here because we're importing "App from ./App" which imports App.css

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Layout from "./Components/Layout";
import TodoComponent from "./Components/Todo/Todo";
import StateManagement from "./StateManagement";
import EventHandlingInReact from "./EventHandlingInReact";
import CalculateMonoState from "./CalculateMonoState";
import LyfeCycleMethods from "./LifecycleMethods";
import FetchingDataFromAPI from "./APICall";
import Forms from "./Forms";
import Form from "./Components/Form/Form";
import MemeApp from "./Components/MemeGenerator/MemeApp";
import UnsplashPhotos from "./Components/UnsplashPhotosAPI/UnsplashPhotos";
import FileUploadApp from "./Components/FileUploader/FileUploadApp";
import AutocompleteTextbox from "./Components/AutoCompleteTextbox/AutocompleteTextbox";
import BarCharts from "./Components/CsvFileApi/BarCharts";
ReactDOM.render(<App />, document.getElementById("root")); //RENDER ALL COMPONENTS

//UNCOMENT TO DISPLAY SPECIFIC COMPONENT ONLY !!
// ReactDOM.render(<Layout />, document.getElementById("root"));
// ReactDOM.render(<TodoComponent />, document.getElementById("root"));
// ReactDOM.render(<StateManagement />, document.getElementById("root"));
// ReactDOM.render(<EventHandlingInReact />, document.getElementById("root"));
// ReactDOM.render(<ChangingState />, document.getElementById("root"));
// ReactDOM.render(<FetchingDataFromAPI />, document.getElementById("root"));
// ReactDOM.render(<Forms />, document.getElementById("root"));
// ReactDOM.render(<Form />, document.getElementById("root"));
// ReactDOM.render(<MemeApp />, document.getElementById("root"));
// ReactDOM.render(<UnsplashPhotos />, document.getElementById("root"));
// ReactDOM.render(<ChatApp />, document.getElementById("root"));
// ReactDOM.render(<FileUploadApp />, document.getElementById("root"));
// ReactDOM.render(<AutocompleteTextbox />, document.getElementById("root"));
// ReactDOM.render(<BarCharts />, document.getElementById("root"));
