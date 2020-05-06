import React from "react";
import Chart from "react-apexcharts";

import toDollars from "../utils/toDollars.js";

class ResultChart extends React.Component {
  state = {
    series: [
      {
        name: "Savings",
        data: [100000, 200000, 400000, 700000, 1200000, 2100000, 3600000],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        fontFamily: "sans-serif",
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 7,
        colors: "#59cd90",
        strokeColors: "#262626",
        strokeWidth: 3,
      },
      tooltip: {
        enabled: false,
      },
      colors: ["#59cd90"],
      grid: {
        borderColor: "#f1ece2",
      },
      xaxis: {
        title: {
          text: "Age",
          style: {
            color: "#f1ece2",
          },
        },
        categories: [30, 35, 40, 45, 50, 55, 60],
        labels: {
          style: {
            colors: "#f1ece2",
          },
        },
      },
      yaxis: {
        title: {
          text: "Total Savings",
          style: {
            color: "#f1ece2",
          },
        },
        labels: {
          style: {
            colors: "#f1ece2",
          },
          formatter: toDollars,
        },
      },
    },
  };

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="100%"
        height={300}
      />
    );
  }
}

export default ResultChart;
