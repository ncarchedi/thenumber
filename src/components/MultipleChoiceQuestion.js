import React from "react";
import PropTypes from "prop-types";

const MultipleChoiceQuestion = (props) => {
  const renderAnswerOptions = (ans) => {
    return (
      <div
        key={ans.value}
        className="answerOption"
        onClick={() => props.onAnswerSubmitted(ans.value)}
      >
        {ans.label}
      </div>
    );
  };

  return (
    <div>
      <h2 className="question">{props.content.question}</h2>
      <ul className="answerOptions">
        {props.content.answers.map(renderAnswerOptions)}
      </ul>
    </div>
  );
};

MultipleChoiceQuestion.propTypes = {
  content: PropTypes.object.isRequired,
  onAnswerSubmitted: PropTypes.func.isRequired,
};

export default MultipleChoiceQuestion;
