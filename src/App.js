import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";

const App = () => {
  const [name, setName] = useState(0);

  const handleSetName = (name) => {
    setName(name);
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#59cd90",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home onSetName={handleSetName} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/feedback">
              <Feedback name={name} />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
