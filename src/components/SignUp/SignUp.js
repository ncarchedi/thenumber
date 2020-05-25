import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import BigButton from "../General/BigButton";
import Emoji from "../General/Emoji";
import encode from "../../utils/encode";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "2rem",
  },
  form: {
    marginTop: theme.spacing(3),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  thanksContainer: {
    textAlign: "center",
  },
  gif: {
    display: "block",
    margin: theme.spacing(4, "auto", 2, "auto"),
    maxWidth: theme.breakpoints.values.sm - 100,
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const { user, setUser } = props;
  const { name } = user;

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "betaSignUp", name, email, feedback }),
    })
      .then(() => console.log("Beta sign up form sent!"))
      .then(() => setShowThanks(true))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <React.Fragment>
      {showThanks ? (
        <Container maxWidth="md" className={classes.thanksContainer}>
          <Typography variant="h2" component="h1">
            Thanks, we'll be in touch!
          </Typography>
          <img
            src="https://media.giphy.com/media/WmkqburJqXziM/giphy.gif"
            alt="carlton dance"
            className={classes.gif}
            width="100%"
          />
          <BigButton
            onClick={() => history.push("/results")}
            variant="contained"
          >
            Back to results
          </BigButton>
        </Container>
      ) : (
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            component="h1"
            paragraph
            className={classes.header}
          >
            {name}, thanks for your feedback!{" "}
            <Emoji symbol="👏" label="hands clapping" />
          </Typography>
          <Typography variant="subtitle1" paragraph>
            We're actively working on new features to help you achieve financial
            independence. Sign up below for updates and early access!
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              name="feedback"
              label="Feedback (optional)"
              placeholder="I would love The Number even more if..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              variant="outlined"
              multiline
              rows={3}
              margin="normal"
              fullWidth
            />
            <div className={classes.buttonContainer}>
              <BigButton
                onClick={() => history.push("/results")}
                color="primary"
              >
                Back to results
              </BigButton>
              <BigButton type="submit" variant="contained" color="primary">
                Sign up now
              </BigButton>
            </div>
          </form>
        </Container>
      )}
    </React.Fragment>
  );
}

SignUp.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    currentAge: PropTypes.string.isRequired,
    monthlyExpenses: PropTypes.string.isRequired,
    percentExpenses: PropTypes.string.isRequired,
    monthlySavings: PropTypes.string.isRequired,
    totalSavings: PropTypes.string.isRequired,
    inflationRate: PropTypes.string.isRequired,
    stocksReturn: PropTypes.string.isRequired,
    percentStocks: PropTypes.string.isRequired,
    lifeExpectancy: PropTypes.string.isRequired,
    taxRate: PropTypes.string.isRequired,
    nextAction: PropTypes.string.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};
