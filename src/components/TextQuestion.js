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
    const variableValue = this.state.value.replace(/\D/g, "");

    this.props.onSubmitAnswer(variableName, variableValue);
  };

  render() {
    const content = this.props.content;

    return (
      <div>
        <h2 className="question">{content.question}</h2>
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
        {content.helperText && (
          <p className="helperText">{"ℹ️ " + content.helperText}</p>
        )}
      </div>
    );
  }
}

TextQuestion.propTypes = {
  variableName: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};

export default TextQuestion;
