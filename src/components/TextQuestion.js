import React from "react";
import PropTypes from "prop-types";

class TextQuestion extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const variableName = this.props.variableName;
    const variableValue = this.state.value;

    this.props.onAnswerSubmitted(variableName, variableValue);
  };

  render() {
    return (
      <div>
        <h2 className="question">{this.props.content.question}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="textQuestionInput"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Type your answer here..."
            autoFocus
          ></input>
        </form>
      </div>
    );
  }
}

TextQuestion.propTypes = {
  variableName: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  onAnswerSubmitted: PropTypes.func.isRequired,
};

export default TextQuestion;
