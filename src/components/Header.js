import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="container header">
      <Logo />
      <div className="aboutPageLink">
        <a href=".">about</a>
      </div>
    </div>
  );
};

export default Header;
