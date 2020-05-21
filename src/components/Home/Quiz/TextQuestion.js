import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import DollarInputFormat from "../../General/DollarInputFormat";
import ContinueButton from "./ContinueButton";

const useStyles = makeStyles((theme) => ({
  prompt: {
    marginBottom: theme.spacing(3),
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

export default function TextQuestion(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const { question, onSubmitAnswer } = props;
  const { inputType, variableName, content } = question;
  const { prompt, helperText } = content;

  const handleChange = (e) => {
    const text = e.target.value;
    // if getting a number, then strip non-numeric stuff
    const cleanText = inputType === "number" ? text.replace(/\D/g, "") : text;
    setValue(cleanText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitAnswer(variableName, value);
  };

  return (
    <React.Fragment>
      <Typography variant="h5" component="h1" className={classes.prompt}>
        <div dangerouslySetInnerHTML={{ __html: prompt }} />
      </Typography>
      <form onSubmit={handleSubmit}>
        {inputType === "dollar" ? (
          <TextField
            className={classes.textField}
            value={value}
            onChange={handleChange}
            placeholder="Type your answer here..."
            autoFocus
            fullWidth
            InputProps={{ inputComponent: DollarInputFormat }}
          ></TextField>
        ) : (
          <TextField
            className={classes.textField}
            value={value}
            onChange={handleChange}
            placeholder="Type your answer here..."
            autoFocus
            fullWidth
          ></TextField>
        )}
        {helperText && (
          <Typography variant="body2" className={classes.helperText}>
            {"ℹ️ " + helperText}
          </Typography>
        )}
        {value && <ContinueButton text="OK" />}
      </form>
    </React.Fragment>
  );
}

TextQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
