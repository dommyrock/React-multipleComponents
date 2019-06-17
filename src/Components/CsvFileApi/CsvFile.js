import React from "react";
//Need to enable CORS for dev on backend server(or host on other domain) for this

//Api URI(hosted on iss for test) : http://localhost:62174/csv/file?$select=firstname
export default class CsvFile extends React.Component {
  constructor() {
    super();
    this.state = {
      apiUrl: "http://localhost:62174/csv/file",
      data: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:62174/csv/file")
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(ex => {
        console.log("Can’t access " + this.state.apiUrl + " response. Blocked by browser? " + ex);
      });
  };

  render() {
    console.log("Requested url: " + this.state.apiUrl);

    console.log(this.state.data);

    return (
      <table>
        <tbody>
          {this.state.data.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
