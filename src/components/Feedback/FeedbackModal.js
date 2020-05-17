import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import FeedbackForm from "./FeedbackForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function FeedbackModal(props) {
  const classes = useStyles();
  const { name, open, setOpen } = props;

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleCloseModal}
      disableAutoFocus
    >
      <FeedbackForm name={name} onCloseModal={handleCloseModal} />
    </Modal>
  );
}

FeedbackModal.propTypes = {
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
