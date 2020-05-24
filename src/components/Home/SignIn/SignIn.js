import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  header: {
    marginBottom: theme.spacing(5),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

// docs at https://github.com/firebase/firebaseui-web-react
const firebaseConfig = {
  apiKey: "AIzaSyBXv9ztaFefhgONRNwW2WlNxHQxaQGPOkw",
  authDomain: "thenumber-342c0.firebaseapp.com",
  databaseURL: "https://thenumber-342c0.firebaseio.com",
  projectId: "thenumber-342c0",
  storageBucket: "thenumber-342c0.appspot.com",
  messagingSenderId: "286057030146",
  appId: "1:286057030146:web:f45a67f9a4c0b187a37d1b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function SignIn(props) {
  const classes = useStyles();
  const { goToNextStage } = props;

  // Configure FirebaseUI.
  const uiConfig = {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false,
      },
    ],
    credentialHelper: "none",
    callbacks: {
      // Avoid redirect after sign-in
      signInSuccessWithAuthResult: () => false,
    },
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h2" component="h1" className={classes.header}>
        Save Your Number?
      </Typography>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <Button onClick={goToNextStage} className={classes.button}>
        No thanks, I've already memorized it
      </Button>
    </Container>
  );
}

SignIn.propTypes = {
  goToNextStage: PropTypes.func.isRequired,
};
