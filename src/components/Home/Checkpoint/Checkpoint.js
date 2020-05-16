import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Assumptions from "./Assumptions";
import Results from "./Results";

const useStyles = makeStyles((theme) => ({
  assumptionsContainer: {
    // marginTop: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  resultsContainer: {
    textAlign: "center",
  },
}));

export default function Checkpoint(props) {
  const classes = useStyles();

  const {
    retirementAge,
    currentAge,
    monthlyExpenses,
    currentSavings,
  } = props.user;

  const { annualReturn, withdrawalRate, inflationRate } = props.assumptions;

  // use props for initial assumptions form state
  const [retirementAgeInput, setRetirementAgeInput] = useState(retirementAge);
  const [currentAgeInput, setCurrentAgeInput] = useState(currentAge);
  const [monthlyExpensesInput, setMonthlyExpensesInput] = useState(
    monthlyExpenses
  );
  const [currentSavingsInput, setCurrentSavingsInput] = useState(
    currentSavings
  );
  const [inflationRateInput, setInflationRateInput] = useState(inflationRate);

  const updateInputs = (e) => {
    e.preventDefault();

    props.setUser({
      ...props.user,
      retirementAge: retirementAgeInput,
      currentAge: currentAgeInput,
      monthlyExpenses: monthlyExpensesInput,
      currentSavings: currentSavingsInput,
    });

    props.setAssumptions({
      ...props.assumptions,
      inflationRate: inflationRateInput,
    });
  };

  return (
    <React.Fragment>
      <Grid container spacing={6}>
        <Grid item xs={12} md={3} className={classes.assumptionsContainer}>
          <Assumptions
            updateInputs={updateInputs}
            retirementAgeInput={retirementAgeInput}
            setRetirementAgeInput={setRetirementAgeInput}
            currentAgeInput={currentAgeInput}
            setCurrentAgeInput={setCurrentAgeInput}
            monthlyExpensesInput={monthlyExpensesInput}
            setMonthlyExpensesInput={setMonthlyExpensesInput}
            currentSavingsInput={currentSavingsInput}
            setCurrentSavingsInput={setCurrentSavingsInput}
            inflationRateInput={inflationRateInput}
            setInflationRateInput={setInflationRateInput}
          />
        </Grid>
        <Grid item xs={12} md={9} className={classes.resultsContainer}>
          <Results
            retirementAge={retirementAge}
            currentAge={currentAge}
            monthlyExpenses={monthlyExpenses}
            currentSavings={currentSavings}
            annualReturn={annualReturn}
            withdrawalRate={withdrawalRate}
            inflationRate={inflationRate}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Checkpoint.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    retirementAge: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    currentSavings: PropTypes.string.isRequired,
  }),
  assumptions: PropTypes.exact({
    annualReturn: PropTypes.string.isRequired,
    withdrawalRate: PropTypes.string.isRequired,
    inflationRate: PropTypes.string.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
  setAssumptions: PropTypes.func.isRequired,
};
