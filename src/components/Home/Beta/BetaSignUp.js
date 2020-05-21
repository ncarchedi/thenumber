import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import BigButton from "../../General/BigButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Emoji from "../../General/Emoji";

const useStyles = makeStyles((theme) => ({
  betaText: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(3),
  },
}));

export default function BetaSignUp(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" paragraph>
        Sign up for our beta <Emoji symbol="🤫" label="shushing face" />
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Thanks for letting us know what you'd like to do next! We're still
        collecting feedback to figure out what our users want most.
      </Typography>
      <Typography variant="subtitle1">
        <em className={classes.betaText}>
          In the meantime, leave your email to be notified when we launch our
          beta...
        </em>
      </Typography>
      <form className={classes.form} onSubmit={() => console.log("test")}>
        <TextField
          type="email"
          name="email"
          label="Email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          name="message"
          label="Feedback (optional)"
          placeholder="I would love The Number even more if..."
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          multiline
          rows={3}
          margin="normal"
          fullWidth
        />
      </form>
      <BigButton
        variant="contained"
        color="primary"
        endIcon={<NotificationsIcon />}
        // onClick={startOver}
      >
        Get notified
      </BigButton>
    </Container>
  );
}

BetaSignUp.propTypes = {};
