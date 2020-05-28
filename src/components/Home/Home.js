import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BigButton from "../General/BigButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Emoji from "../General/Emoji";

const useStyles = makeStyles((theme) => ({
  row1: {
    padding: theme.spacing(10, 0),
    margin: theme.spacing(10, "auto", 0, "auto"),
  },
  header: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  subHeader: {
    color: theme.palette.text.secondary,
    fontSize: "1.8rem",
    maxWidth: theme.breakpoints.values.md - 250,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      lineHeight: "2.5rem",
    },
  },
  row2: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(10, 0),
  },
  imageContainer: {
    margin: "auto",
    maxWidth: theme.breakpoints.values.md,
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.row1}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          className={classes.header}
        >
          <Emoji symbol="👋" label="waving hand" /> What's your number?
        </Typography>
        <Typography variant="h4" component="h2" className={classes.subHeader}>
          Get the answer you really want, without banging your head against the
          wall or giving up your privacy.
        </Typography>
        <BigButton
          variant="contained"
          color="primary"
          size="xl"
          endIcon={<ArrowForwardIcon />}
        >
          Get started now
        </BigButton>
      </Container>
      <Container maxWidth={false} className={classes.row2}>
        <Paper elevation={3} className={classes.imageContainer}>
          <img src="results-chart.png" alt="chart example" width="100%" />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
