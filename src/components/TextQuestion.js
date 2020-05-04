import React from "react";
import PropTypes from "prop-types";

class TextQuestion extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="question">{this.props.content.question}</h2>
        <form onSubmit={this.onAnswerSubmitted}>
          <input
            type="text"
            className="textQuestionInput"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Type your answer here..."
          ></input>
        </form>
      </div>
    );
  }
}

TextQuestion.propTypes = {
  content: PropTypes.object.isRequired,
  onAnswerSubmitted: PropTypes.func.isRequired,
};

export default TextQuestion;
