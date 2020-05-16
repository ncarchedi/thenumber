import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
import Feedback from "./components/Feedback/Feedback";

export default function App() {
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#59cd90",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Container maxWidth="lg" className="App">
          <Switch>
            <Route exact path="/">
              <Home onSetName={(name) => setName(name)} />
            </Route>
            <Route path="/feedback">
              <Feedback name={name} />
            </Route>
            {/* <Route path="/about">
              <About />
            </Route> */}
          </Switch>
          {/* <Footer /> */}
        </Container>
      </Router>
    </ThemeProvider>
  );
}
