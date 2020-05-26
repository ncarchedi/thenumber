import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Emoji from "../General/Emoji";
import encode from "../../utils/encode";

export default function FeedbackModal(props) {
  const { user, setUser, open, setOpen } = props;
  const { name, email } = user;
  // if we have the user's email, then use it
  const [emailInput, setEmailInput] = useState(email);
  const [feedbackInput, setFeedbackInput] = useState("");

  useEffect(() => {
    setEmailInput(email);
  }, [email]);

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "feedback",
        name: name,
        email: emailInput,
        feedback: feedbackInput,
      }),
    })
      .then(() => console.log("Feedback form sent!"))
      .then(props.onCloseModal)
      .catch((error) => alert(error));

    setUser({ ...user, email: emailInput });
    handleClose();
    e.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
    setFeedbackInput("");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Give us feedback <Emoji symbol="📣" label="megaphone" />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <em>The Number</em> is a work in progress—and you can help shape it!
        </DialogContentText>
        <form>
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
            label="Feedback"
            value={feedbackInput}
            onChange={(e) => setFeedbackInput(e.target.value)}
            variant="outlined"
            multiline
            rows={3}
            margin="normal"
            fullWidth
            required
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

FeedbackModal.propTypes = {
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
    hasResults: PropTypes.bool.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
