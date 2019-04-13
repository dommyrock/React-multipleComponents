import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      firstName: "",
      lastName: "",
      age: "",
      location: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {}
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }
  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="Input first name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Input last name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.age}
            name="age"
            placeholder="Input age"
            onChange={this.handleChange}
          />
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
          <br />
          <select
            value={this.state.location}
            name="location"
            onChange={this.handleChange}
          >
            <option value="">select location</option>
            <option value="England">England</option>
            <option value="US">US</option>
            <option value="Asia">asia</option>
            <option value="Russia">Russ</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />
          </label>
          Vegan?
          <br />
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            />
          </label>
          Kosher?
          <br />
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            />
          </label>
          Lactose free?
        </form>
        <hr />
        <h1>Entered info :</h1>
        <p>
          Your name:{this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age:{this.state.age}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Location: {this.state.location}</p>
        <p>Vegan/{this.state.isVegan ? "yes" : "nay"}</p>
        <p>Lactose/{this.state.isLactoseFree ? "yes" : "nay"}</p>
        <p>Kosher/{this.state.isKosher ? "yes" : "nay"}</p>
      </main>
    );
  }
}

export default Form;
