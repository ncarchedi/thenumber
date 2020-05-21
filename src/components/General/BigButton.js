import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 4),
    fontSize: "1.2rem",
  },
}));

export default function BigButton(props) {
  const classes = useStyles();

  return (
    <Button className={classes.button} size="large" {...props}>
      {props.children}
    </Button>
  );
}
