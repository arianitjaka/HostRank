import React from 'react';
import "./LogoName.scss";
import { Link } from "react-router-dom";

import { ReactComponent as LogoWhite } from "../../../Assets/Logo/logo-white.svg";
import { ReactComponent as LogoBlue } from "../../../Assets/Logo/logo-blue.svg";


const Logo = (props) => {
  let logo = <LogoWhite className="logoimg"/>;
  if (props.scrolled) logo = <LogoBlue  className="logoimg"/>;
  return (
    <Link to="/" className="logo" id="logo">
      {logo}
    </Link>
  );
};

export default Logo;

