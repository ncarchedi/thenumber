import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class FeedbackForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="feedbackForm">
        <h3 className="feedbackFormTitle">We Want Your Feedback 🤔</h3>
        <p>
          <em>The Number</em> is a work in progress—and you can help shape it!
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
            placeholder="Write your suggestions here..."
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    );
  }
}

export default FeedbackForm;
