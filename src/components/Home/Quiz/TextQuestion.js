import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  prompt: {
    margin: 0,
    padding: theme.spacing(4, 0, 3, 0),
  },
  textField: {
    padding: theme.spacing(1, 0),
    width: "100%",
    "& input": {
      fontSize: "2rem",
    },
  },
  helperText: {
    marginTop: theme.spacing(2),
    color: "darkgrey",
    fontSize: "0.9rem",
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
    <div>
      <h2 className={classes.prompt}>{prompt}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          value={value}
          onChange={handleChange}
          placeholder="Type your answer here..."
          autoFocus
        ></TextField>
      </form>
      {helperText && <p className={classes.helperText}>{"ℹ️ " + helperText}</p>}
    </div>
  );
}

TextQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
