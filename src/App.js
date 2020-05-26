import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import Checkpoint from "./components/Checkpoint/Checkpoint";
import SignUp from "./components/SignUp/SignUp";
import Manifesto from "./components/Manifesto/Manifesto";
import FeedbackModal from "./components/Feedback/FeedbackModal";
import quizContent from "./api/quizContent";

const useStyles = makeStyles((theme) => ({
  app: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(12),
    },
    marginBottom: theme.spacing(8),
  },
}));

export default function App() {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    currentAge: "",
    lifeExpectancy: "",
    monthlyExpenses: "",
    percentExpenses: "",
    monthlySavings: "",
    totalSavings: "",
    percentStocks: "",
    stocksReturn: "7",
    inflationRate: "3",
    taxRate: "20",
    hasResults: false,

    // name: "Marley",
    // currentAge: "35",
    // lifeExpectancy: "95",
    // monthlyExpenses: "4000",
    // percentExpenses: "80",
    // monthlySavings: "2000",
    // totalSavings: "250000",
    // percentStocks: "80",
    // stocksReturn: "7",
    // inflationRate: "3",
    // taxRate: "20",
    // hasResults: true
  });
  const [darkMode, setDarkMode] = useState(false);
  const [openFeedbackModal, setOpenFeedbackModal] = React.useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: teal[500],
      },
      secondary: {
        main: amber[700],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header
          showResults={user.hasResults}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setOpenFeedbackModal={setOpenFeedbackModal}
        />
        <Container maxWidth="lg" className={classes.app}>
          <Switch>
            <Route exact path="/">
              <Quiz questions={quizContent} user={user} setUser={setUser} />
            </Route>
            <Route path="/mynumber">
              <Checkpoint user={user} setUser={setUser} />
            </Route>
            <Route path="/signup">
              <SignUp user={user} setUser={setUser} />
            </Route>
            <Route path="/manifesto">
              <Manifesto />
            </Route>
            <Route render={() => <Redirect to="/" />} />
          </Switch>
          <FeedbackModal
            user={user}
            setUser={setUser}
            open={openFeedbackModal}
            setOpen={setOpenFeedbackModal}
          />
        </Container>
      </Router>
    </ThemeProvider>
  );
}
