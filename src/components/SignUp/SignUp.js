import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory, Redirect, Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import BigButton from "../General/BigButton";
import Emoji from "../General/Emoji";
import encode from "../../utils/encode";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(4),
  },
  divider: {
    width: "25%",
    margin: theme.spacing(3, "auto"),
  },
  formContainer: {
    margin: theme.spacing(5, 0, 8, 0),
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
        Thanks for using The Number!{" "}
        <Emoji symbol="👏" label="hands clapping" />
      </Typography>

      <Typography variant="body1" paragraph>
        Great to meet you, {name}. My name is Nick, and I'm building The Number.
      </Typography>
      <Typography variant="body1" paragraph>
        If you have a minute, I'd love to share some background on how the The
        Number came to be.{" "}
        <em>
          In a rush? Feel free to <Link href="#signup">skip ahead</Link> to sign
          up for updates when we launch new features.
        </em>
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="body1" paragraph>
        I started my first career as a financial advisor in 2008. Helping people
        manage their money was rewarding, but I gradually became disillusioned
        with the financial services industry. In particular, I saw firsthand how
        misaligned incentives could negatively impact the recommendations that
        advisors gave their clients.
      </Typography>
      <Typography variant="body1" paragraph>
        By 2012, I left finance to pursue a master's degree in statistics. While
        in school, I created{" "}
        <Link href="https://swirlstats.com/" target="_'blank">
          open source software
        </Link>{" "}
        that helped make statistics and programming more approachable. It must
        have struck a nerve—since then, the program has been downloaded almost 2
        million times.
      </Typography>
      <Typography variant="body1" paragraph>
        Soon after graduating, I joined a small startup that was building an
        online platform for data science training. Over the next four years, I
        led curriculum development and managed several key products. By the time
        I left in 2019, we had grown the company to 150 employees and several
        million users around the world.
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="body1" paragraph>
        At this point, it was clear I wanted to start my own company.
      </Typography>
      <Typography variant="body1" paragraph>
        Like many first-time founders, I started by asking myself what I was
        good at, what I enjoyed and where I saw a need. I still had an interest
        in personal finance, but was now armed with experience in data science,
        online education and product management.
      </Typography>
      <Typography variant="body1" paragraph>
        Specifically, as a newly self-employed person, I was drawn to the topic
        of financial independence. Not retirement, per se, but the ability to
        choose how and when I work. Some of my questions were:
        <ol>
          <li>How much money do I need to be financially independent?</li>
          <li>When will I realistically reach that goal?</li>
          <li>What's the most efficient path to get there?</li>
          <li>How can I hold myself accountable over time?</li>
        </ol>
      </Typography>
      <Typography variant="body1" paragraph>
        In the past, I had used many popular personal finance apps—Mint, YNAB,
        Personal Capital, Vanguard, Betterment, etc.—but none of them
        sufficiently tackled these questions. I even tried a bunch of online
        retirement calculators, but found myself equally disappointed.
      </Typography>
      <Typography variant="body1" paragraph>
        For whatever reason, nearly every product started with the question
        "When would you like to retire?" or "How much would you like to save?".
        But the answers to these questions are typically: "As soon as possible!"
        and "You tell me!".
      </Typography>
      <Typography variant="body1" paragraph>
        Besides asking the wrong questions, most tools seemed to ignore basic
        principles of good product design and user experience. The top hits for
        "retirement calculator" on Google often look like they were built
        decades ago (and never updated).
      </Typography>
      <Typography variant="body1" paragraph>
        And—perhaps worst of all—these products suffered from the same
        misaligned incentives that I witnessed as a financial advisor, just in
        different forms. Seemingly "free" products either led users to click on
        ads / affiliate links disguised as unbiased recommendations or served as
        thinly-veiled marketing tools for financial advisory firms. No thanks.
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="body1" paragraph>
        We expect so much from the products we use to browse the web, check the
        weather, connect with others, read the news, listen to music and
        collaborate at work. Why should we settle for less when it comes to
        planning our financial futures?
      </Typography>
      <Typography variant="body1" paragraph>
        We deserve a lot better. That's why I'm building The Number.
      </Typography>
      {/* <Typography variant="body1" paragraph>
        <b>
          P.S.—For a more complete (and perhaps entertaining) list of my gripes
          with other products, check out the{" "}
          <RouterLink to="/manifesto">manifesto</RouterLink>.
        </b>
      </Typography> */}

      <div className={classes.formContainer}>
        <Typography id="signup" variant="h4" component="h2" paragraph>
          Sign up for product updates{" "}
          <Emoji symbol="🙋🏾" label="person raising hand" />
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
      </div>
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
