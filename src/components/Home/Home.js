import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz/Quiz";
import Checkpoint from "./Checkpoint/Checkpoint";
import SignIn from "./SignIn/SignIn";
import BetaSignUp from "./Beta/BetaSignUp";
import quizContent from "../../api/quizContent";
import surveyContent from "../../api/surveyContent";

export default function Home(props) {
  const { userAuth, onSetName } = props;

  const [activeStage, setActiveStage] = useState(0);
  const [hasResults, setHasResults] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    currentAge: "",
    lifeExpectancy: "",
    monthlyExpenses: "",
    percentExpenses: "",
    monthlySavings: "",
    totalSavings: "",
    percentStocks: "",
    stocksReturn: "7",
    inflationRate: "3",
    taxRate: "20",
  });
  const [survey, setSurvey] = useState({
    nextAction: "",
  });

  // // For testing purposes only ----------------------------
  // const [activeStage, setActiveStage] = useState(0);
  // const [hasResults, setHasResults] = useState(true);
  // const [userData, setUserData] = useState({
  //   name: "Marley",
  //   currentAge: "35",
  //   lifeExpectancy: "95",
  //   monthlyExpenses: "4000",
  //   percentExpenses: "80",
  //   monthlySavings: "2000",
  //   totalSavings: "250000",
  //   percentStocks: "80",
  //   stocksReturn: "7",
  //   inflationRate: "3",
  //   taxRate: "20",
  // });
  // const [survey, setSurvey] = useState({
  //   nextAction: "",
  // });
  // // ------------------------------------------------------

  // TODO: need to persist state to be useful?
  // Should only run on load for returning users
  useEffect(() => {
    hasResults && goToResults();
  });

  const setUserValue = (key, value) => {
    const updatedUser = {
      ...userData,
      [key]: value,
    };

    if (key === "name") onSetName(value);

    setUserData(updatedUser);
  };

  const setSurveyValue = (key, value) => {
    const updatedSurvey = {
      ...survey,
      [key]: value,
    };

    setSurvey(updatedSurvey);
  };

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
            userName={userData.name}
            setValue={setUserValue}
            goToNextStage={goToNextStage}
            setHasResults={setHasResults}
          />
        );
        break;
      case 1:
        stage = (
          <Checkpoint
            userData={userData}
            setUserData={setUserData}
            goToNextStage={goToNextStage}
          />
        );
        break;
      case 2:
        stage = !!userAuth ? (
          <Quiz
            questions={surveyContent}
            userName={userData.name}
            setValue={setSurveyValue}
            goToNextStage={goToNextStage}
          />
        ) : (
          <SignIn goToNextStage={goToNextStage} />
        );
        break;
      case 3:
        stage = <BetaSignUp name={userData.name} goToResults={goToResults} />;
        break;
      default:
        stage = null;
    }

    return stage;
  };

  return renderHome();
}

Home.propTypes = {
  userAuth: PropTypes.object, // optional
  onSetName: PropTypes.func.isRequired,
};
