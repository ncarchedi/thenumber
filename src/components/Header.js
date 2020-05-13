import React from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";

import Logo from "./Logo";

const Header = () => {
  return (
    <Container maxWidth="xl" className="header">
      <Link to="/">
        <Logo />
      </Link>
      {/* <Link to="/about">
        <div className="aboutPageLink">about</div>
      </Link> */}
      <Link to="/feedback">
        <div className="feedbackPageLink">give us feedback</div>
      </Link>
    </Container>
  );
};

export default Header;
