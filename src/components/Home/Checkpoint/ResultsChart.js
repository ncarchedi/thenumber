import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

import toDollars from "../../../utils/toDollars.js";

export default function ResultsChart(props) {
  const options = {
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
          return `Age ${props.xArray[x - 1]}`;
        },
      },
    },
    colors: ["#59cd90"],
    grid: {
      borderColor: "#f1ece2",
    },
    xaxis: {
      categories: [...props.xArray],
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
  };

  const series = [
    {
      name: "Total Savings",
      data: [...props.yArray],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type={props.chartType}
      width="100%"
      height={300}
    />
  );
}

ResultsChart.propTypes = {
  xArray: PropTypes.array.isRequired,
  yArray: PropTypes.array.isRequired,
  chartType: PropTypes.string.isRequired,
};
