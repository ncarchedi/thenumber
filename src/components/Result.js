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
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        You need to save $10,000,000 by next weekend. Good luck!
      </h1>
      <hr></hr>
      <h2 style={{ marginTop: "50px" }}>Quiz Results</h2>
      <pre>{JSON.stringify(props.userData, null, 2)}</pre>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Result;
