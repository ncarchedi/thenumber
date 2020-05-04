import React from "react";
import PropTypes from "prop-types";

import MultipleChoice from "./MultipleChoiceQuestion";

const Question = (props) => {
  if (props.type === "MultipleChoice") {
    return (
      <MultipleChoice
        content={props.content}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  } else {
    return <h2 className="question">Not a multiple choice question!</h2>;
  }
};

Question.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Question;
