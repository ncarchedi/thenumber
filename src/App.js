import React from "react";

import "./App.css";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import quizQuestions from "./api/quizQuestions";

class App extends React.Component {
  state = {
    questionNumber: 1,
    result: "",
  };

  setNextQuestion = () => {
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  };

  setResult = () => {
    this.setState({
      result: "You need to save $10,000,000 by next weekend. Good luck!",
    });
  };

  handleAnswerSelected = (event) => {
    // this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionNumber < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResult(), 300);
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
        questionContent={quizQuestion.content}
        onAnswerSelected={this.handleAnswerSelected}
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
