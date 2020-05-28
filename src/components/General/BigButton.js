import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  lg: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1, 3),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 4),
      fontSize: "1.2rem",
    },
  },
  xl: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2, 4),
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.6rem",
    },
  },
}));

export default function BigButton(props) {
  const classes = useStyles();

  return (
    <Button
      className={props.size === "xl" ? classes.xl : classes.lg}
      {...props}
    >
      {props.children}
    </Button>
  );
}
