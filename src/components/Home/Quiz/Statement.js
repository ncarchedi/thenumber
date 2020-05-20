import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ContinueButton from "./ContinueButton";

const useStyles = makeStyles((theme) => ({
  prompt: {
    margin: theme.spacing(4, 0, 3, 0),
  },
  textField: {
    "& input": {
      fontSize: "2rem",
    },
  },
  helperText: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Statement(props) {
  const classes = useStyles();
  const { question, onSubmitAnswer } = props;
  const { prompt, helperText } = question.content;

  return (
    <React.Fragment>
      <Typography variant="h5" className={classes.prompt}>
        <div dangerouslySetInnerHTML={{ __html: prompt }} />
      </Typography>
      {helperText && (
        <Typography variant="body2" className={classes.helperText}>
          {"ℹ️ " + helperText}
        </Typography>
      )}
      <ContinueButton text="OK" onClick={onSubmitAnswer} />
    </React.Fragment>
  );
}

Statement.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
