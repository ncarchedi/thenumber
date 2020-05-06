import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import quizQuestions from "./api/quizQuestions";

// TODO: extract into file/folder of utility functions
// TODO: use existing templating library
const replaceBlanks = (text, value) => {
  return text.replace("___", value);
};

class App extends React.Component {
  state = {
    questionNumber: 1,
    showResult: false,
    user: {
      name: "",
      strategy: "",
      targetAge: "",
      currentAge: "",
      monthlyExpenses: "",
      savings: "",
    },
  };

  goToNextQuestion = () => {
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  };

  saveUserValue = (key, value) => {
    const user = {
      ...this.state.user,
      [key]: value,
    };

    this.setState({ user });
  };

  showResult = () => {
    this.setState({ showResult: true });
  };

  handleSubmitAnswer = (variableName, variableValue) => {
    this.saveUserValue(variableName, variableValue);

    if (this.state.questionNumber < quizQuestions.length) {
      setTimeout(() => this.goToNextQuestion(), 100);
    } else {
      setTimeout(() => this.showResult(), 100);
    }
  };

  handleSkipQuiz = () => {
    const fakeUser = {
      name: "Marley",
      strategy: "targetAge",
      targetAge: "60",
      currentAge: "30",
      monthlyExpenses: "5000",
      savings: "100000",
    };

    this.setState({
      showResult: true,
      user: fakeUser,
    });
  };

  renderQuiz = () => {
    const questionNumber = this.state.questionNumber;
    const quizQuestion = quizQuestions[questionNumber - 1];
    const userName = this.state.user.name;

    // replace blank in age question with user's name
    var updatedQuestion = quizQuestion.content.question;
    if (questionNumber === 2) {
      updatedQuestion = replaceBlanks(quizQuestion.content.question, userName);
    }
    quizQuestion.content.question = updatedQuestion;

    // TODO: this feels hacky to me - better placement?
    // only allow quiz for targetAge strategy right now
    const strategy = this.state.user.strategy;
    if (strategy && strategy !== "targetAge") {
      this.showResult();
      return null;
    }

    return (
      <Quiz
        questionNumber={questionNumber}
        questionTotal={quizQuestions.length}
        questionType={quizQuestion.type}
        questionInputType={quizQuestion.inputType}
        variableName={quizQuestion.variableName}
        questionContent={quizQuestion.content}
        onSubmitAnswer={this.handleSubmitAnswer}
        onSkipQuiz={this.handleSkipQuiz}
      />
    );
  };

  renderResult = () => {
    return <Result userData={this.state.user} />;
  };

  render() {
    return (
      <div className="App">
        <div>
          <Header />
          {this.state.showResult ? this.renderResult() : this.renderQuiz()}
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
