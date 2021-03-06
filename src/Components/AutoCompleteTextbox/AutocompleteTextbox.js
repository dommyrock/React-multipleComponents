import React from "react";

export default class AutocompleteTextbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ""
    };
  }

  handleTextChange = event => {
    const { data } = this.props;
    const value = event.target.value; //get text value of <input>

    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i"); // "i" param ->ignore case
      suggestions = data.sort().filter(v => regex.test(v)); // regex.test --similar to IsMatch in C# (returns bool)
    }
    this.setState(() => ({
      suggestions,
      text: value
    }));
  };

  //Event fires when item is selected from <ul> and binds states
  suggestionsSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  //Render sugested countries to DOM
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length !== 0) {
      return (
        <ul>
          {suggestions.map(item => (
            <li onClick={() => this.suggestionsSelected(item)}>{item}</li> //cast each item to <li>
          ))}
        </ul>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <p>Auto suggestion textbox</p>
        <input type="text" value={this.state.text} onChange={this.handleTextChange} placeholder="Input country name" />
        {this.renderSuggestions()}
      </div>
    );
  }
}
