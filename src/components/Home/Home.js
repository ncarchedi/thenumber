import React, { useState } from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz/Quiz";
import Checkpoint from "./Checkpoint/Checkpoint";
import Thanks from "./Thanks/Thanks";
import quizContent from "../../api/quizContent";
import surveyContent from "../../api/surveyContent";

export default function Home(props) {
  const [activeStage, setActiveStage] = useState(0);
  const [user, setUser] = useState({
    name: "",
    currentAge: "",
    monthlyExpenses: "",
    percentExpenses: "",
    monthlySavings: "",
    totalSavings: "",
    inflationRate: "3",
    percentStocks: "",
    stocksReturn: "7",
    lifeExpectancy: "",
  });
  const [survey, setSurvey] = useState({
    nextAction: "",
    productFeedback: "",
    anythingElse: "",
    provideEmail: "",
    email: "",
  });

  // // For testing purposes only ----------------------------
  // const [activeStage, setActiveStage] = useState(1);
  // const [user, setUser] = useState({
  //   name: "Marley",
  //   currentAge: "35",
  //   monthlyExpenses: "4000",
  //   percentExpenses: "80",
  //   monthlySavings: "2000",
  //   totalSavings: "250000",
  //   inflationRate: "3",
  //   percentStocks: "80",
  //   stocksReturn: "7",
  //   lifeExpectancy: "95",
  // });
  // const [survey, setSurvey] = useState({
  //   nextAction: "",
  //   productFeedback: "",
  //   anythingElse: "",
  //   provideEmail: "",
  //   email: "",
  // });
  // // ------------------------------------------------------

  const setUserValue = (key, value) => {
    const updatedUser = {
      ...user,
      [key]: value,
    };

    if (key === "name") props.onSetName(value);

    setUser(updatedUser);
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

  const startOver = () => {
    setActiveStage(0);
  };

  const renderHome = () => {
    let stage;

    switch (activeStage) {
      case 0:
        stage = (
          <Quiz
            questions={quizContent}
            userName={user.name}
            setValue={setUserValue}
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
            userName={user.name}
            setValue={setSurveyValue}
            goToNextStage={goToNextStage}
          />
        );
        break;
      case 3:
        stage = <Thanks startOver={startOver} />;
        break;
      default:
        stage = null;
    }

    return stage;
  };

  return renderHome();
}

Home.propTypes = {
  onSetName: PropTypes.func.isRequired,
};
