import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import ResultsChart from "./ResultsChart";
import toDollars from "../utils/toDollars";
import getTotalSavingsChartData from "../utils/getTotalSavingsChartData";
import calculateAnnualContribution from "../utils/calculateAnnualContribution";
import calculateTargetSavings from "../utils/calculateTargetSavings";

class Results extends React.Component {
  state = {
    showCreatePlan: true,
  };

  renderResults = () => {
    const {
      targetAge,
      currentAge,
      monthlyExpenses,
      currentSavings,
    } = this.props.userData;

    const {
      annualReturn,
      withdrawalRate,
      // annualInflation,
    } = this.props.assumptions;

    const targetSavings = calculateTargetSavings(
      currentAge,
      targetAge,
      monthlyExpenses,
      withdrawalRate
    );

    const additionalSavings = targetSavings - currentSavings;
    const yearsToRetirement = targetAge - currentAge;

    const annualContribution = calculateAnnualContribution(
      currentSavings,
      targetSavings,
      annualReturn,
      yearsToRetirement
    );

    const totalSavingsChartData = getTotalSavingsChartData(
      currentAge,
      targetAge,
      currentSavings,
      annualContribution,
      annualReturn
    );

    return (
      <div>
        <div className="resultsSectionHeaderText">
          {toDollars(targetSavings)}
        </div>
        <p className="resultsSupportingText">
          {`This is your number—the amount you need to retire at age ${targetAge}. You have ${toDollars(
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
        <div className="resultsButtonGroup">
          <Button
            variant="contained"
            color="default"
            size="large"
            endIcon={<ReplayIcon />}
            onClick={this.props.onRestartQuiz}
          >
            Start Over
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => alert("Coming soon!")}
          >
            Create a Plan
          </Button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Container style={{ textAlign: "center" }}>
        {this.renderResults()}
      </Container>
    );
  }
}

Results.propTypes = {
  userData: PropTypes.exact({
    name: PropTypes.string.isRequired,
    targetAge: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    currentSavings: PropTypes.string.isRequired,
  }),
  assumptions: PropTypes.exact({
    annualReturn: PropTypes.number.isRequired,
    withdrawalRate: PropTypes.number.isRequired,
    annualInflation: PropTypes.number.isRequired,
  }),
  onRestartQuiz: PropTypes.func.isRequired,
};

export default Results;
