import React from "react";
import PropTypes from "prop-types";

import Quiz from "../components/Quiz";
import Results from "../components/Results";
import quizQuestions from "../api/quizQuestions";

// TODO: extract into file/folder of utility functions
// TODO: use existing templating library
const replaceBlanks = (text, value) => {
  return text.replace("___", value);
};

class Home extends React.Component {
  state = {
    questionNumber: 1,
    showResults: false,
    user: {
      name: "",
      targetAge: "",
      currentAge: "",
      monthlyExpenses: "",
      currentSavings: "",
    },
    assumptions: {
      annualReturn: 0.07,
      annualInflation: 0.03,
      withdrawalRate: 0.04,
      // taxRate: 0.1, // https://www.bankrate.com/investing/long-term-capital-gains-tax/
    },
  };

  // For testing purposes only!
  componentDidMount = () => {
    this.handleSkipQuiz();
  };

  goToNextQuestion = () => {
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  };

  saveUserValue = (key, value) => {
    const user = {
      ...this.state.user,
      [key]: value,
    };

    if (key === "name") this.props.onSetName(value);

    this.setState({ user });
  };

  showResults = () => {
    this.setState({ showResults: true });
  };

  handleSubmitAnswer = (variableName, variableValue) => {
    this.saveUserValue(variableName, variableValue);

    if (this.state.questionNumber < quizQuestions.length) {
      setTimeout(() => this.goToNextQuestion(), 100);
    } else {
      setTimeout(() => this.showResults(), 100);
    }
  };

  handleSkipQuiz = () => {
    const fakeUser = {
      name: "Marley",
      targetAge: "60",
      currentAge: "30",
      monthlyExpenses: "5000",
      currentSavings: "100000",
    };

    this.setState({
      showResults: true,
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

  renderResults = () => {
    return (
      <Results
        userData={this.state.user}
        assumptions={this.state.assumptions}
      />
    );
  };

  render() {
    return (
      <div>
        {this.state.showResults ? this.renderResults() : this.renderQuiz()}
      </div>
    );
  }
}

Home.propTypes = {
  onSetName: PropTypes.func.isRequired,
};

export default Home;
