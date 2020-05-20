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
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function MultipleChoiceQuestion(props) {
  const classes = useStyles();
  const { question, onSubmitAnswer } = props;
  const { variableName, content } = question;
  const { prompt, answers } = content;

  const renderAnswer = (answer) => {
    return (
      <Button
        key={answer.value}
        className={classes.answer}
        onClick={() => onSubmitAnswer(variableName, answer.value)}
        variant="contained"
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
    </React.Fragment>
  );
}

MultipleChoiceQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
