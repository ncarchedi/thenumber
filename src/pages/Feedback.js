import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";

import FeedbackForm from "../components/FeedbackForm";

const Feedback = (props) => {
  return (
    <Container>
      <FeedbackForm name={props.name} />
    </Container>
  );
};

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Feedback;
