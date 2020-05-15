import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
  formContainer: {
    // marginTop: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  resultsContainer: {
    textAlign: "center",
  },
  resultsSectionHeaderText: {
    display: "inline-block",
    padding: theme.spacing(0, 5, 3, 5),
    color: "#59cd90",
    fontFamily: ["Racing Sans One", "cursive"],
    fontSize: "2.5rem",
    borderBottom: "solid",
  },
  resultsSupportingText: {
    fontSize: "1.2rem",
    margin: theme.spacing(5),
  },
  createPlanButton: {
    marginTop: theme.spacing(3),
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
    } = props.user;

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
      <Grid container spacing={6}>
        <Grid item xs={3} className={classes.formContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6">Your Inputs</Typography>
            </Grid>
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
            <Grid item xs={12}>
              <Typography variant="h6">Other Assumptions</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="inflationRate"
                name="inflationRate"
                label="Inflation rate"
                value={3}
                // onChange={setInflationRate}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                id="annualReturn"
                name="annualReturn"
                label="Annual return"
                value={7}
                // onChange={setAnnualReturn}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid> */}
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button
                endIcon={<ReplayIcon />}
                onClick={() => alert("Coming soon!")}
              >
                Update Results
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9} className={classes.resultsContainer}>
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
          <Button
            className={classes.createPlanButton}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => alert("Coming soon!")}
          >
            Create a Plan
          </Button>
        </Grid>
      </Grid>
    );
  };

  return renderResults();
}

Results.propTypes = {
  user: PropTypes.exact({
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
};
