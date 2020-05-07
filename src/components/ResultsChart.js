import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

import toDollars from "../utils/toDollars.js";

class ResultsChart extends React.Component {
  state = {
    series: [
      {
        name: "Total Savings",
        data: [...this.props.savingsArray],
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
      markers: {
        size: 5,
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
        categories: [...this.props.ageArray],
        labels: {
          style: {
            colors: "#f1ece2",
          },
        },
      },
      yaxis: {
        // title: {
        //   text: "Total Savings",
        //   style: {
        //     color: "#f1ece2",
        //   },
        // },
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
      <div className="resultsChart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="100%"
          height={300}
        />
      </div>
    );
  }
}

ResultsChart.propTypes = {
  ageArray: PropTypes.array.isRequired,
  savingsArray: PropTypes.array.isRequired,
};

export default ResultsChart;
