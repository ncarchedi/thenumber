import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

import Question from "./Question";
import QuestionCount from "./QuestionCount";

// import AnswerOption from "./AnswerOption";

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
          content={props.questionContent}
          onAnswerSelected={props.onAnswerSelected}
        />
      </div>
    </CSSTransitionGroup>
  );
};

Quiz.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  questionType: PropTypes.string.isRequired,
  questionContent: PropTypes.object.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;
