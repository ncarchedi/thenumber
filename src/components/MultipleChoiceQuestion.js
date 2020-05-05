import React from "react";
import PropTypes from "prop-types";

const MultipleChoiceQuestion = (props) => {
  const renderAnswerOption = (ans) => {
    const variableName = props.variableName;
    const variableValue = ans.value;

    return (
      <div
        key={ans.value}
        className="answerOption"
        onClick={() => props.onAnswerSubmitted(variableName, variableValue)}
      >
        {ans.label}
      </div>
    );
  };

  return (
    <div>
      <h2 className="question">{props.content.question}</h2>
      <ul className="answerOptions">
        {props.content.answers.map(renderAnswerOption)}
      </ul>
    </div>
  );
};

MultipleChoiceQuestion.propTypes = {
  variableName: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  onAnswerSubmitted: PropTypes.func.isRequired,
};

export default MultipleChoiceQuestion;
