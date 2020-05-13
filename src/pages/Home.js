import React from "react";
import PropTypes from "prop-types";

import Quiz from "../components/Quiz";
import Results from "../components/Results";
import quizQuestions from "../api/quizQuestions";
import Grid from "@material-ui/core/Grid";

// import getWithdrawalRate from "../utils/getWithdrawalRate";
// import getAnnualReturn from "../utils/getAnnualReturn";

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
      percentStocks: "",
    },
    assumptions: {
      annualReturn: 0.07,
      withdrawalRate: 0.04,
      annualInflation: 0.03,
      // taxRate: 0.1, // https://www.bankrate.com/investing/long-term-capital-gains-tax/
    },
  };

  // For testing purposes only!
  // componentDidMount = () => {
  //   this.handleSkipQuiz();
  // };

  // TODO: should we also reset 'user' state?
  handleRestartQuiz = () => {
    this.setState({
      questionNumber: 1,
      showResults: false,
    });
  };

  goToNextQuestion = () => {
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  };

  // setAnnualReturn = (percentStocks) => {
  //   const annualReturn = getAnnualReturn(percentStocks);
  //   this.setState(
  //     {
  //       assumptions: { ...this.state.assumptions, annualReturn: annualReturn },
  //     },
  //     () => console.log(this.state)
  //   );
  // };

  // setWithdrawalRate = (percentStocks) => {
  //   const withdrawalRate = getWithdrawalRate(percentStocks);
  //   this.setState({
  //     assumptions: {
  //       ...this.state.assumptions,
  //       withdrawalRate: withdrawalRate,
  //     },
  //   });
  // };

  saveUserValue = (key, value) => {
    const user = {
      ...this.state.user,
      [key]: value,
    };

    if (key === "name") this.props.onSetName(value);
    // if (key === "percentStocks") {
    //   this.setAnnualReturn(value);
    //   this.setWithdrawalRate(value);
    // }

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

    const fakeAssumptions = {
      annualReturn: 0.07,
      withdrawalRate: 0.04,
      annualInflation: 0.03,
    };

    this.setState({
      showResults: true,
      user: fakeUser,
      assumptions: fakeAssumptions,
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
        onRestartQuiz={this.handleRestartQuiz}
      />
    );
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            {this.renderQuiz()}
          </Grid>
          <Grid item xs={6}>
            {this.state.showResults && this.renderResults()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  onSetName: PropTypes.func.isRequired,
};

export default Home;
