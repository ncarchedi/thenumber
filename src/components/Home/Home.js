import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BigButton from "../General/BigButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Emoji from "../General/Emoji";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  row: {
    marginTop: theme.spacing(15),
  },
  header: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  subHeader: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "1.8rem",
    maxWidth: theme.breakpoints.values.md - 250,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      lineHeight: "2.5rem",
    },
  },
  supportingTextContainer: {
    display: "flex",
    alignItems: "center",
  },
  supportingText: {
    fontWeight: theme.typography.fontWeightLight,
  },
  finalRow: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/quiz");
  };

  return (
    <React.Fragment>
      <Grid container spacing={6} className={classes.row}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.header}
          >
            <Emoji symbol="👋" label="waving hand" /> What's your number?
          </Typography>
          <Typography variant="h2" className={classes.subHeader}>
            Determine your path to financial independence for free, without
            giving up your privacy—or your sanity.
          </Typography>
          <BigButton
            variant="contained"
            color="primary"
            size="xl"
            endIcon={<ArrowForwardIcon />}
            onClick={handleClick}
          >
            Get my number
          </BigButton>
        </Grid>
      </Grid>
      <Grid container spacing={6} className={classes.row}>
        <Grid item xs={4} className={classes.supportingTextContainer}>
          <Typography variant="h4" className={classes.supportingText}>
            Answer a series of targeted questions in a fun and conversational
            style, with plenty of help if you need it.
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={3} className={classes.imageContainer}>
            <img src="question.png" alt="question example" width="100%" />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={6} className={classes.row}>
        <Grid item xs={8}>
          <Paper elevation={3} className={classes.imageContainer}>
            <img src="results-chart.png" alt="chart example" width="100%" />
          </Paper>
        </Grid>
        <Grid item xs={4} className={classes.supportingTextContainer}>
          <Typography variant="h4" className={classes.supportingText}>
            Understand how much you need to save and how long it will take you
            to save it. Plain and simple.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={6} className={classes.row}>
        <Grid item xs={4} className={classes.supportingTextContainer}>
          <Typography variant="h4" className={classes.supportingText}>
            Tweak your assumptions until you feel confident in your number. Then
            commit to achieving it.
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={3} className={classes.imageContainer}>
            <img src="assumptions.png" alt="assumptions example" width="100%" />
          </Paper>
        </Grid>
      </Grid>
      <Grid container className={classes.finalRow}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Ready to take your first step toward financial independence?
          </Typography>
          <BigButton
            variant="contained"
            color="primary"
            size="xl"
            endIcon={<ArrowForwardIcon />}
            onClick={handleClick}
          >
            Get my number
          </BigButton>
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
