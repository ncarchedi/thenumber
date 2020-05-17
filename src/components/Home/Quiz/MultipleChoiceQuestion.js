import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  prompt: {
    margin: 0,
    padding: theme.spacing(4, 0),
  },
  answers: {
    width: "90%",
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  answer: {
    // backgroundColor: "#303030",
    padding: theme.spacing(2, 3),
    margin: theme.spacing(2, 0),
    borderRadius: "4px",
    borderWidth: "1px",
    // borderColor: "#f1ece2",
    borderStyle: "solid",
    fontSize: "1.5rem",
    "& :hover": {
      // backgroundColor: "#545454",
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
    <React.Fragment>
      <Typography variant="h5" className={classes.prompt}>
        {content.prompt}
      </Typography>
      <ul className={classes.answers}>{content.answers.map(renderAnswer)}</ul>
    </React.Fragment>
  );
}

MultipleChoiceQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
