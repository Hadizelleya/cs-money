import React, { useEffect, useRef } from "react";
import { FaWindowClose } from "react-icons/fa";
import Logo from "../logo/Logo";
import SignInSteamButton from "../../sign in with steam/signInSteamButton";
import { Link } from "react-router-dom";
import en from "../../../assets/language images/en.svg";
import { IoIosArrowUp } from "react-icons/io";

export default function MobileMenu({ isMobileMenuOpened, handleMobileMenu }) {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleMobileMenu();
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 900) {
      handleMobileMenu();
    }
  };

  useEffect(() => {
    if (isMobileMenuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpened]);

  return (
    <div
      ref={sidebarRef}
      className={
        isMobileMenuOpened
          ? "sidebar sidebar--opened"
          : "sidebar sidebar--closed"
      }
    >
      <div className="sidebar__row">
        <div className="sidebar__row__column">
          <FaWindowClose
            className="sidebar__row__column__icon"
            onClick={handleMobileMenu}
          />
          <Logo />
        </div>
        <SignInSteamButton />
      </div>

      <div className="sidebar__row">
        <h3 className="sidebar__row__title">Trade:</h3>
        <div className="sidebar__row__column"></div>
        <div className="sidebar__row__column__links">
          <Link className="sidebar__row__column__links__link" to={"/"}>
            Trade
          </Link>
          <Link className="sidebar__row__column__links__link" to={"/"}>
            Sell
          </Link>
          <Link className="sidebar__row__column__links__link" to={"/"}>
            History
          </Link>
        </div>
      </div>

      <div className="sidebar__row">
        <h3 className="sidebar__row__title">Market:</h3>
        <div className="sidebar__row__column"></div>
        <div className="sidebar__row__column__links">
          <Link className="sidebar__row__column__links__link" to={"/"}>
            Buy
          </Link>
          <Link className="sidebar__row__column__links__link" to={"/"}>
            Instant Sell
          </Link>
          <Link className="sidebar__row__column__links__link" to={"/"}>
            Sell
          </Link>
          <Link className="sidebar__row__column__links__link" to={"/"}>
            History
          </Link>
          <Link className="sidebar__row__column__links__link" to={"/"}>
            Cashout
          </Link>
        </div>
      </div>

      <div className="sidebar__row">
        <div className="sidebar__row__column">
          <div className="sidebar__row__column__languages">
            <img
              className="sidebar__row__column__languages__image"
              src={en}
              alt="language image"
            />
            <IoIosArrowUp className="sidebar__row__column__languages__arrow" />
          </div>
          <div className="sidebar__row__column__currencies">
            <p className="sidebar__row__column__currencies__text">$</p>
            <p className="sidebar__row__column__currencies__text">USD</p>
            <IoIosArrowUp className="sidebar__row__column__languages__arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
