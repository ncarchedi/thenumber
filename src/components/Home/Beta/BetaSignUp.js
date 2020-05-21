import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import BigButton from "../../General/BigButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Emoji from "../../General/Emoji";
import encode from "../../../utils/encode";

const useStyles = makeStyles((theme) => ({
  betaText: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(3),
  },
  thanksContainer: {
    textAlign: "center",
  },
  gif: {
    margin: theme.spacing(4, "auto"),
  },
}));

export default function BetaSignUp(props) {
  const classes = useStyles();
  const { name } = props;
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showThanks, setShowThanks] = useState(false);

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
    <Container maxWidth="sm">
      {showThanks ? (
        <div className={classes.thanksContainer}>
          <Typography variant="h3" component="h1">
            Thanks, we'll be in touch!
          </Typography>
          <img
            src="https://media.giphy.com/media/WmkqburJqXziM/giphy.gif"
            alt="carlton dance"
            className={classes.gif}
            width="100%"
          />
        </div>
      ) : (
        <div>
          <Typography variant="h3" component="h1" paragraph>
            Sign up for our beta <Emoji symbol="🤫" label="shushing face" />
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Thanks for letting us know what you'd like to do next! We're still
            collecting feedback to figure out what our users want most.
          </Typography>
          <Typography variant="subtitle1">
            <em className={classes.betaText}>
              In the meantime, leave your email to be notified when we launch
              our beta...
            </em>
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
            <BigButton
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<NotificationsIcon />}
            >
              Get notified
            </BigButton>
          </form>
        </div>
      )}
    </Container>
  );
}

BetaSignUp.propTypes = {
  name: PropTypes.string.isRequired,
};
