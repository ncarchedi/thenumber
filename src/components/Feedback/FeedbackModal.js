import React, { useState } from "react";
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
  const { name, open, setOpen } = props;
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback", name, email, feedback }),
    })
      .then(() => console.log("Feedback form sent!"))
      .then(props.onCloseModal)
      .catch((error) => alert(error));

    e.preventDefault();
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setFeedback("");
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
        <form>
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
            label="Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
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
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
