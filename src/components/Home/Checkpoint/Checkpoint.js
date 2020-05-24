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
    marginTop: theme.spacing(2),
  },
  resultsContainer: {
    textAlign: "center",
  },
}));

export default function Checkpoint(props) {
  const classes = useStyles();
  const [showAssumptions, setShowAssumptions] = useState(false);

  const { user, setUser, goToNextStage } = props;
  const {
    monthlyExpenses,
    percentExpenses,
    monthlySavings,
    totalSavings,
    inflationRate,
    stocksReturn,
    percentStocks,
    lifeExpectancy,
    taxRate,
  } = user;

  // use props for initial assumptions form state
  const [monthlyExpensesInput, setMonthlyExpensesInput] = useState(
    monthlyExpenses
  );
  const [percentExpensesInput, setPercentExpensesInput] = useState(
    percentExpenses
  );
  const [monthlySavingsInput, setMonthlySavingsInput] = useState(
    monthlySavings
  );
  const [totalSavingsInput, setTotalSavingsInput] = useState(totalSavings);
  const [inflationRateInput, setInflationRateInput] = useState(inflationRate);
  const [stocksReturnInput, setStocksReturnInput] = useState(stocksReturn);
  const [percentStocksInput, setPercentStocksInput] = useState(percentStocks);
  const [lifeExpectancyInput, setLifeExpectancyInput] = useState(
    lifeExpectancy
  );
  const [taxRateInput, setTaxRateInput] = useState(taxRate);

  const updateInputs = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      monthlyExpenses: monthlyExpensesInput,
      percentExpenses: percentExpensesInput,
      monthlySavings: monthlySavingsInput,
      totalSavings: totalSavingsInput,
      inflationRate: inflationRateInput,
      stocksReturn: stocksReturnInput,
      percentStocks: percentStocksInput,
      lifeExpectancy: lifeExpectancyInput,
      taxRate: taxRateInput,
    });
  };

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Grid container spacing={6}>
        {showAssumptions && (
          <Grid item xs={12} md={3} className={classes.assumptionsContainer}>
            <Assumptions
              updateInputs={updateInputs}
              monthlyExpensesInput={monthlyExpensesInput}
              setMonthlyExpensesInput={setMonthlyExpensesInput}
              percentExpensesInput={percentExpensesInput}
              setPercentExpensesInput={setPercentExpensesInput}
              monthlySavingsInput={monthlySavingsInput}
              setMonthlySavingsInput={setMonthlySavingsInput}
              totalSavingsInput={totalSavingsInput}
              setTotalSavingsInput={setTotalSavingsInput}
              inflationRateInput={inflationRateInput}
              setInflationRateInput={setInflationRateInput}
              stocksReturnInput={stocksReturnInput}
              setStocksReturnInput={setStocksReturnInput}
              percentStocksInput={percentStocksInput}
              setPercentStocksInput={setPercentStocksInput}
              lifeExpectancyInput={lifeExpectancyInput}
              setLifeExpectancyInput={setLifeExpectancyInput}
              taxRateInput={taxRateInput}
              setTaxRateInput={setTaxRateInput}
            />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={showAssumptions ? 9 : 12}
          className={classes.resultsContainer}
        >
          <Results
            user={user}
            showAssumptions={showAssumptions}
            setShowAssumptions={setShowAssumptions}
            goToNextStage={goToNextStage}
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
    percentExpenses: PropTypes.string.isRequired,
    monthlySavings: PropTypes.string.isRequired,
    totalSavings: PropTypes.string.isRequired,
    inflationRate: PropTypes.string.isRequired,
    stocksReturn: PropTypes.string.isRequired,
    percentStocks: PropTypes.string.isRequired,
    lifeExpectancy: PropTypes.string.isRequired,
    taxRate: PropTypes.string.isRequired,
    nextAction: PropTypes.string.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
  goToNextStage: PropTypes.func.isRequired,
};
