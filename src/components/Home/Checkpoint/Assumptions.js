import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";

export default function Assumptions(props) {
  const {
    updateInputs,
    retirementAgeInput,
    setRetirementAgeInput,
    currentAgeInput,
    setCurrentAgeInput,
    monthlyExpensesInput,
    setMonthlyExpensesInput,
    currentSavingsInput,
    setCurrentSavingsInput,
    inflationRateInput,
    setInflationRateInput,
  } = props;

  return (
    <form onSubmit={updateInputs}>
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
            id="totalSavings"
            name="totalSavings"
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
            value={inflationRateInput}
            onChange={(e) => setInflationRateInput(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
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
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
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
  );
}

Assumptions.propTypes = {
  updateInputs: PropTypes.func.isRequired,
  retirementAgeInput: PropTypes.string.isRequired,
  setRetirementAgeInput: PropTypes.func.isRequired,
  currentAgeInput: PropTypes.string.isRequired,
  setCurrentAgeInput: PropTypes.func.isRequired,
  monthlyExpensesInput: PropTypes.string.isRequired,
  setMonthlyExpensesInput: PropTypes.func.isRequired,
  currentSavingsInput: PropTypes.string.isRequired,
  setCurrentSavingsInput: PropTypes.func.isRequired,
  inflationRateInput: PropTypes.string.isRequired,
  setInflationRateInput: PropTypes.func.isRequired,
};
