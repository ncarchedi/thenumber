import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

import ResultsChart from "./ResultsChart";
import AssumptionsForm from "./AssumptionsForm";
import toDollars from "../utils/toDollars";
import getResultsChartData from "../utils/getResultsChartData";
import calculateAnnualContribution from "../utils/calculateAnnualContribution";
import calculateTargetSavings from "../utils/calculateTargetSavings";

class Results extends React.Component {
  state = {
    showCreatePlan: true,
  };

  handleCreatePlanClick = () => {
    this.setState({ showCreatePlan: !this.state.showCreatePlan });
  };

  renderCreatePlan = () => {
    return this.state.showCreatePlan ? (
      <AssumptionsForm assumptions={this.props.assumptions} />
    ) : (
      <div style={{ textAlign: "center" }}>
        <button className="actionButton" onClick={this.handleCreatePlanClick}>
          📝 Create a Plan
        </button>
      </div>
    );
  };

  renderTargetAgeResults = () => {
    const {
      targetAge,
      currentAge,
      monthlyExpenses,
      currentSavings,
    } = this.props.userData;

    const targetSavings = calculateTargetSavings(
      currentAge,
      targetAge,
      monthlyExpenses
    );

    const additionalSavings = targetSavings - currentSavings;
    const yearsToRetirement = targetAge - currentAge;

    // TODO: un-hardcode this
    const annualReturn = 0.07;
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
          {`This is the amount you need by age ${targetAge}. You have ${toDollars(
            currentSavings
          )} today, so you need to accumulate an additional ${toDollars(
            additionalSavings
          )} over the next ${yearsToRetirement} years.`}
        </p>
        <ResultsChart
          ageArray={chartData.ageArray}
          savingsArray={chartData.savingsArray}
        />
      </div>
    );
  };

  renderNotSupportedResults = () => {
    return (
      <div>
        <h2>
          Sorry, we don't support that option yet! <a href=".">Try again?</a>
        </h2>
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
        <div className="resultsContainer">
          {this.props.userData.strategy === "targetAge"
            ? this.renderTargetAgeResults()
            : this.renderNotSupportedResults()}
        </div>
        <div>{this.renderCreatePlan()}</div>
      </CSSTransitionGroup>
    );
  }
}

Results.propTypes = {
  userData: PropTypes.exact({
    name: PropTypes.string.isRequired,
    strategy: PropTypes.string.isRequired,
    targetAge: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    currentSavings: PropTypes.string.isRequired,
  }),
  assumptions: PropTypes.exact({
    annualReturn: PropTypes.number.isRequired,
    annualInflation: PropTypes.number.isRequired,
    taxRate: PropTypes.number.isRequired,
  }),
};

export default Results;
