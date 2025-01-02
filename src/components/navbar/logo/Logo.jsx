import React from "react";
import SvgLogo from "../../../assets/csmoney-logo.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={SvgLogo} className="logo__svg" alt="cs-money-logo" />
      </Link>
    </div>
  );
}
