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
  },
  resultsContainer: {
    textAlign: "center",
  },
}));

export default function Checkpoint(props) {
  const classes = useStyles();
  const { user, setUser, setActiveStage } = props;
  const {
    currentAge,
    monthlyExpenses,
    monthlySavings,
    totalSavings,
    inflationRate,
    stocksReturn,
    percentStocks,
  } = user;

  // use props for initial assumptions form state
  const [monthlyExpensesInput, setMonthlyExpensesInput] = useState(
    monthlyExpenses
  );
  const [monthlySavingsInput, setMonthlySavingsInput] = useState(
    monthlySavings
  );
  const [totalSavingsInput, setTotalSavingsInput] = useState(totalSavings);
  const [inflationRateInput, setInflationRateInput] = useState(inflationRate);
  const [stocksReturnInput, setStocksReturnInput] = useState(stocksReturn);
  const [percentStocksInput, setPercentStocksInput] = useState(percentStocks);

  const updateInputs = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      monthlyExpenses: monthlyExpensesInput,
      monthlySavings: monthlySavingsInput,
      totalSavings: totalSavingsInput,
      inflationRate: inflationRateInput,
      stocksReturn: stocksReturnInput,
      percentStocks: percentStocksInput,
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
            stocksReturnInput={stocksReturnInput}
            setStocksReturnInput={setStocksReturnInput}
            percentStocksInput={percentStocksInput}
            setPercentStocksInput={setPercentStocksInput}
          />
        </Grid>
        <Grid item xs={12} md={9} className={classes.resultsContainer}>
          <Results
            currentAge={currentAge}
            monthlyExpenses={monthlyExpenses}
            monthlySavings={monthlySavings}
            totalSavings={totalSavings}
            inflationRate={inflationRate}
            stocksReturn={stocksReturn}
            percentStocks={percentStocks}
            setActiveStage={setActiveStage}
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
    inflationRate: PropTypes.string.isRequired,
    stocksReturn: PropTypes.string.isRequired,
    percentStocks: PropTypes.string.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
  setActiveStage: PropTypes.func.isRequired,
};
