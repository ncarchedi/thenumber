import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Question from "./Question";
import QuestionCount from "./QuestionCount";

const useStyles = makeStyles((theme) => ({
  quiz: {
    marginTop: 0,
    [theme.breakpoints.up("sm")]: {
      marginTop: "10%",
    },
  },
  question: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8),
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
  const { questions, userName, setValue, goToNextStage } = props;

  const goToNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const handleSubmitAnswer = (variableName, variableValue) => {
    if (variableName && variableValue) setValue(variableName, variableValue);

    // if we've reached the end of the quiz
    if (questionNumber >= questions.length) goToNextStage();

    // if user opts out of providing their email
    if (variableName === "provideEmail" && variableValue === "no")
      goToNextStage();

    goToNextQuestion();
  };

  const currentQuestion = questions[questionNumber - 1];

  // TODO: make this less hacky
  // replace blank in second question with user's name
  let updatedQuestion = currentQuestion.content.prompt;
  if (questionNumber === 2) {
    updatedQuestion = replaceBlanks(currentQuestion.content.prompt, userName);
  }
  currentQuestion.content.prompt = updatedQuestion;

  return (
    <Container maxWidth="md" disableGutters={true} className={classes.quiz}>
      <QuestionCount current={questionNumber} total={questions.length} />
      <LinearProgress
        variant="determinate"
        value={100 * ((questionNumber - 1) / questions.length)}
      />
      <div key={questionNumber} className={classes.question}>
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
  setValue: PropTypes.func.isRequired,
  goToNextStage: PropTypes.func.isRequired,
};
