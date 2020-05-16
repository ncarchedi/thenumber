import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  count: {
    color: theme.palette.text.secondary,
    fontStyle: "italic",
  },
}));

export default function QuestionCount(props) {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.count}>
      Question <span>{props.current}</span> of <span>{props.total}</span>
    </Typography>
  );
}

QuestionCount.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
