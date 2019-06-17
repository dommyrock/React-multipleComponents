import React from "react";

// This is just EXAMPLE of conditional rendering with button
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div style={{ color: "red" }} className="warning">
      Warning!!!!!
    </div>
  );
}

export default class Warning extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>{this.state.showWarning ? "Hide" : "Show"}</button>
      </div>
    );
  }
}
