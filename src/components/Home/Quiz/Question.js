import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TextQuestion from "./TextQuestion";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "inherit",
  },
}));

export default function Question(props) {
  const classes = useStyles();

  const { question, onSubmitAnswer } = props;
  const { type } = question;

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Paper elevation={0} className={classes.paper}>
        {type === "TextQuestion" ? (
          <TextQuestion question={question} onSubmitAnswer={onSubmitAnswer} />
        ) : (
          <MultipleChoiceQuestion
            question={question}
            onSubmitAnswer={onSubmitAnswer}
          />
        )}
      </Paper>
    </Slide>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
