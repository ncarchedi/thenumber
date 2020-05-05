import React from "react";
import PropTypes from "prop-types";

import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TextQuestion from "./TextQuestion";

const Question = (props) => {
  if (props.type === "MultipleChoice") {
    return (
      <MultipleChoiceQuestion
        variableName={props.variableName}
        content={props.content}
        onAnswerSubmitted={props.onAnswerSubmitted}
      />
    );
  } else if (props.type === "TextQuestion") {
    return (
      <TextQuestion
        variableName={props.variableName}
        content={props.content}
        onAnswerSubmitted={props.onAnswerSubmitted}
      />
    );
  } else {
    return (
      <h2 className="question">
        Not a text question or multiple choice question!
      </h2>
    );
  }
};

Question.propTypes = {
  type: PropTypes.string.isRequired,
  variableName: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  onAnswerSubmitted: PropTypes.func.isRequired,
};

export default Question;
