import React from "react";
import PropTypes from "prop-types";
import Quiz from "../Quiz/Quiz";

export default function Survey(props) {
  const { questions, userName, setValue } = props;

  return <Quiz questions={questions} userName={userName} setValue={setValue} />;
}

Survey.propTypes = {
  questions: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
