import React from "react";
import tradeLogo from "../../assets/logo_trade.svg";
import { Link } from "react-router-dom";
import { MdOutlineSell } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
export default function Trade_sideBar() {
  return (
    <div className="trade-sidebar">
      <div className="trade-sidebar__image-container">
        <img
          className="trade-sidebar__image-container__image"
          src={tradeLogo}
          alt="trade logo"
        />
      </div>
      <div className="trade-sidebar__links">
        <Link className="trade-sidebar__links__link" to={"/"}>
          <TbArrowsRightLeft className="trade-sidebar__links__link__icon" />
          <p className="trade-sidebar__links__link__text">Trade</p>
        </Link>
        <Link className="trade-sidebar__links__link" to={"/sell"}>
          <MdOutlineSell className="trade-sidebar__links__link__icon" />
          <p className="trade-sidebar__links__link__text">Sell</p>
        </Link>
        <Link className="trade-sidebar__links__link" to={"/history"}>
          <MdHistory className="trade-sidebar__links__link__icon" />
          <p className="trade-sidebar__links__link__text">History</p>
        </Link>
      </div>
    </div>
  );
}
