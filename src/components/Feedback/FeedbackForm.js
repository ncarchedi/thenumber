import React, { useState } from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function FeedbackForm(props) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback", name, email, message }),
    })
      .then(() => alert("Feedback sent!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <Container maxWidth="sm" className="feedbackForm">
      {name ? (
        <h3 className="feedbackFormTitle">
          {name}, where should we go from here? 🤔
        </h3>
      ) : (
        <h3 className="feedbackFormTitle">Where should we go from here? 🤔</h3>
      )}
      <p>
        <em>The Number</em> is a work in progress—and you can help shape it!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email (in case we have questions)"
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your feedback and/or suggestions here..."
        />
        <Button
          type="submit"
          variant="contained"
          color="default"
          endIcon={<SendIcon />}
        >
          Submit Feedback
        </Button>
      </form>
    </Container>
  );
}

FeedbackForm.propTypes = {
  name: PropTypes.string.isRequired,
};
