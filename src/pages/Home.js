import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Quiz from "../components/Quiz";
import Results from "../components/Results";
import QuestionEmptyScreen from "../components/QuestionEmptyScreen";
import quizQuestions from "../api/quizQuestions";

// TODO: extract into file/folder of utility functions
// TODO: use existing templating library
const replaceBlanks = (text, value) => {
  return text.replace("___", value);
};

export default function Home(props) {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [user, setUser] = useState({
    name: "",
    retirementAge: "",
    currentAge: "",
    monthlyExpenses: "",
    currentSavings: "",
  });
  const [assumptions, setAssumptions] = useState({
    annualReturn: 0.07,
    withdrawalRate: 0.04,
    annualInflation: 0.03,
    // taxRate: 0.1, // https://www.bankrate.com/investing/long-term-capital-gains-tax/
  });

  // For testing purposes only!
  useEffect(() => {
    handleSkipQuiz();
  }, []);

  const goToNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const saveUserValue = (key, value) => {
    const updatedUser = {
      ...user,
      [key]: value,
    };

    if (key === "name") props.onSetName(value);

    setUser(updatedUser);
  };

  const handleSubmitAnswer = (variableName, variableValue) => {
    saveUserValue(variableName, variableValue);

    // TODO: un-hardcode when to show results?
    if (questionNumber >= 5) {
      setShowResults(true);
    }

    goToNextQuestion();
  };

  const handleSkipQuiz = () => {
    const fakeUser = {
      name: "Marley",
      retirementAge: "60",
      currentAge: "30",
      monthlyExpenses: "5000",
      currentSavings: "100000",
    };

    const fakeAssumptions = {
      annualReturn: 0.07,
      withdrawalRate: 0.04,
      annualInflation: 0.03,
    };

    setQuestionNumber(999);
    setShowResults(true);
    setUser(fakeUser);
    setAssumptions(fakeAssumptions);
  };

  const renderQuiz = () => {
    const quizQuestion = quizQuestions[questionNumber - 1];

    // if question doesn't exist, show empty screen
    if (!quizQuestion) {
      return <QuestionEmptyScreen />;
    }

    // replace blank in age question with user's name
    let updatedQuestion = quizQuestion.content.question;
    if (questionNumber === 2) {
      updatedQuestion = replaceBlanks(quizQuestion.content.question, user.name);
    }
    quizQuestion.content.question = updatedQuestion;

    return (
      <Quiz
        questionNumber={questionNumber}
        questionTotal={quizQuestions.length}
        questionType={quizQuestion.type}
        questionInputType={quizQuestion.inputType}
        variableName={quizQuestion.variableName}
        questionContent={quizQuestion.content}
        onSubmitAnswer={handleSubmitAnswer}
        onSkipQuiz={handleSkipQuiz}
      />
    );
  };

  const renderResults = () => {
    return <Results user={user} assumptions={assumptions} setUser={setUser} />;
  };

  return showResults ? renderResults() : renderQuiz();
}

Home.propTypes = {
  onSetName: PropTypes.func.isRequired,
};
