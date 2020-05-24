import React, { useState } from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz/Quiz";
import Checkpoint from "./Checkpoint/Checkpoint";
import BetaSignUp from "./Beta/BetaSignUp";
import quizContent from "../../api/quizContent";
import surveyContent from "../../api/surveyContent";

export default function Home(props) {
  const [activeStage, setActiveStage] = useState(0);
  const { user, setUser } = props;

  const goToNextStage = () => {
    setActiveStage(activeStage + 1);
  };

  const goToResults = () => {
    setActiveStage(1);
  };

  const renderHome = () => {
    let stage;

    switch (activeStage) {
      case 0:
        stage = (
          <Quiz
            questions={quizContent}
            user={user}
            setUser={setUser}
            goToNextStage={goToNextStage}
          />
        );
        break;
      case 1:
        stage = (
          <Checkpoint
            user={user}
            setUser={setUser}
            goToNextStage={goToNextStage}
          />
        );
        break;
      case 2:
        stage = (
          <Quiz
            questions={surveyContent}
            user={user}
            setUser={setUser}
            goToNextStage={goToNextStage}
          />
        );
        break;
      case 3:
        stage = <BetaSignUp name={user.name} goToResults={goToResults} />;
        break;
      default:
        stage = null;
    }

    return stage;
  };

  return renderHome();
}

Home.propTypes = {
  user: PropTypes.exact({
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
    nextAction: PropTypes.string.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};
