import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

import ResultsChart from "./ResultsChart";
import toDollars from "../utils/toDollars";
import getResultsChartData from "../utils/getResultsChartData";
import calculateTargetSavings from "../utils/calculateTargetSavings";

const Results = (props) => {
  const {
    currentAge,
    targetAge,
    monthlyExpenses,
    currentSavings,
    strategy,
  } = props.userData;

  const targetSavings = calculateTargetSavings(
    currentAge,
    targetAge,
    monthlyExpenses
  );

  const additionalSavings = targetSavings - currentSavings;
  const yearsToRetirement = targetAge - currentAge;

  const chartData = getResultsChartData(
    currentAge,
    targetAge,
    currentSavings,
    targetSavings
  );

  const renderTargetAgeResults = () => {
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
        <button className="actionButton">📝 Create a Plan </button>
      </div>
    );
  };

  const renderNotSupportedResults = () => {
    return (
      <div>
        <h2>
          Sorry, we don't support that option yet! <a href=".">Try again?</a>
        </h2>
      </div>
    );
  };

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
        {strategy === "targetAge"
          ? renderTargetAgeResults()
          : renderNotSupportedResults()}
      </div>
    </CSSTransitionGroup>
  );
};

Results.propTypes = {
  userData: PropTypes.exact({
    name: PropTypes.string.isRequired,
    strategy: PropTypes.string.isRequired,
    targetAge: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    currentSavings: PropTypes.string.isRequired,
  }),
};

export default Results;
