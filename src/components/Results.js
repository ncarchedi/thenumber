import React, { useState } from "react";
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

  const {
    retirementAge,
    currentAge,
    monthlyExpenses,
    currentSavings,
  } = props.user;

  // use props for initial form state
  const [retirementAgeInput, setRetirementAgeInput] = useState(retirementAge);
  const [currentAgeInput, setCurrentAgeInput] = useState(currentAge);
  const [monthlyExpensesInput, setMonthlyExpensesInput] = useState(
    monthlyExpenses
  );
  const [currentSavingsInput, setCurrentSavingsInput] = useState(
    currentSavings
  );

  const {
    annualReturn,
    withdrawalRate,
    // annualInflation,
  } = props.assumptions;

  const targetSavings = calculateTargetSavings(
    currentAge,
    retirementAge,
    monthlyExpenses,
    withdrawalRate
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

  const updateUser = (e) => {
    e.preventDefault();

    props.setUser({
      ...props.user,
      retirementAge: retirementAgeInput,
      currentAge: currentAgeInput,
      monthlyExpenses: monthlyExpensesInput,
      currentSavings: currentSavingsInput,
    });
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={3} className={classes.formContainer}>
        <form onSubmit={updateUser}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6">Your Inputs</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="retirementAge"
                name="retirementAge"
                label="Retirement age"
                value={retirementAgeInput}
                onChange={(e) => setRetirementAgeInput(e.target.value)}
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
                value={currentAgeInput}
                onChange={(e) => setCurrentAgeInput(e.target.value)}
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
                value={monthlyExpensesInput}
                onChange={(e) => setMonthlyExpensesInput(e.target.value)}
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
                value={currentSavingsInput}
                onChange={(e) => setCurrentSavingsInput(e.target.value)}
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
              <Button endIcon={<ReplayIcon />} type="submit">
                Update Results
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={9} className={classes.resultsContainer}>
        <div className={classes.resultsSectionHeaderText}>
          {toDollars(targetSavings)}
        </div>
        <p className={classes.resultsSupportingText}>
          {`This is your number—the amount you need to retire at age ${retirementAge}. You have ${toDollars(
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
}

Results.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    retirementAge: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    currentSavings: PropTypes.string.isRequired,
  }),
  assumptions: PropTypes.exact({
    annualReturn: PropTypes.number.isRequired,
    withdrawalRate: PropTypes.number.isRequired,
    annualInflation: PropTypes.number.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};
