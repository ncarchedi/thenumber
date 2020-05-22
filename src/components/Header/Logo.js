import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontFamily: ["Bai Jamjuree", "sans-serif"],
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.primary.main,
    fontSize: "2rem",
  },
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <Typography variant="h1" className={classes.logo}>
      the number
    </Typography>
  );
}
