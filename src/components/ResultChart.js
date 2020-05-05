import React from "react";
import Chart from "react-apexcharts";

class ResultChart extends React.Component {
  state = {
    series: [
      {
        name: "Savings",
        data: [1, 2.5, 5, 10, 20, 40, 80],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
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
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        enabled: false,
      },
      colors: ["#59cd90"],
      grid: {
        borderColor: "#f1ece2",
      },
      xaxis: {
        categories: [30, 35, 40, 45, 50, 55, 60],
        labels: {
          style: {
            colors: "#f1ece2",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#f1ece2",
          },
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
