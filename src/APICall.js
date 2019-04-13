import React, { Component } from "react";

//https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// api example @ https://swapi.co
//what is PROMISE
//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class FetchingDataFromAPI extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }
  //1st than serializes promise response to json , 2nd// returns data promise to console
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }
  render() {
    const msg = this.state.loading ? "loading..." : this.state.character.name;
    return (
      <div>
        <p>{msg}</p>
      </div>
    );
  }
}

export default FetchingDataFromAPI;

/*The fetch() method of the WindowOrWorkerGlobalScope mixin starts the process of fetching
 a resource from the network.
  This returns a promise that resolves to the Response object representing the response to your
 request. */
