import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";
import DollarInputFormat from "../../General/DollarInputFormat";
import PercentInputFormat from "../../General/PercentInputFormat";

export default function Assumptions(props) {
  const {
    updateInputs,
    monthlyExpensesInput,
    setMonthlyExpensesInput,
    percentExpensesInput,
    setPercentExpensesInput,
    monthlySavingsInput,
    setMonthlySavingsInput,
    totalSavingsInput,
    setTotalSavingsInput,
    inflationRateInput,
    setInflationRateInput,
    stocksReturnInput,
    setStocksReturnInput,
    percentStocksInput,
    setPercentStocksInput,
    lifeExpectancyInput,
    setLifeExpectancyInput,
    taxRateInput,
    setTaxRateInput,
  } = props;

  return (
    <form onSubmit={updateInputs}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Your Assumptions</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="monthlyExpenses"
            name="monthlyExpenses"
            label="Current monthly expenses"
            value={monthlyExpensesInput}
            onChange={(e) => setMonthlyExpensesInput(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputComponent: DollarInputFormat }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="percentExpenses"
            name="percentExpenses"
            label="Future expenses (% of current)"
            value={percentExpensesInput}
            onChange={(e) => setPercentExpensesInput(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputComponent: PercentInputFormat }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="monthlySavings"
            name="monthlySavings"
            label="Current monthly savings"
            value={monthlySavingsInput}
            onChange={(e) => setMonthlySavingsInput(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputComponent: DollarInputFormat }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="totalSavings"
            name="totalSavings"
            label="Total savings"
            value={totalSavingsInput}
            onChange={(e) => setTotalSavingsInput(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputComponent: DollarInputFormat }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="percentStocks"
            name="percentStocks"
            label="Stocks (% of total savings)"
            value={percentStocksInput}
            onChange={(e) => setPercentStocksInput(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputComponent: PercentInputFormat }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="lifeExpectancy"
            name="lifeExpectancy"
            label="Life expectancy"
            value={lifeExpectancyInput}
            onChange={(e) => setLifeExpectancyInput(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Other Assumptions</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="stocksReturn"
            name="stocksReturn"
            label="Annual return on stocks"
            value={stocksReturnInput}
            onChange={(e) => setStocksReturnInput(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputComponent: PercentInputFormat }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="inflationRate"
            name="inflationRate"
            label="Annual inflation rate"
            value={inflationRateInput}
            onChange={(e) => setInflationRateInput(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputComponent: PercentInputFormat }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="taxRate"
            name="taxRate"
            label="Tax rate on withdrawals"
            value={taxRateInput}
            onChange={(e) => setTaxRateInput(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputComponent: PercentInputFormat }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button endIcon={<ReplayIcon />} type="submit">
            Update Results
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

Assumptions.propTypes = {
  updateInputs: PropTypes.func.isRequired,
  monthlyExpensesInput: PropTypes.string.isRequired,
  setMonthlyExpensesInput: PropTypes.func.isRequired,
  percentExpensesInput: PropTypes.string.isRequired,
  setPercentExpensesInput: PropTypes.func.isRequired,
  monthlySavingsInput: PropTypes.string.isRequired,
  setMonthlySavingsInput: PropTypes.func.isRequired,
  totalSavingsInput: PropTypes.string.isRequired,
  setTotalSavingsInput: PropTypes.func.isRequired,
  inflationRateInput: PropTypes.string.isRequired,
  setInflationRateInput: PropTypes.func.isRequired,
  stocksReturnInput: PropTypes.string.isRequired,
  setStocksReturnInput: PropTypes.func.isRequired,
  percentStocksInput: PropTypes.string.isRequired,
  setPercentStocksInput: PropTypes.func.isRequired,
  lifeExpectancyInput: PropTypes.string.isRequired,
  setLifeExpectancyInput: PropTypes.func.isRequired,
  taxRateInput: PropTypes.string.isRequired,
  setTaxRateInput: PropTypes.func.isRequired,
};
