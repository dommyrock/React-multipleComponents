import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
//graph part
import { Doughnut, Pie, Polar } from "react-chartjs-2";
import { Set } from "immutable";
//Need to enable CORS for dev on backend server(or host on other domain) for this

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

  //Function that dynamically calculates % based on number of cities (maps each city count )
  //Get data from data prop and iterate it and increment count of each city ?? or do it in DB instead ...when saving it ??
  calculatePercent = () => {
    const data = this.state.data;
    //distinct set
    var chartDataArr = [...new Set(data.map(item => item.city), { count: 1 })];
    // console.log(chartDataArr);
    //Set initial counts
    for (let i = 0; i < chartDataArr.length; i++) {
      chartDataArr[i] = {
        cityName: chartDataArr[i],
        cityCount: 0,
        percent: 0
      };
    }
    //update counts for each city
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < chartDataArr.length; j++) {
        if (chartDataArr[j].cityName === data[i].city) {
          chartDataArr[j].cityCount++;
        }
      }
    }
    //get percent
    let result = [];
    for (let i = 0; i < chartDataArr.length; i++) {
      chartDataArr[i].percent = (chartDataArr[i].cityCount / this.state.totalRows) * 100;
      result.push(chartDataArr[i].percent);
    }
    return result;

    // console.log(this.chartData);
  };

  render() {
    console.log(this.state.data);

    const columns = [
      {
        Header: "Name",
        accessor: "firstName",
        filterable: true
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
        accessor: "city"
      }
    ];
    //<> </> same as React.Fragment
    const chartOptions = {};
    const temp = {
      datasets: [
        {
          data: this.calculatePercent(),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)"
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)'
          ]
        }
      ],
      labels: ["Zagreb", "Split", "Other"],
      options: {}
    };
    console.log(this.calculatePercent());

    return (
      <>
        <h4 style={{ color: "grey" }}>Table displays valid (stored) data from "CsvFileUpload-MVC" App</h4>
        <ReactTable columns={columns} data={this.state.data} defaultPageSize={10} />
        <br />
        <button onClick={() => this.calculatePercent()}>TEMP Button</button>

        <Doughnut data={temp} />
        {/* <Polar data={temp} />
        <Pie data={temp} /> */}
      </>
    );
  }
}
//make first few beginner components "foldable/hidable"
//() => this.calculatePercent() (has to be "callback" function else it instantly executed)
