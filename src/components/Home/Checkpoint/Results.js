import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CountUp from "react-countup";
import ResultsChart from "./ResultsChart";
import toDollars from "../../../utils/toDollars";
import calculateRequiredAndExpectedSavings from "../../../utils/calculateRequiredAndExpectedSavings";

const useStyles = makeStyles((theme) => ({
  headerText: {
    display: "inline-block",
    padding: theme.spacing(0, 5, 3, 5),
    color: theme.palette.primary.main,
    fontFamily: ["Bai Jamjuree", "sans-serif"],
    borderBottom: "solid",
    borderBottomWidth: "5px",
  },
  supportingText: {
    maxWidth: theme.breakpoints.values.sm + 50,
    margin: theme.spacing(4, "auto"),
    fontWeight: 400,
  },
  actionButton: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 4),
    fontSize: "1.2rem",
  },
}));

export default function Results(props) {
  const classes = useStyles();
  const {
    currentAge,
    monthlyExpenses,
    monthlySavings,
    totalSavings,
    inflationRate,
    stocksReturn,
    percentStocks,
  } = props;

  const {
    age,
    requiredSavings,
    expectedSavings,
    canRetire,
  } = calculateRequiredAndExpectedSavings(
    currentAge,
    monthlyExpenses,
    monthlySavings,
    totalSavings,
    inflationRate,
    stocksReturn,
    percentStocks
  );

  const breakeven = canRetire.findIndex((e) => e);
  const retirementAge = age[breakeven];
  const retirementAmount = expectedSavings[breakeven];
  const yearsToRetirement = retirementAge - currentAge;

  return (
    <React.Fragment>
      <Typography variant="h2" className={classes.headerText}>
        <CountUp
          end={retirementAmount}
          prefix="$"
          separator=","
          duration={1.5}
        />
      </Typography>
      <Typography variant="h6" className={classes.supportingText}>
        If you continue saving {toDollars(monthlySavings)} a month for the next{" "}
        {yearsToRetirement} years, you'll be on track to retire at age{" "}
        {retirementAge} with a total of {toDollars(retirementAmount)} in
        savings.
      </Typography>
      <ResultsChart
        age={age}
        requiredSavings={requiredSavings}
        expectedSavings={expectedSavings}
        retirementAge={retirementAge}
      />
      <Button
        className={classes.actionButton}
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowForwardIcon />}
        onClick={() => alert("Coming soon!")}
      >
        Let's do this!
      </Button>
    </React.Fragment>
  );
}

Results.propTypes = {
  currentAge: PropTypes.string.isRequired,
  monthlyExpenses: PropTypes.string.isRequired,
  monthlySavings: PropTypes.string.isRequired,
  totalSavings: PropTypes.string.isRequired,
  inflationRate: PropTypes.string.isRequired,
  stocksReturn: PropTypes.string.isRequired,
  percentStocks: PropTypes.string.isRequired,
};
