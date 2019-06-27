import React from "react";
//graph part
import { Doughnut, Pie, Polar } from "react-chartjs-2";
import Chart from "chart.js";
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
    //#region old percentage fetch
    // let result = [];
    //get percent ...not needed since --->Chart.js will total all of the numbers and calculate the relative proportion of each.
    // for (let i = 0; i < chartDataArr.length; i++) {
    //   chartDataArr[i].percent = (chartDataArr[i].cityCount / this.state.totalRows) * 100;
    //   result.push(chartDataArr[i].percent);
    // }
    //#endregion
    return chartDataArr;
    // console.log(this.chartData);
  };

  render() {
    // console.log(this.state.data);

    //Global options
    Chart.defaults.global.maintainAspectRatio = false; //to enable custom chart resizing
    Chart.defaults.global.animation.duration = 4000;
    Chart.defaults.global.animation.easing = "easeOutBounce"; //more animation styles at "https://www.chartjs.org/docs/latest/configuration/animations.html"

    // Chart.defaults.global.responsive = false;
    const data = {
      datasets: [
        {
          data: this.calculatePercent().map(({ cityCount }) => cityCount), //get single prop of ob returned from func
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(0, 247, 247, 0.15)",
            "rgba(245, 66, 66, 0.788)",
            "rgba(250, 227, 17, 0.788)",
            "rgba(175, 24, 221, 0.788)",
            "rgba(14, 247, 83, 0.788)"
          ],
          borderWidth: 1,
          borderColor: "#77",
          hoverBorderWidth: 5,
          hoverBorderColor: "lightblue"
          // hoverBackgroundColor: "transparent"
        }
      ],
      labels: this.calculatePercent().map(item => item.cityName), //get single prop of ob returned from func (same w lambda)
      options: {}
    };
    // console.log(this.calculatePercent());
    //chart size styling example "style={{ height: "20vh", width: "40vw" }}"
    return (
      <div className="App" style={{ height: "30vh" }}>
        <h2>Population charts</h2>
        <Doughnut
          data={data}
          options={{
            // title: { display: true, text: "Population chart", fontSize: 25 },
            legend: { position: "bottom" }
          }}
        />
        <Polar data={data} />
        <Pie data={data} />
      </div>
    );
  }
}
//<> </> same as React.Fragment

//make first few beginner components "foldable/hidable"
//() => this.calculatePercent() (has to be "callback" function else it's instantly executed)
