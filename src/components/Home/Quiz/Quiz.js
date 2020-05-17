import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import QuestionEmptyScreen from "./QuestionEmptyScreen";

const useStyles = makeStyles((theme) => ({
  quiz: {
    marginTop: 0,
    [theme.breakpoints.up("sm")]: {
      marginTop: "10%",
    },
  },
}));

// TODO: use existing templating library?
const replaceBlanks = (text, value) => {
  return text.replace("___", value);
};

export default function Quiz(props) {
  const classes = useStyles();
  const [questionNumber, setQuestionNumber] = useState(1);
  const { questions, userName, setUserValue, setShowCheckpoint } = props;

  const goToNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const handleSubmitAnswer = (variableName, variableValue) => {
    setUserValue(variableName, variableValue);

    // TODO: un-hardcode when to show results?
    if (questionNumber >= 5) {
      setShowCheckpoint(true);
    }

    goToNextQuestion();
  };

  const currentQuestion = questions[questionNumber - 1];

  // if question doesn't exist, show empty screen
  if (!currentQuestion) {
    return <QuestionEmptyScreen />;
  }

  // replace blank in age question with user's name
  let updatedQuestion = currentQuestion.content.prompt;
  if (questionNumber === 2) {
    updatedQuestion = replaceBlanks(currentQuestion.content.prompt, userName);
  }
  currentQuestion.content.prompt = updatedQuestion;

  return (
    <Container maxWidth="md" disableGutters={true} className={classes.quiz}>
      <div key={questionNumber}>
        <QuestionCount current={questionNumber} total={questions.length} />
        <Question
          question={currentQuestion}
          onSubmitAnswer={handleSubmitAnswer}
        />
      </div>
    </Container>
  );
}

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  setUserValue: PropTypes.func.isRequired,
  setShowCheckpoint: PropTypes.func.isRequired,
};
