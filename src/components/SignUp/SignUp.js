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
        {name}, thanks for stopping by!{" "}
        <Emoji symbol="👏" label="hands clapping" />
      </Typography>

      <Typography variant="body1" paragraph>
        My name is Nick, and I'm building The Number.
      </Typography>
      <Typography variant="body1" paragraph>
        If you have a minute, I'd love to give you some background on who I am
        and how the The Number came to be. Otherwise,{" "}
        <b>
          feel free to <Link href="#signup">skip ahead</Link> to sign up for
          updates when we launch new features.
        </b>
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="body1" paragraph>
        I started my first career as a financial advisor at the height of the
        financial crisis in 2008. I loved helping people with their finances,
        but gradually fell out of love with the financial services industry as a
        whole. I saw firsthand how often incentives were misaligned between
        advisors and their clients and the impact that it had on the choices
        people made.
      </Typography>
      <Typography variant="body1" paragraph>
        By 2012, I decided to move on from finance and pursue a Master's degree
        in statistics. (I had studied math as an undergrad, so this wasn't as
        crazy as it sounds). While in grad school, I wrote{" "}
        <Link href="https://swirlstats.com/">some software</Link> that helped
        make statistics and programming more approachable to newbies (like
        myself).
      </Typography>
      <Typography variant="body1" paragraph>
        After finishing school in 2014, I went to work as a data scientist for a
        management consulting firm, but left a year later to join a small,
        scrappy startup that was building an online platform for learning and
        teaching data science. After my experience in grad school, his was right
        up my alley.
      </Typography>
      <Typography variant="body1" paragraph>
        Over the next four years, I held a few different positions involving
        curriculum and product development. We grew the company to around 150
        employees and several million users around the world.
      </Typography>
      <Typography variant="body1" paragraph>
        In November 2019, the company hit a brief rough patch and I was laid
        off. This was difficult, but I didn't hold a grudge. The experience had
        galvanized my desire to start a company of my own.
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="body1" paragraph>
        I spent the next few months searching for ideas. Then the pandemic hit.
      </Typography>
      <Typography variant="body1" paragraph>
        The global economy tanked and financial markets whipsawed. I—like many
        others—found myself wondering what impact this would have on my
        long-term financial well-being.{" "}
        <b>
          Specifically, when (if ever) would I be able to achieve financial
          independence and what would it take to get there?
        </b>
      </Typography>
      <Typography variant="body1" paragraph>
        I had used many of the most popular personal finance apps—Mint, YNAB,
        Personal Capital, Vanguard, Betterment, etc.—but none did a particularly
        good job of answering this question. I spent sometime poking around
        online for so-called <em>retirement calculators</em>, but found myself
        equally disappointed.
      </Typography>
      <Typography variant="body1" paragraph>
        For whatever reason, nearly every app or tool that I'd seen started with
        the question "When would you like to retire?" But the answer to that
        question for most people is "As soon as possible!" or "You tell me!"
      </Typography>
      <Typography variant="body1" paragraph>
        Besides asking the wrong question(s), most tools seemed to have put
        almost no thought into product design and user experience. Many of the
        top hits for "retirement calculator" on Google looked like they were
        built decades ago and never updated.
      </Typography>
      <Typography variant="body1" paragraph>
        And—perhaps worst of all—I saw the same misaligned incentives that I
        recalled from my days as a financial advisor, just in different forms.
        Instead of charging customers directly for providing a valuable service,
        the companies behind these products wanted you to click on ads or
        affiliate links, or to manage your money. No thanks.
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="body1" paragraph>
        We expect so much more from the products we use to browse the web, check
        the weather, create and share documents, connect with others, read the
        news, listen to music, and collaborate at work, so why are we willing to
        settle for less when it comes to one of the most important tasks in our
        lives—planning for our financial future?
      </Typography>
      <Typography variant="body1" paragraph>
        We can do so much better. That's why I'm building The Number.
      </Typography>
      <Typography variant="body1" paragraph>
        <b>
          P.S.—For a more complete (and perhaps entertaining) list of my gripes
          with other products, check out the{" "}
          <RouterLink to="/manifesto">manifesto</RouterLink>.
        </b>
      </Typography>

      <div className={classes.formContainer}>
        <Typography id="signup" variant="h4" component="h2" paragraph>
          Sign up to stay in the loop <Emoji symbol="🔔" label="bell" />
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
