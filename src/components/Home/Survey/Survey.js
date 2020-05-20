import React from "react";
import PropTypes from "prop-types";
import Quiz from "../Quiz/Quiz";

export default function Survey(props) {
  const { questions, userName, setUserValue } = props;

  return (
    <Quiz
      questions={questions}
      userName={userName}
      setUserValue={setUserValue}
    />
  );
}

Survey.propTypes = {
  questions: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  setUserValue: PropTypes.func.isRequired,
};
