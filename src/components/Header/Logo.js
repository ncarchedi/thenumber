import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "inline-block",
    color: theme.palette.primary.main,
    fontFamily: ["Racing Sans One", "cursive"],
  },
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.logo}>
      the number
    </Typography>
  );
}
