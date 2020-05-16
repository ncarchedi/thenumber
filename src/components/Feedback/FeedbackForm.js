import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class FeedbackForm extends React.Component {
  state = {
    name: this.props.name,
    email: "",
    message: "",
  };

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback", ...this.state }),
    })
      .then(() => alert("Feedback sent!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <Container maxWidth="sm" className="feedbackForm">
        {name ? (
          <h3 className="feedbackFormTitle">
            {name}, where should we go from here? 🤔
          </h3>
        ) : (
          <h3 className="feedbackFormTitle">
            Where should we go from here? 🤔
          </h3>
        )}
        <p>
          <em>The Number</em> is a work in progress—and you can help shape it!
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Your email (in case we have questions)"
          />
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
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
}

FeedbackForm.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FeedbackForm;
