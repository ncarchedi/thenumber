import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import DollarInputFormat from "../../General/DollarInputFormat";
import PercentInputFormat from "../../General/PercentInputFormat";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AssumptionInput = (props) => {
  const { id, label, value, onChangeFunction, InputProps } = props;

  return (
    <TextField
      id={id}
      name={id}
      label={label}
      value={value}
      onChange={(e) => onChangeFunction(e.target.value)}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={InputProps}
      fullWidth
    />
  );
};

export default function Assumptions(props) {
  const classes = useStyles();
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
      <div>
        <ExpansionPanel expanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="your-assumptions"
            id="your-assumptions"
          >
            <Typography variant="h6" component="h2" className={classes.heading}>
              Your Inputs
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AssumptionInput
                  id="monthlyExpenses"
                  label="Current monthly expenses"
                  value={monthlyExpensesInput}
                  onChangeFunction={setMonthlyExpensesInput}
                  InputProps={{ inputComponent: DollarInputFormat }}
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="percentExpenses"
                  label="Future expenses (% of current)"
                  value={percentExpensesInput}
                  onChangeFunction={setPercentExpensesInput}
                  InputProps={{ inputComponent: PercentInputFormat }}
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="monthlySavings"
                  label="Current monthly savings"
                  value={monthlySavingsInput}
                  onChangeFunction={setMonthlySavingsInput}
                  InputProps={{ inputComponent: DollarInputFormat }}
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="totalSavings"
                  label="Total savings"
                  value={totalSavingsInput}
                  onChangeFunction={setTotalSavingsInput}
                  InputProps={{ inputComponent: DollarInputFormat }}
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="percentStocks"
                  label="Stocks (% of total savings)"
                  value={percentStocksInput}
                  onChangeFunction={setPercentStocksInput}
                  InputProps={{ inputComponent: PercentInputFormat }}
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="lifeExpectancy"
                  label="Life expectancy"
                  value={lifeExpectancyInput}
                  onChangeFunction={setLifeExpectancyInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  color="default"
                  endIcon={<ArrowForwardIcon />}
                  type="submit"
                  fullWidth
                >
                  Apply Changes
                </Button>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="other-assumptions"
            id="other-assumptions"
          >
            <Typography variant="h6" component="h2" className={classes.heading}>
              Other Assumptions
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AssumptionInput
                  id="stocksReturn"
                  label="Annual return on stocks"
                  value={stocksReturnInput}
                  onChangeFunction={setStocksReturnInput}
                  InputProps={{ inputComponent: PercentInputFormat }}
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="inflationRate"
                  label="Annual inflation rate"
                  value={inflationRateInput}
                  onChangeFunction={setInflationRateInput}
                  InputProps={{ inputComponent: PercentInputFormat }}
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="taxRate"
                  label="Tax rate on withdrawals"
                  value={taxRateInput}
                  onChangeFunction={setTaxRateInput}
                  InputProps={{ inputComponent: PercentInputFormat }}
                />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
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
