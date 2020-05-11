import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

import toDollars from "../utils/toDollars.js";

class ResultsChart extends React.Component {
  state = {
    series: [
      {
        name: "Total Savings",
        data: [...this.props.yArray],
      },
    ],
    options: {
      chart: {
        height: 350,
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
        enabled: true,
        theme: "dark",
        x: {
          formatter: (x) => {
            return `Age ${this.props.xArray[x - 1]}`;
          },
        },
      },
      colors: ["#59cd90"],
      grid: {
        borderColor: "#f1ece2",
      },
      xaxis: {
        categories: [...this.props.xArray],
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
          type={this.props.chartType}
          width="100%"
          height={300}
        />
      </div>
    );
  }
}

ResultsChart.propTypes = {
  xArray: PropTypes.array.isRequired,
  yArray: PropTypes.array.isRequired,
  chartType: PropTypes.string.isRequired,
};

export default ResultsChart;
