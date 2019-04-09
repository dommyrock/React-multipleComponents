import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
  //just passing it thrue to title
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input
          value={this.props.title} //initializes input to current title value
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
//whenever user input receves change event , its gona call our Change event
//"this" is important to pass to make sure its bound to right context
