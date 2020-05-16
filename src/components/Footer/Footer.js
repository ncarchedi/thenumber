import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "fixed",
    height: theme.spacing(5),
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.footer}>
      <Link color="inherit" href="https://dayonelabs.io/">
        Day One Labs LLC
      </Link>
      {" © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
