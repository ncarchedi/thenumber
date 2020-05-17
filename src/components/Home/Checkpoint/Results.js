import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ResultsChart from "./ResultsChart";
import toDollars from "../../../utils/toDollars";
import getTotalSavingsChartData from "../../../utils/getTotalSavingsChartData";
import calculateAnnualContribution from "../../../utils/calculateAnnualContribution";
import calculateTargetSavings from "../../../utils/calculateTargetSavings";

const useStyles = makeStyles((theme) => ({
  headerText: {
    display: "inline-block",
    padding: theme.spacing(0, 5, 3, 5),
    color: theme.palette.primary.main,
    fontFamily: ["Racing Sans One", "cursive"],
    borderBottom: "solid",
  },
  supportingText: {
    margin: theme.spacing(4, 4, 2, 4),
    fontWeight: 400,
  },
  actionButton: {
    marginTop: theme.spacing(3),
  },
}));

export default function Results(props) {
  const classes = useStyles();
  const {
    retirementAge,
    currentAge,
    monthlyExpenses,
    currentSavings,
    annualReturn,
    withdrawalRate,
    inflationRate,
  } = props;
  const targetSavings = calculateTargetSavings(
    currentAge,
    retirementAge,
    monthlyExpenses,
    withdrawalRate,
    inflationRate
  );

  const additionalSavings = targetSavings - currentSavings;
  const yearsToRetirement = retirementAge - currentAge;

  const annualContribution = calculateAnnualContribution(
    currentSavings,
    targetSavings,
    annualReturn,
    yearsToRetirement
  );

  const totalSavingsChartData = getTotalSavingsChartData(
    currentAge,
    retirementAge,
    currentSavings,
    annualContribution,
    annualReturn
  );

  return (
    <React.Fragment>
      <Typography variant="h2" className={classes.headerText}>
        {toDollars(targetSavings)}
      </Typography>
      <Typography variant="h6" className={classes.supportingText}>
        {`This is your number—the amount you need to retire at age ${retirementAge}. You have ${toDollars(
          currentSavings
        )} today, so you need to accumulate an additional ${toDollars(
          additionalSavings
        )} over the next ${yearsToRetirement} years.`}
      </Typography>
      <ResultsChart
        xArray={totalSavingsChartData.ageArray}
        yArray={totalSavingsChartData.savingsArray}
        chartType="line"
      />
      <Button
        className={classes.actionButton}
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowForwardIcon />}
        onClick={() => alert("Coming soon!")}
      >
        Create a Plan
      </Button>
    </React.Fragment>
  );
}

Results.propTypes = {
  retirementAge: PropTypes.string.isRequired,
  currentAge: PropTypes.string.isRequired,
  monthlyExpenses: PropTypes.string.isRequired,
  currentSavings: PropTypes.string.isRequired,
  annualReturn: PropTypes.string.isRequired,
  withdrawalRate: PropTypes.string.isRequired,
  inflationRate: PropTypes.string.isRequired,
};
