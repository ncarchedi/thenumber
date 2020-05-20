import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Assumptions from "./Assumptions";
import Results from "./Results";

const useStyles = makeStyles((theme) => ({
  assumptionsContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
    },
  },
  resultsContainer: {
    textAlign: "center",
  },
}));

export default function Checkpoint(props) {
  const classes = useStyles();
  const {
    currentAge,
    monthlyExpenses,
    monthlySavings,
    totalSavings,
  } = props.user;
  const { inflationRate, annualReturn } = props.assumptions;

  // use props for initial assumptions form state
  const [monthlyExpensesInput, setMonthlyExpensesInput] = useState(
    monthlyExpenses
  );
  const [monthlySavingsInput, setMonthlySavingsInput] = useState(
    monthlySavings
  );
  const [totalSavingsInput, setTotalSavingsInput] = useState(totalSavings);
  const [inflationRateInput, setInflationRateInput] = useState(inflationRate);
  const [annualReturnInput, setAnnualReturnInput] = useState(annualReturn);

  const updateInputs = (e) => {
    e.preventDefault();

    props.setUser({
      ...props.user,
      monthlyExpenses: monthlyExpensesInput,
      monthlySavings: monthlySavingsInput,
      totalSavings: totalSavingsInput,
    });

    props.setAssumptions({
      ...props.assumptions,
      inflationRate: inflationRateInput,
      annualReturn: annualReturnInput,
    });
  };

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Grid container spacing={6}>
        <Grid item xs={12} md={3} className={classes.assumptionsContainer}>
          <Assumptions
            updateInputs={updateInputs}
            monthlyExpensesInput={monthlyExpensesInput}
            setMonthlyExpensesInput={setMonthlyExpensesInput}
            monthlySavingsInput={monthlySavingsInput}
            setMonthlySavingsInput={setMonthlySavingsInput}
            totalSavingsInput={totalSavingsInput}
            setTotalSavingsInput={setTotalSavingsInput}
            inflationRateInput={inflationRateInput}
            setInflationRateInput={setInflationRateInput}
            annualReturnInput={annualReturnInput}
            setAnnualReturnInput={setAnnualReturnInput}
          />
        </Grid>
        <Grid item xs={12} md={9} className={classes.resultsContainer}>
          <Results
            currentAge={currentAge}
            monthlyExpenses={monthlyExpenses}
            monthlySavings={monthlySavings}
            totalSavings={totalSavings}
            inflationRate={inflationRate}
            annualReturn={annualReturn}
          />
        </Grid>
      </Grid>
    </Slide>
  );
}

Checkpoint.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    monthlySavings: PropTypes.string.isRequired,
    totalSavings: PropTypes.string.isRequired,
  }),
  assumptions: PropTypes.exact({
    inflationRate: PropTypes.string.isRequired,
    annualReturn: PropTypes.string.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
  setAssumptions: PropTypes.func.isRequired,
};
