import React from "react";

import Quiz from "./components/Quiz";
import Result from "./components/Result";
import quizQuestions from "./api/quizQuestions";

class App extends React.Component {
  state = {
    questionNumber: 1,
    result: "",
    user: {
      name: "",
      age: "",
      monthlyExpenses: "",
      savings: "",
      strategy: "",
    },
  };

  goToNextQuestion = () => {
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  };

  // TODO: set result(s) based on quiz
  setResult = () => {
    this.setState({
      result: "You need to save $10,000,000 by next weekend. Good luck!",
    });
  };

  saveUserValue = (key, value) => {
    const user = {
      ...this.state.user,
      [key]: value,
    };

    this.setState({ user });
  };

  handleAnswerSubmitted = (variableName, variableValue) => {
    this.saveUserValue(variableName, variableValue);

    if (this.state.questionNumber < quizQuestions.length) {
      setTimeout(() => this.goToNextQuestion(), 100);
    } else {
      setTimeout(() => this.setResult(), 100);
    }
  };

  renderQuiz = () => {
    const questionNumber = this.state.questionNumber;
    const quizQuestion = quizQuestions[questionNumber - 1];

    return (
      <Quiz
        questionNumber={questionNumber}
        questionTotal={quizQuestions.length}
        questionType={quizQuestion.type}
        variableName={quizQuestion.variableName}
        questionContent={quizQuestion.content}
        onAnswerSubmitted={this.handleAnswerSubmitted}
      />
    );
  };

  renderResult = () => {
    return <Result result={this.state.result} />;
  };

  render() {
    return (
      <div className="App">
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
