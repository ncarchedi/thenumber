import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import Emoji from "../General/Emoji";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4),
    maxWidth: "600px",
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  form: {
    marginTop: theme.spacing(3),
  },
}));

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

// Rationale for using forwardRef():
// https://material-ui.com/guides/composition/#caveat-with-refs
// https://reactjs.org/docs/forwarding-refs.html
// https://www.robinwieruch.de/react-function-component#react-function-component-ref
const FeedbackForm = forwardRef((props, ref) => {
  const classes = useStyles();
  const [name] = useState(props.name);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback", name, email, message }),
    })
      .then(props.onCloseModal)
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <Paper className={classes.paper} ref={ref}>
      {name ? (
        <Typography variant="h6" gutterBottom>
          {name}, where should we go from here?{" "}
          <Emoji symbol="🤔" label="thinking" />
        </Typography>
      ) : (
        <Typography variant="h6" gutterBottom>
          Where should we go from here? <Emoji symbol="🤔" label="thinking" />
        </Typography>
      )}
      <Typography variant="subtitle1" gutterBottom>
        <em>The Number</em> is a work in progress—and you can help shape it!
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText="Just in case we have any questions"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label="Feedback"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              helperText="Let us know how we can improve"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Submit Feedback
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
});

export default FeedbackForm;

FeedbackForm.propTypes = {
  name: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
