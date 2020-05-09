import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

import ResultsChart from "./ResultsChart";
import toDollars from "../utils/toDollars";
import toPercent from "../utils/toPercent";
import getResultsChartData from "../utils/getResultsChartData";
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

    const { annualReturn, withdrawalRate } = this.props.assumptions;

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

    const chartData = getResultsChartData(
      currentAge,
      targetAge,
      currentSavings,
      annualContribution,
      annualReturn
    );

    return (
      <div>
        <div className="targetSavingsText">{toDollars(targetSavings)}</div>
        <p className="additionalSavingsText">
          {`This is your number—the amount you need to retire at age ${targetAge}. You have ${toDollars(
            currentSavings
          )} today, so you need to accumulate an additional ${toDollars(
            additionalSavings
          )} over the next ${yearsToRetirement} years.`}
        </p>
        <ResultsChart
          ageArray={chartData.ageArray}
          savingsArray={chartData.savingsArray}
        />
        <div className="targetSavingsText">
          {toDollars(annualContribution / 12) + " / month"}
        </div>
        <p className="additionalSavingsText">
          {`This is how much you need to save to achieve your number on time, assuming an
          average annual return of ${toPercent(
            annualReturn
          )} across your entire savings
          portfolio.`}
        </p>
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
  }),
  assumptions: PropTypes.exact({
    annualReturn: PropTypes.number.isRequired,
    annualInflation: PropTypes.number.isRequired,
    withdrawalRate: PropTypes.number.isRequired,
  }),
};

export default Results;
