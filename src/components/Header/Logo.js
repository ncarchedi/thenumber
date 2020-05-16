import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: "inline-block",
  },
  logo: {
    color: theme.palette.primary.main,
    fontFamily: ["Racing Sans One", "cursive"],
  },
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <Typography variant="h4" className={classes.logo}>
        the number
      </Typography>
    </div>
  );
}
