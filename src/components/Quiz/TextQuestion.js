import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import DollarInputFormat from "../General/DollarInputFormat";
import ContinueButton from "./ContinueButton";

const useStyles = makeStyles((theme) => ({
  prompt: {
    marginBottom: theme.spacing(3),
  },
  input: {
    fontSize: "2rem",
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
    // submit if answer isn't blank
    value && onSubmitAnswer(variableName, value);
  };

  return (
    <React.Fragment>
      <Typography variant="h5" component="h1" className={classes.prompt}>
        <div dangerouslySetInnerHTML={{ __html: prompt }} />
      </Typography>
      <form onSubmit={handleSubmit}>
        {inputType === "dollar" ? (
          <Input
            className={classes.textField}
            value={value}
            onChange={handleChange}
            classes={{ root: classes.input }}
            placeholder="Type your answer here..."
            autoFocus
            fullWidth
            inputComponent={DollarInputFormat}
          ></Input>
        ) : (
          <Input
            className={classes.textField}
            value={value}
            onChange={handleChange}
            classes={{ root: classes.input }}
            placeholder="Type your answer here..."
            autoFocus
            fullWidth
          ></Input>
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
