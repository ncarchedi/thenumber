import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RefreshIcon from "@material-ui/icons/Refresh";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import DollarInputFormat from "../General/DollarInputFormat";
import PercentInputFormat from "../General/PercentInputFormat";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  tooltip: {
    cursor: "default",
  },
}));

export default function Assumptions(props) {
  const classes = useStyles();
  const { user, setUser } = props;
  const [inputs, setInputs] = useState({
    monthlyExpenses: user.monthlyExpenses,
    percentExpenses: user.percentExpenses,
    monthlySavings: user.monthlySavings,
    totalSavings: user.totalSavings,
    inflationRate: user.inflationRate,
    stocksReturn: user.stocksReturn,
    percentStocks: user.percentStocks,
    lifeExpectancy: user.lifeExpectancy,
    taxRate: user.taxRate,
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      ...inputs,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <ExpansionPanel defaultExpanded>
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
                  value={inputs.monthlyExpenses}
                  onChange={handleChange}
                  InputProps={{ inputComponent: DollarInputFormat }}
                  helperText="Used as a baseline to determine what your after-tax expenses will be in the future."
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="percentExpenses"
                  label="Future expenses (% of current)"
                  value={inputs.percentExpenses}
                  onChange={handleChange}
                  InputProps={{ inputComponent: PercentInputFormat }}
                  helperText="Adjustment to current monthly expenses to determine what your after-tax expenses will be in the future."
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="monthlySavings"
                  label="Current monthly savings"
                  value={inputs.monthlySavings}
                  onChange={handleChange}
                  InputProps={{ inputComponent: DollarInputFormat }}
                  helperText="Assumed to remain constant every month until you achieve financial independence."
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="totalSavings"
                  label="Total savings"
                  value={inputs.totalSavings}
                  onChange={handleChange}
                  InputProps={{ inputComponent: DollarInputFormat }}
                  helperText="Includes anything that could be used to cover living expenses in the future."
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="percentStocks"
                  label="Stocks (% of total savings)"
                  value={inputs.percentStocks}
                  onChange={handleChange}
                  InputProps={{ inputComponent: PercentInputFormat }}
                  helperText="Proportion of your current and future savings that are assumed to be invested in stocks or stock equivalents."
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="lifeExpectancy"
                  label="Life expectancy"
                  value={inputs.lifeExpectancy}
                  onChange={handleChange}
                  helperText="Used to determine how many years of living expenses you need to cover after achieving financial independence."
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  endIcon={<RefreshIcon />}
                  type="submit"
                  fullWidth
                >
                  Update my number
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
                  value={inputs.stocksReturn}
                  onChange={handleChange}
                  InputProps={{ inputComponent: PercentInputFormat }}
                  helperText="Annual return applied to the portion of your savings assumed to be invested in stocks or stock equivalents."
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="inflationRate"
                  label="Annual inflation rate"
                  value={inputs.inflationRate}
                  onChange={handleChange}
                  InputProps={{ inputComponent: PercentInputFormat }}
                  helperText="Rate at which your living expenses are assumed to increase every year."
                />
              </Grid>
              <Grid item xs={12}>
                <AssumptionInput
                  id="taxRate"
                  label="Tax rate on withdrawals"
                  value={inputs.taxRate}
                  onChange={handleChange}
                  InputProps={{ inputComponent: PercentInputFormat }}
                  helperText="Tax rate applied to all withdrawals from savings to cover future living expenses."
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
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
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
    hasResults: PropTypes.bool.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};

const AssumptionInput = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { id, label, value, onChange, InputProps, helperText } = props;

  return (
    <TextField
      id={id}
      name={id}
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip className={classes.tooltip} title={helperText}>
              <HelpOutlineIcon
                fontSize="small"
                style={{ color: theme.palette.text.secondary }}
              />
            </Tooltip>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

AssumptionInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  InputProps: PropTypes.object, // optional
  helperText: PropTypes.string.isRequired,
};
