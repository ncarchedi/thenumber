import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";

import Question from "./Question";
import QuestionCount from "./QuestionCount";

const Quiz = (props) => {
  return (
    <Container>
      <div key={props.questionNumber}>
        <QuestionCount
          current={props.questionNumber}
          total={props.questionTotal}
        />
        <Question
          type={props.questionType}
          inputType={props.questionInputType}
          variableName={props.variableName}
          content={props.questionContent}
          onSubmitAnswer={props.onSubmitAnswer}
        />
      </div>
      <button className="skipQuizButton" onClick={props.onSkipQuiz}>
        Skip Quiz (Admin Only)
      </button>
    </Container>
  );
};

Quiz.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  questionType: PropTypes.string.isRequired,
  questionInputType: PropTypes.string.isRequired,
  variableName: PropTypes.string.isRequired,
  questionContent: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
  onSkipQuiz: PropTypes.func.isRequired,
};

export default Quiz;
