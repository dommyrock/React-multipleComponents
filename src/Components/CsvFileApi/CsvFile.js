import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
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

    const columns = [
      {
        Header: "Name",
        accessor: "firstName",
        filterable: true
      },
      {
        Header: "Surname",
        accessor: "lastName"
      },
      {
        Header: "Zip",
        accessor: "zipCode"
      },
      {
        Header: "City",
        accessor: "city"
      }
    ];
    //<> </> same as React.Fragment
    return (
      <>
        <h4 style={{ color: "grey" }}>Table displays valid (stored) data from "CsvFileUpload-MVC" App</h4>
        <ReactTable columns={columns} data={this.state.data} />
        <br />
      </>
    );
  }
}

//Todo take stored data in DB and get  % of ppl from cityes (use some graph library )
