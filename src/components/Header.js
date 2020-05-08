import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const Header = () => {
  return (
    <div className="container header">
      <Link to="/">
        <Logo />
      </Link>
      {/* <Link to="/about">
        <div className="aboutPageLink">about</div>
      </Link> */}
    </div>
  );
};

export default Header;
