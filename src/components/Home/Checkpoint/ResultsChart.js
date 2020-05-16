import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Chart from "react-apexcharts";
import toDollars from "../../../utils/toDollars.js";

export default function ResultsChart(props) {
  const theme = useTheme();

  const options = {
    chart: {
      height: 350,
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
    markers: {
      size: 5,
      strokeColors: theme.palette.background.default,
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
    colors: [theme.palette.primary.main],
    xaxis: {
      categories: [...props.xArray],
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
