import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      {/* <Link to="/about">
        <div className="aboutPageLink">about</div>
      </Link> */}
      <Link to="/feedback">
        <div className="feedbackPageLink">give us feedback</div>
      </Link>
    </div>
  );
};

export default Header;
