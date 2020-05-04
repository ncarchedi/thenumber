import React from "react";
import PropTypes from "prop-types";

import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

const Question = (props) => {
  if (props.type === "MultipleChoice") {
    return (
      <MultipleChoiceQuestion
        content={props.content}
        onAnswerSubmitted={props.onAnswerSubmitted}
      />
    );
  } else {
    return <h2 className="question">Not a multiple choice question!</h2>;
  }
};

Question.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  onAnswerSubmitted: PropTypes.func.isRequired,
};

export default Question;
