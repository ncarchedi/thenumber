import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import BigButton from "../General/BigButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Emoji from "../General/Emoji";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  firstRow: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(15),
    },
  },
  middleRow: {
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(15),
    },
  },
  header: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h2.fontSize,
    },
  },
  subHeader: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.h5.fontSize,
    maxWidth: theme.breakpoints.values.md - 200,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      lineHeight: "2.5rem",
      fontSize: theme.typography.h4.fontSize,
    },
  },
  imageContainer: {
    backgroundColor: "inherit",
  },
  supportingTextContainer: {
    display: "flex",
    alignItems: "center",
  },
  supportingText: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  finalRow: {
    textAlign: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(15),
    },
  },
  finalRowText: {
    fontSize: theme.typography.h5.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  divider: {
    margin: theme.spacing(5, 10),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
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
      <Grid container spacing={6} className={classes.firstRow}>
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
            Determine your path to financial independence, without giving up
            your privacy—or sanity.
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
      <Divider className={classes.divider} />
      <Grid container spacing={6} className={classes.middleRow}>
        <Grid item xs={12} md={4} className={classes.supportingTextContainer}>
          <Typography variant="h4" className={classes.supportingText}>
            Answer a series of questions in language you understand. It only
            takes a few minutes.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} className={classes.imageContainer}>
            <img src="question.png" alt="question example" width="100%" />
          </Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={6} className={classes.middleRow}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} className={classes.imageContainer}>
            <img src="results.png" alt="results example" width="100%" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} className={classes.supportingTextContainer}>
          <Typography variant="h4" className={classes.supportingText}>
            Learn how much you need to save and how long it will take to save
            it. Plain and simple.
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={6} className={classes.middleRow}>
        <Grid item xs={12} md={4} className={classes.supportingTextContainer}>
          <Typography variant="h4" className={classes.supportingText}>
            Adjust your assumptions until you feel confident in your savings
            goal. Then commit to achieving it.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} className={classes.imageContainer}>
            <img src="assumptions.png" alt="assumptions example" width="100%" />
          </Paper>
        </Grid>
      </Grid>
      <Grid container className={classes.finalRow}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            gutterBottom
            className={classes.finalRowText}
          >
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
