import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  logo: {
    color: theme.palette.primary.main,
    fontFamily: ["Bai Jamjuree", "sans-serif"],
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
