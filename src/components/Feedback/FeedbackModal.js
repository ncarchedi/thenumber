import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Emoji from "../General/Emoji";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(3),
  },
}));

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function FeedbackModal(props) {
  const classes = useStyles();
  const { name, open, setOpen } = props;
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
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setMessage("");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Give us feedback <Emoji symbol="📝" label="memo" />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <em>The Number</em> is a work in progress—and you can help shape it!
        </DialogContentText>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                label="Feedback"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

FeedbackModal.propTypes = {
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
