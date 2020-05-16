import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import FeedbackForm from "./FeedbackForm";

export default function Feedback(props) {
  return (
    <Container>
      <FeedbackForm name={props.name} />
    </Container>
  );
}

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
};
