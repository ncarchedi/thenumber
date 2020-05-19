import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Chart from "react-apexcharts";
import toDollars from "../../../utils/toDollars.js";

export default function ResultsChart(props) {
  const theme = useTheme();
  const { age, requiredSavings, expectedSavings } = props;

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      fontFamily: ["Roboto", "sans-serif"],
    },
    dataLabels: {
      enabled: false,
    },
    // markers: {
    //   size: 5,
    //   strokeColors: theme.palette.background.default,
    //   strokeWidth: 3,
    // },
    tooltip: {
      enabled: true,
      theme: "dark",
      x: {
        formatter: (x) => {
          return `Age ${age[x - 1]}`;
        },
      },
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    legend: {
      position: "top",
      labels: {
        colors: theme.palette.text.primary,
      },
    },
    xaxis: {
      categories: [...age],
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
        formatter: toDollars,
      },
    },
  };

  const series = [
    {
      name: "Required Savings",
      data: [...requiredSavings],
    },
    {
      name: "Expected Savings",
      data: [...expectedSavings],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="100%"
      height="400px"
    />
  );
}

ResultsChart.propTypes = {
  age: PropTypes.array.isRequired,
  requiredSavings: PropTypes.array.isRequired,
  expectedSavings: PropTypes.array.isRequired,
};
