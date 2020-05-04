import React from "react";
import PropTypes from "prop-types";

const QuestionCount = (props) => {
  return (
    <div className="questionCount">
      Question <span>{props.current}</span> of <span>{props.total}</span>
    </div>
  );
};

QuestionCount.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
