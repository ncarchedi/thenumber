import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import ResultsChart from "./ResultsChart";
import toDollars from "../utils/toDollars";
import getTotalSavingsChartData from "../utils/getTotalSavingsChartData";
import calculateAnnualContribution from "../utils/calculateAnnualContribution";
import calculateTargetSavings from "../utils/calculateTargetSavings";

const useStyles = makeStyles((theme) => ({
  resultsContainer: {
    display: "flex",
    alignItems: "center",
  },
  resultsSectionHeaderText: {
    display: "inline-block",
    padding: theme.spacing(3, 5),
    color: "#59cd90",
    fontFamily: ["Racing Sans One", "cursive"],
    fontSize: "2.5rem",
    borderBottom: "solid",
  },
  resultsSupportingText: {
    fontSize: "1.2rem",
    margin: "35px",
  },
  resultsButtonGroup: {
    display: "flex",
    justifyContent: "center",
    "& button": {
      margin: theme.spacing(3),
    },
  },
}));

export default function Results(props) {
  const classes = useStyles();

  const renderResults = () => {
    const {
      targetAge,
      currentAge,
      monthlyExpenses,
      currentSavings,
    } = props.userData;

    const {
      annualReturn,
      withdrawalRate,
      // annualInflation,
    } = props.assumptions;

    const targetSavings = calculateTargetSavings(
      currentAge,
      targetAge,
      monthlyExpenses,
      withdrawalRate
    );

    const additionalSavings = targetSavings - currentSavings;
    const yearsToRetirement = targetAge - currentAge;

    const annualContribution = calculateAnnualContribution(
      currentSavings,
      targetSavings,
      annualReturn,
      yearsToRetirement
    );

    const totalSavingsChartData = getTotalSavingsChartData(
      currentAge,
      targetAge,
      currentSavings,
      annualContribution,
      annualReturn
    );

    return (
      <Grid container spacing={6} className={classes.resultsContainer}>
        <Grid item xs={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="retirementAge"
                name="retirementAge"
                label="Retirement age"
                value={targetAge}
                // onChange={setRetirementAge}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="currentAge"
                name="currentAge"
                label="Current age"
                value={currentAge}
                // onChange={setCurrentAge}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="monthlyExpenses"
                name="monthlyExpenses"
                label="Monthly expenses"
                value={monthlyExpenses}
                // onChange={setMonthlyExpenses}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="currentSavings"
                name="currentSavings"
                label="Current savings"
                value={currentSavings}
                // onChange={setCurrentSavings}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} style={{ textAlign: "center" }}>
          <div className={classes.resultsSectionHeaderText}>
            {toDollars(targetSavings)}
          </div>
          <p className={classes.resultsSupportingText}>
            {`This is your number—the amount you need to retire at age ${targetAge}. You have ${toDollars(
              currentSavings
            )} today, so you need to accumulate an additional ${toDollars(
              additionalSavings
            )} over the next ${yearsToRetirement} years.`}
          </p>
          <ResultsChart
            xArray={totalSavingsChartData.ageArray}
            yArray={totalSavingsChartData.savingsArray}
            chartType="line"
          />
          <div className={classes.resultsButtonGroup}>
            <Button
              variant="contained"
              color="default"
              size="large"
              endIcon={<ReplayIcon />}
              onClick={props.onRestartQuiz}
            >
              Start Over
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => alert("Coming soon!")}
            >
              Create a Plan
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  };

  return renderResults();
}

Results.propTypes = {
  userData: PropTypes.exact({
    name: PropTypes.string.isRequired,
    targetAge: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    currentSavings: PropTypes.string.isRequired,
  }),
  assumptions: PropTypes.exact({
    annualReturn: PropTypes.number.isRequired,
    withdrawalRate: PropTypes.number.isRequired,
    annualInflation: PropTypes.number.isRequired,
  }),
  onRestartQuiz: PropTypes.func.isRequired,
};
