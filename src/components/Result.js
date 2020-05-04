import React from "react";
import PropTypes from "prop-types";

import { CSSTransitionGroup } from "react-transition-group";

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <h2>{props.result}</h2>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Result;
