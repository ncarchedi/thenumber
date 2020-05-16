import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  prompt: {
    margin: 0,
    padding: ["0.5rem", "2.5rem", "1.5rem", 0],
    color: "#f1ece2",
    fontWeight: 400,
  },
  answerInput: {
    padding: ["10px", 0],
    width: "100%",
    backgroundColor: "#262626",
    fontSize: "2rem",
    caretColor: "#f1ece2",
    color: "#f1ece2",
    borderStyle: ["none", "none", "solid", "none"],
    borderColor: "#3f3f3f",
    borderWidth: "1px",
    // focus: {
    //   outline: "none",
    // },
  },
  helperText: {
    marginTop: "30px",
    color: "darkgrey",
    fontSize: "0.9rem",
  },
}));

export default function TextQuestion(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const { question, onSubmitAnswer } = props;
  const { inputType, variableName, content } = question;

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
      <h2 className={classes.prompt}>{content.prompt}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={classes.answerInput}
          value={value}
          onChange={handleChange}
          placeholder="Type your answer here..."
          autoFocus
        ></input>
      </form>
      {content.helperText && (
        <p className={classes.helperText}>{"ℹ️ " + content.helperText}</p>
      )}
    </div>
  );
}

TextQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};
