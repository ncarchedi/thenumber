import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  prompt: {
    margin: 0,
    padding: ["0.5rem", "2.5rem", "1.5rem", 0],
    color: "#f1ece2",
  },
  answers: {
    width: "90%",
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  answer: {
    backgroundColor: "#303030",
    padding: ["15px", "25px"],
    margin: ["15px", 0],
    borderRadius: "4px",
    borderWidth: "1px",
    borderColor: "#f1ece2",
    borderStyle: "solid",
    fontSize: "1.5rem",
    ":hover": {
      backgroundColor: "#545454",
      cursor: "pointer",
    },
  },
}));

export default function MultipleChoiceQuestion(props) {
  const classes = useStyles();

  const { question, onSubmitAnswer } = props;
  const { variableName, content } = question;

  const renderAnswer = (answer) => {
    return (
      <div
        key={answer.value}
        className={classes.answer}
        onClick={() => onSubmitAnswer(variableName, answer.value)}
      >
        {answer.label}
      </div>
    );
  };

  return (
    <div>
      <h2 className={classes.prompt}>{content.prompt}</h2>
      <ul className={classes.answers}>{content.answers.map(renderAnswer)}</ul>
    </div>
  );
}

MultipleChoiceQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
