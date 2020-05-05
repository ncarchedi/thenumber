import React from "react";
import PropTypes from "prop-types";

import { CSSTransitionGroup } from "react-transition-group";

const calculateTargetSavings = (currentAge, targetAge, monthlyExpenses) => {
  // TODO: validate things like currentAge <= targetAge
  const yearsToRetirement = targetAge - currentAge;
  // compute annual expenses
  const annualExpenses = monthlyExpenses * 12;
  // adjust annual expenses for inflation at 3% a year
  const futureAnnualExpenses = annualExpenses * 1.03 ** yearsToRetirement;
  // apply the rule of 25 to inflation-adjusted expenses
  return futureAnnualExpenses * 25;
};

const toDollars = (num) => {
  const wholeNumberText = num.toString().split(".")[0];
  const digits = wholeNumberText.length;

  // TODO: make this compatible with non-US currencies?
  // https://stackoverflow.com/a/16233919/2338922
  const dollarFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: digits,
  });

  return dollarFormatter.format(wholeNumberText);
};

const Result = (props) => {
  const userData = props.userData;

  const targetSavings = calculateTargetSavings(
    userData.currentAge,
    userData.targetAge,
    userData.monthlyExpenses
  );

  const additionalSavings = targetSavings - userData.savings;
  const yearsToRetirement = userData.targetAge - userData.currentAge;

  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="resultContainer">
        {userData.strategy === "targetAge" ? (
          <div>
            <h1 className="targetSavingsText">{`You need a total of ${toDollars(
              targetSavings
            )} by age ${userData.targetAge}`}</h1>
            <p className="additionalSavingsText">
              {`You have ${toDollars(
                userData.savings
              )} saved today, which means you
            need to accumulate an additional ${toDollars(
              additionalSavings
            )} over the
            next ${yearsToRetirement} years.`}
            </p>
            <hr />
            <p className="temporaryGoodLuckText">
              I'll be able to help you with that soon, but in the meantime...
            </p>
            <div className="temporaryGoodLuckGif">
              <img
                src="https://media.giphy.com/media/j1Xyt3DHfJcmk/giphy.gif"
                alt="good luck square pants"
              ></img>
            </div>
          </div>
        ) : (
          <div>
            <h2>
              Sorry, we don't support that option yet!{" "}
              <a href=".">Try again?</a>
            </h2>
          </div>
        )}
      </div>
    </CSSTransitionGroup>
  );
};

Result.propTypes = {
  userData: PropTypes.exact({
    name: PropTypes.string.isRequired,
    strategy: PropTypes.string.isRequired,
    targetAge: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    savings: PropTypes.string.isRequired,
  }),
};

export default Result;
