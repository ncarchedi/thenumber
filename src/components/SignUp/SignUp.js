import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory, Redirect } from "react-router-dom";
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
}));

export default function SignUp(props) {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser } = props;
  const { name, email } = user;
  const [emailInput, setEmailInput] = useState();
  const [feedbackInput, setFeedbackInput] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    setEmailInput(email);
  }, [email]);

  // if we don't have a name, we should probably go to the quiz
  if (!name) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "betaSignUp",
        name: name,
        email: emailInput,
        feedback: feedbackInput,
      }),
    })
      .then(() => console.log("Beta sign up form sent!"))
      .then(() => setShowThanks(true))
      .catch((error) => alert(error));

    setUser({ ...user, email: emailInput });
    e.preventDefault();
  };

  return (
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
        {showThanks ? (
          <Typography variant="body1">
            <b>Thanks! We'll be in touch with updates.</b>
          </Typography>
        ) : (
          <React.Fragment>
            <TextField
              type="email"
              name="email"
              label="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              name="feedback"
              label="Feedback (optional)"
              placeholder="I would love The Number even more if..."
              value={feedbackInput}
              onChange={(e) => setFeedbackInput(e.target.value)}
              variant="outlined"
              multiline
              rows={3}
              margin="normal"
              fullWidth
            />
          </React.Fragment>
        )}
        <div className={classes.buttonContainer}>
          <BigButton onClick={() => history.push("/results")} color="primary">
            Back to results
          </BigButton>
          <BigButton type="submit" variant="contained" color="primary">
            Sign up now
          </BigButton>
        </div>
      </form>
    </Container>
  );
}

SignUp.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
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
