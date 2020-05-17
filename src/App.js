import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
import FeedbackModal from "./components/Feedback/FeedbackModal";

const useStyles = makeStyles((theme) => ({
  app: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4),
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [openFeedbackModal, setOpenFeedbackModal] = React.useState(false);

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
      <Router forceRefresh>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setOpenFeedbackModal={setOpenFeedbackModal}
        />
        <Container maxWidth="lg" className={classes.app}>
          <Switch>
            <Route exact path="/">
              <Home onSetName={(name) => setName(name)} />
            </Route>
            {/* <Route path="/about">
              <About />
            </Route> */}
          </Switch>
          {/* Feedback modal */}
          <FeedbackModal
            name={name}
            open={openFeedbackModal}
            setOpen={setOpenFeedbackModal}
          />
          {/* <Footer /> */}
        </Container>
      </Router>
    </ThemeProvider>
  );
}
