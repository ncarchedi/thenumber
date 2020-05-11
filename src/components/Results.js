import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import ResultsChart from "./ResultsChart";
import toDollars from "../utils/toDollars";
// import toPercent from "../utils/toPercent";
import getTotalSavingsChartData from "../utils/getTotalSavingsChartData";
// import getAnnualWithdrawalChartData from "../utils/getAnnualWithdrawalChartData";
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

    // const annualWithdrawalChartData = getAnnualWithdrawalChartData(
    //   currentAge,
    //   targetAge,
    //   100, // TODO: un-hardcode death age?
    //   monthlyExpenses,
    //   annualInflation
    // );

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
            onClick={() => alert("Coming soon!")}
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
        {/* <div className="resultsSectionHeaderText">
          {toDollars(monthlyExpenses * 12 * 1.03 ** yearsToRetirement)}
        </div>
        <p className="resultsSupportingText">
          {`This is how much you'll be able to spend in your first year of retirement, based on a ${toPercent(
            annualInflation
          )} annual inflation rate and a ${toPercent(
            withdrawalRate
          )} annual withdrawal rate.`}
        </p>
        <ResultsChart
          xArray={annualWithdrawalChartData.ageArray}
          yArray={annualWithdrawalChartData.withdrawalArray}
          chartType="bar"
        />
        <div className="resultsSectionHeaderText">
          {toDollars(annualContribution / 12) + " / month"}
        </div>
        <p className="resultsSupportingText">
          {`This is how much you need to save to reach your number by age ${targetAge}, assuming an
          average annual return of ${toPercent(
            annualReturn
          )} across your entire savings
          portfolio.`}
        </p> */}
      </div>
    );
  };

  render() {
    return (
      <CSSTransitionGroup
        className="container results"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div className="resultsContainer">{this.renderResults()}</div>
      </CSSTransitionGroup>
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
    percentStocks: PropTypes.string.isRequired,
  }),
  assumptions: PropTypes.exact({
    annualReturn: PropTypes.number.isRequired,
    withdrawalRate: PropTypes.number.isRequired,
    annualInflation: PropTypes.number.isRequired,
  }),
};

export default Results;
