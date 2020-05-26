import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
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
  const { questions, user, setUser } = props;

  const goToNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const handleSubmitAnswer = (varName, varValue) => {
    if (varName && varValue) setUser({ ...user, [varName]: varValue });
    goToNextQuestion();
  };

  const currentQuestion = questions[questionNumber - 1];

  // if quiz is over, go to results
  if (!currentQuestion) {
    setUser({ ...user, hasResults: true });
    return <Redirect to="/mynumber" />;
  }

  // TODO: make this less hacky
  // replace blank in second question with user's name
  let updatedQuestion = currentQuestion.content.prompt;
  if (questionNumber === 2) {
    updatedQuestion = replaceBlanks(currentQuestion.content.prompt, user.name);
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
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    percentExpenses: PropTypes.string.isRequired,
    monthlySavings: PropTypes.string.isRequired,
    totalSavings: PropTypes.string.isRequired,
    inflationRate: PropTypes.string.isRequired,
    stocksReturn: PropTypes.string.isRequired,
    percentStocks: PropTypes.string.isRequired,
    lifeExpectancy: PropTypes.string.isRequired,
    taxRate: PropTypes.string.isRequired,
    nextAction: PropTypes.string.isRequired,
    hasResults: PropTypes.bool.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};
