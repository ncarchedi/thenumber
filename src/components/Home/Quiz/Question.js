import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TextQuestion from "./TextQuestion";

export default function Question(props) {
  const { question, onSubmitAnswer } = props;
  const { type } = question;

  if (type === "MultipleChoice") {
    return (
      <MultipleChoiceQuestion
        question={question}
        onSubmitAnswer={onSubmitAnswer}
      />
    );
  } else if (type === "TextQuestion") {
    return <TextQuestion question={question} onSubmitAnswer={onSubmitAnswer} />;
  } else {
    return (
      <Typography variant="h5">
        Not a text question or multiple choice question!
      </Typography>
    );
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
