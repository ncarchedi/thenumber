import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";
import ResultsChart from "./ResultsChart";
import BigButton from "../../General/BigButton";
import toDollars from "../../../utils/toDollars";
import calculateRequiredAndExpectedSavings from "../../../utils/calculateRequiredAndExpectedSavings";

const useStyles = makeStyles((theme) => ({
  headerText: {
    display: "inline-block",
    padding: theme.spacing(0, 5, 3, 5),
    color: theme.palette.primary.main,
    fontFamily: ["Bai Jamjuree", "sans-serif"],
    fontWeight: theme.typography.fontWeightLight,
    borderBottom: "solid",
    borderBottomWidth: "3px",
  },
  supportingText: {
    maxWidth: theme.breakpoints.values.md * 0.8,
    margin: theme.spacing(4, "auto"),
    fontWeight: theme.typography.fontWeightRegular,
  },
  highlight: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main,
    fontFamily: ["Bai Jamjuree", "sans-serif"],
  },
  chartContainer: {
    maxWidth: theme.breakpoints.values.md,
    height: "350px",
    margin: theme.spacing(0, "auto"),
  },
}));

export default function Results(props) {
  const classes = useStyles();
  const {
    userData,
    showAssumptions,
    setShowAssumptions,
    goToNextStage,
  } = props;
  const {
    currentAge,
    monthlyExpenses,
    percentExpenses,
    monthlySavings,
    totalSavings,
    inflationRate,
    stocksReturn,
    percentStocks,
    lifeExpectancy,
    taxRate,
  } = userData;

  const {
    age,
    requiredSavings,
    expectedSavings,
    canRetire,
  } = calculateRequiredAndExpectedSavings(
    currentAge,
    monthlyExpenses,
    percentExpenses,
    monthlySavings,
    totalSavings,
    inflationRate,
    stocksReturn,
    percentStocks,
    lifeExpectancy,
    taxRate
  );

  const breakeven = canRetire.findIndex((e) => e);
  const retirementAge = age[breakeven];
  const retirementAmount = expectedSavings[breakeven];
  const yearsToRetirement = retirementAge - currentAge;

  return (
    <React.Fragment>
      <Typography variant="h2" component="h1" className={classes.headerText}>
        <CountUp
          end={retirementAmount}
          prefix="$"
          separator=","
          duration={1.5}
        />
      </Typography>
      <Typography variant="h6" component="p" className={classes.supportingText}>
        If you continue saving{" "}
        <span className={classes.highlight}>
          {toDollars(monthlySavings)} a month
        </span>{" "}
        for the next{" "}
        <span className={classes.highlight}>{yearsToRetirement} years</span>,
        you'll be on track to achieve financial independence at{" "}
        <span className={classes.highlight}>age {retirementAge}</span> with a
        total of{" "}
        <span className={classes.highlight}>{toDollars(retirementAmount)}</span>{" "}
        in savings.
      </Typography>
      <div className={classes.chartContainer}>
        <ResultsChart
          age={age}
          requiredSavings={requiredSavings}
          expectedSavings={expectedSavings}
          retirementAge={retirementAge}
        />
      </div>
      {showAssumptions ? (
        <BigButton variant="contained" color="primary" onClick={goToNextStage}>
          So let's take action
        </BigButton>
      ) : (
        <BigButton
          variant="contained"
          color="primary"
          onClick={() => setShowAssumptions(true)}
        >
          How did I get here?
        </BigButton>
      )}
    </React.Fragment>
  );
}

Results.propTypes = {
  userData: PropTypes.exact({
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
  }),
  showAssumptions: PropTypes.bool.isRequired,
  setShowAssumptions: PropTypes.func.isRequired,
  goToNextStage: PropTypes.func.isRequired,
};
