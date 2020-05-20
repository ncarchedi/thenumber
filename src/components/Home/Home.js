import React, { useState } from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz/Quiz";
import Checkpoint from "./Checkpoint/Checkpoint";
import Survey from "./Survey/Survey";
import quizContent from "../../api/quizContent";
import surveyContent from "../../api/surveyContent";

export default function Home(props) {
  const [activeStage, setActiveStage] = useState("quiz");
  const [user, setUser] = useState({
    name: "",
    currentAge: "",
    monthlyExpenses: "",
    monthlySavings: "",
    totalSavings: "",
    inflationRate: "3",
    percentStocks: "",
    stocksReturn: "7",
  });

  // // For testing purposes only
  // const [activeStage, setActiveStage] = useState("quiz");
  // const [user, setUser] = useState({
  //   name: "Marley",
  //   currentAge: "35",
  //   monthlyExpenses: "4000",
  //   monthlySavings: "2000",
  //   totalSavings: "250000",
  //   inflationRate: "3",
  //   percentStocks: "80",
  //   stocksReturn: "7",
  // });

  const setUserValue = (key, value) => {
    const updatedUser = {
      ...user,
      [key]: value,
    };

    if (key === "name") props.onSetName(value);

    setUser(updatedUser);
  };

  const renderHome = () => {
    let stage;

    switch (activeStage) {
      case "quiz":
        stage = (
          <Quiz
            questions={quizContent}
            userName={user.name}
            setUserValue={setUserValue}
            setActiveStage={setActiveStage}
          />
        );
        break;
      case "checkpoint":
        stage = (
          <Checkpoint
            user={user}
            setUser={setUser}
            setActiveStage={setActiveStage}
          />
        );
        break;
      case "survey":
        stage = (
          <Survey
            questions={surveyContent}
            userName={user.name}
            setUserValue={setUserValue}
          />
        );
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
