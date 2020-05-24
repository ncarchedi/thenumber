import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import Home from "./components/Home/Home";
import FeedbackModal from "./components/Feedback/FeedbackModal";

const useStyles = makeStyles((theme) => ({
  app: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(12),
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
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
    nextAction: "",
  });
  const [darkMode, setDarkMode] = useState(false);
  const [openFeedbackModal, setOpenFeedbackModal] = React.useState(false);

  // // For testing purposes only
  // useEffect(() => {
  //   setUser({
  //     name: "Marley",
  //     currentAge: "35",
  //     lifeExpectancy: "95",
  //     monthlyExpenses: "4000",
  //     percentExpenses: "80",
  //     monthlySavings: "2000",
  //     totalSavings: "250000",
  //     percentStocks: "80",
  //     stocksReturn: "7",
  //     inflationRate: "3",
  //     taxRate: "20",
  //     nextAction: "",
  //   });
  // });

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
      <Router forceRefresh>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setOpenFeedbackModal={setOpenFeedbackModal}
        />
        <Container maxWidth="lg" className={classes.app}>
          <Switch>
            <Route exact path="/">
              <Home user={user} setUser={setUser} />
            </Route>
            {/* <Route path="/about">
              <About />
            </Route> */}
          </Switch>
          <FeedbackModal
            name={user.name}
            open={openFeedbackModal}
            setOpen={setOpenFeedbackModal}
          />
        </Container>
      </Router>
    </ThemeProvider>
  );
}
