import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    marginTop: theme.spacing(3),
  },
  orPressEnter: {
    alignSelf: "center",
    marginLeft: theme.spacing(1),
  },
}));

export default function ContinueButton(props) {
  const classes = useStyles();
  const { text, onClick } = props;

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        document.getElementById("continueButton").click();
      }
    };
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return (
    <div className={classes.buttonContainer}>
      <Button
        id="continueButton"
        type="submit"
        endIcon={<DoneIcon />}
        color="primary"
        variant="contained"
        onClick={onClick}
      >
        {text}
      </Button>
      <span className={classes.orPressEnter}>press Enter ↵</span>
    </div>
  );
}

ContinueButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func, // optional
};
