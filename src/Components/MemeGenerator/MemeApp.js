import React, { Component } from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

class MemeApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default MemeApp;
