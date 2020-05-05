import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

import Question from "./Question";
import QuestionCount from "./QuestionCount";

const Quiz = (props) => {
  return (
    <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionNumber}>
        <QuestionCount
          current={props.questionNumber}
          total={props.questionTotal}
        />
        <Question
          type={props.questionType}
          variableName={props.variableName}
          content={props.questionContent}
          onSubmitAnswer={props.onSubmitAnswer}
        />
      </div>
      <button className="skipQuizButton" onClick={props.onSkipQuiz}>
        Skip Quiz (Admin Only)
      </button>
    </CSSTransitionGroup>
  );
};

Quiz.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  questionType: PropTypes.string.isRequired,
  variableName: PropTypes.string.isRequired,
  questionContent: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
  onSkipQuiz: PropTypes.func.isRequired,
};

export default Quiz;
