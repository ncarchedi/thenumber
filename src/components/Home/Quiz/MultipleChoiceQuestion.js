import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  prompt: {
    marginBottom: theme.spacing(3),
  },
  answers: {
    margin: 0,
    padding: 0,
  },
  answer: {
    margin: theme.spacing(1, 0),
    fontSize: "1.5rem",
    justifyContent: "left",
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
  },
  helperText: {
    marginTop: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
}));

export default function MultipleChoiceQuestion(props) {
  const classes = useStyles();
  const { question, onSubmitAnswer } = props;
  const { variableName, content } = question;
  const { prompt, answers, helperText } = content;

  const renderAnswer = (answer) => {
    return (
      <Button
        key={answer.value}
        className={classes.answer}
        onClick={() => onSubmitAnswer(variableName, answer.value)}
        variant="outlined"
        fullWidth
      >
        {answer.label}
      </Button>
    );
  };

  return (
    <React.Fragment>
      <Typography variant="h5" className={classes.prompt}>
        <div dangerouslySetInnerHTML={{ __html: prompt }} />
      </Typography>
      <ul className={classes.answers}>{answers.map(renderAnswer)}</ul>
      {helperText && (
        <Typography variant="body2" className={classes.helperText}>
          {"ℹ️ " + helperText}
        </Typography>
      )}
    </React.Fragment>
  );
}

MultipleChoiceQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
