import React, { Component } from "react";
//GREAT REACT Library for making forms "Formik"
class Forms extends Component {
  constructor() {
    super();
    this.state = {
      isFriendly: true,
      firstName: "",
      lastName: "",
      favColor: "blue"
    };
    this.handleChange = this.handleChange.bind(this); //when we call setState on method we need to declare it in constructor
  }
  handleChange(event) {
    //when event fires it passes "event" parameter (has info about element that fired event)
    // const {name,value} =event.target ---> this.setState({[name]: value (obj destructuring)
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  render() {
    //onSubmit in form tag instead of in button (works both ways)
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="Input something"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Input something"
          onChange={this.handleChange}
        />
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <textarea value={"Some default value"} onChange={this.handleChange} />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <h2>You are a {this.state.gender}</h2>
        <br />
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="black">Yellow</option>
        </select>
        <h2>Your favourite color is--> {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    );
  }
}

export default Forms;
//in HTML 5 --button found inside <form> acts as <input type="submit"...
//they will fire onSumbit
//in react we update state of form component on each keystroke (instead of updating it just before submiting with only JS)
