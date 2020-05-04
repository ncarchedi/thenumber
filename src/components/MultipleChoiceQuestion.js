import React from "react";
import PropTypes from "prop-types";

import AnswerOption from "./AnswerOption";

const MultipleChoiceQuestion = (props) => {
  const renderAnswerOptions = (key) => {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionNumber={props.questionNumber}
        onAnswerSelected={props.onAnswerSelected}
      />
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
};

export default MultipleChoiceQuestion;
