//here we take care only about BL (biznis logic of component)
import React, { Component } from "react";
import FormComponent from "./FormComponent";
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
    return <FormComponent handleChange={this.handleChange} data={this.state} />;
  }
}

export default Form;
