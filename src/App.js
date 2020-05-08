import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";

class App extends React.Component {
  state = {
    name: "",
  };

  handleSetName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home onSetName={this.handleSetName} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/feedback">
              <Feedback name={this.state.name} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
