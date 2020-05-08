import React from "react";
import PropTypes from "prop-types";

import FeedbackForm from "../components/FeedbackForm";

const Feedback = (props) => {
  return (
    <div className="container">
      <FeedbackForm name={props.name} />
    </div>
  );
};

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Feedback;
