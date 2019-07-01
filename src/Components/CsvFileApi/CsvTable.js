import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

//Need to enable CORS for dev(on backend server) (or host on other domain) for this
//Api URI(hosted on iss for test) : http://localhost:62174/csv/file?$select=firstname
export default class CsvFile extends React.Component {
  constructor() {
    super();
    this.state = {
      apiUrl: "http://localhost:62174/csv/file",
      data: [],
      totalRows: 0
    };
  }

  componentDidMount = () => {
    console.log("Requested url: " + this.state.apiUrl);
    fetch("http://localhost:62174/csv/file")
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response.data,
          totalRows: response.data.length
        });
      })
      .catch(ex => {
        console.log("Can’t access " + this.state.apiUrl + " response. Blocked by browser? " + ex);
      });
  };

  render() {
    // console.log(this.state.data);

    const columns = [
      {
        Header: "Name",
        accessor: "firstName"
      },
      {
        Header: "Surname",
        accessor: "lastName",
        filterable: true
      },
      {
        Header: "Zip",
        accessor: "zipCode"
      },
      {
        Header: "City",
        accessor: "city",
        filterable: true
      }
    ];

    //<> </> same as React.Fragment
    return (
      <>
        <div>
          <h4 style={{ color: "grey" }}>Table displays valid (stored) data from "CsvFileUpload-MVC" App</h4>
          <p style={{ color: "lightgrey" }}>Backend hosted on ISS</p>
          <ReactTable columns={columns} data={this.state.data} defaultPageSize={10} />
          <br />
        </div>
      </>
    );
  }
}

//() => this.calculatePercent() (has to be "callback" function else it's instantly executed)
