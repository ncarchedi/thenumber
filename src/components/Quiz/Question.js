import React from "react";
import PropTypes from "prop-types";
import Slide from "@material-ui/core/Slide";
import Statement from "./Statement";
import TextQuestion from "./TextQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

export default function Question(props) {
  const { question, onSubmitAnswer } = props;
  const { type } = question;

  let currentQuestion;
  if (type === "Statement")
    currentQuestion = (
      <Statement question={question} onSubmitAnswer={onSubmitAnswer} />
    );
  else if (type === "TextQuestion")
    currentQuestion = (
      <TextQuestion question={question} onSubmitAnswer={onSubmitAnswer} />
    );
  else if (type === "MultipleChoiceQuestion")
    currentQuestion = (
      <MultipleChoiceQuestion
        question={question}
        onSubmitAnswer={onSubmitAnswer}
      />
    );

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>{currentQuestion}</div>
    </Slide>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
