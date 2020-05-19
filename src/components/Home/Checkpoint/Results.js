import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ResultsChart from "./ResultsChart";
import toDollars from "../../../utils/toDollars";
import calculateRequiredAndExpectedSavings from "../../../utils/calculateRequiredAndExpectedSavings";

const useStyles = makeStyles((theme) => ({
  headerText: {
    display: "inline-block",
    padding: theme.spacing(0, 5, 3, 5),
    color: theme.palette.primary.main,
    fontFamily: ["Racing Sans One", "cursive"],
    borderBottom: "solid",
    borderBottomWidth: "5px",
  },
  supportingText: {
    margin: theme.spacing(4),
    fontWeight: 400,
  },
  actionButton: {
    marginTop: theme.spacing(3),
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
    annualReturn,
    withdrawalRate,
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
    annualReturn,
    withdrawalRate
  );

  const breakeven = canRetire.findIndex((e) => e);
  const retirementAge = age[breakeven];
  const retirementAmount = expectedSavings[breakeven];
  const yearsToRetirement = retirementAge - currentAge;
  const additionalSavings = retirementAmount - totalSavings;

  return (
    <React.Fragment>
      <Typography variant="h2" className={classes.headerText}>
        {toDollars(retirementAmount)}
      </Typography>
      <Typography variant="h6" className={classes.supportingText}>
        {`This is your number—the amount you need to retire at age ${retirementAge}. You have ${toDollars(
          totalSavings
        )} today, so you need to accumulate an additional ${toDollars(
          additionalSavings
        )} over the next ${yearsToRetirement} years.`}
      </Typography>
      <ResultsChart
        age={age}
        requiredSavings={requiredSavings}
        expectedSavings={expectedSavings}
      />
      {/* <Button
        className={classes.actionButton}
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowForwardIcon />}
        onClick={() => alert("Coming soon!")}
      >
        Create a Plan
      </Button> */}
    </React.Fragment>
  );
}

Results.propTypes = {
  currentAge: PropTypes.string.isRequired,
  monthlyExpenses: PropTypes.string.isRequired,
  monthlySavings: PropTypes.string.isRequired,
  totalSavings: PropTypes.string.isRequired,
  inflationRate: PropTypes.string.isRequired,
  annualReturn: PropTypes.string.isRequired,
  withdrawalRate: PropTypes.string.isRequired,
};
