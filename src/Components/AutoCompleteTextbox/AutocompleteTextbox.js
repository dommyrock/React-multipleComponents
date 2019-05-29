import React from "react";
import "../../Autocomplete.css";

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
    const value = event.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = data.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({
      suggestions,
      text: value
    }));
  };

  suggestionsSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionsSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <p>Autocomplete textbox</p>
        <input type="text" value={this.state.text} onChange={this.handleTextChange} />
        {this.renderSuggestions()}
      </div>
    );
  }
}
