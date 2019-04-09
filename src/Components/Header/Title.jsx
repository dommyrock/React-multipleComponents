import React from "react";

export default class Header extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
//is finaly receiveing prop and printing it out , doesnt know where data is coming from
