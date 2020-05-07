import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const Header = () => {
  return (
    <div className="container header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="aboutPageLink">
        <Link to="/about">about</Link>
      </div>
    </div>
  );
};

export default Header;
