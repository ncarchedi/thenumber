import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import Home from "./pages/Home";
// import About from "./pages/About";
import Feedback from "./pages/Feedback";

const App = () => {
  const [name, setName] = useState("");

  const handleSetName = (name) => {
    setName(name);
  };

  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#59cd90",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router>
        <Container maxWidth="xl" className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home onSetName={handleSetName} />
            </Route>
            <Route path="/feedback">
              <Feedback name={name} />
            </Route>
            {/* <Route path="/about">
              <About />
            </Route> */}
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
