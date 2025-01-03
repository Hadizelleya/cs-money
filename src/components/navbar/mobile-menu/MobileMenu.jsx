import React, { useEffect, useRef, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Logo from "../logo/Logo";
import SignInSteamButton from "../../sign in with steam/signInSteamButton";
import { Link } from "react-router-dom";
import en from "../../../assets/language images/en.svg";
import { IoIosArrowUp } from "react-icons/io";
import { languageData } from "../../../data/langaugeData";
import { currencyData } from "../../../data/currency";
export default function MobileMenu({ isMobileMenuOpened, handleMobileMenu }) {
  const sidebarRef = useRef(null);
  const languageMenuRef = useRef(null);
  const currencyMenuRef = useRef(null);
  const currencyButtonRef = useRef(null);
  const languageButtonRef = useRef(null);
  const [isLanguageMenuOpened, setIsLanguageMenuOpened] = useState(false);
  const [isCurrencyMenuOpened, setIsCurrencyMenuOpened] = useState(false);

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !languageMenuRef.current.contains(event.target) &&
      !currencyMenuRef.current.contains(event.target) &&
      !languageButtonRef.current.contains(event.target) &&
      !currencyButtonRef.current.contains(event.target)
    ) {
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

  const handlelanguageMenu = () => {
    setIsLanguageMenuOpened((prev) => !prev);
  };
  const handleCurrencyMenu = () => {
    setIsCurrencyMenuOpened((prev) => !prev);
  };

  return (
    <>
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
            <div
              onClick={handlelanguageMenu}
              className="sidebar__row__column__languages"
            >
              <img
                className="sidebar__row__column__languages__image"
                src={en}
                alt="language image"
              />
              <IoIosArrowUp className="sidebar__row__column__languages__arrow" />
            </div>
            <div
              onClick={handleCurrencyMenu}
              className="sidebar__row__column__currencies"
            >
              <p className="sidebar__row__column__currencies__text">$</p>
              <p className="sidebar__row__column__currencies__text">USD</p>
              <IoIosArrowUp className="sidebar__row__column__languages__arrow" />
            </div>
          </div>
        </div>
      </div>
      {window.innerWidth <= 900 && (
        <>
          {" "}
          <div
            ref={languageMenuRef}
            className={
              isLanguageMenuOpened
                ? "languages-menu languages-menu--opened"
                : "languages-menu languages-menu--closed"
            }
          >
            {languageData.map((langauge) => (
              <div className="languages-menu__language">
                <div className="languages-menu__language__image-box">
                  <img
                    className="languages-menu__language__image-box__image"
                    src={langauge.img}
                    alt="language image"
                  />
                </div>
                <p className="languages-menu__language__name">
                  {langauge.name}
                </p>
              </div>
            ))}
          </div>
          <button
            ref={languageButtonRef}
            onClick={handlelanguageMenu}
            className={
              isLanguageMenuOpened
                ? "languages-menu__cancel-button languages-menu__cancel-button--opened"
                : "languages-menu__cancel-button languages-menu__cancel-button--closed"
            }
          >
            Cancel
          </button>
          <div
            ref={currencyMenuRef}
            className={
              isCurrencyMenuOpened
                ? "languages-menu languages-menu--opened"
                : "languages-menu languages-menu--closed"
            }
          >
            {currencyData.map((currency) => (
              <div className="languages-menu__language">
                <p className="languages-menu__language__name">
                  {currency.currency}
                </p>
                <p className="languages-menu__language__name">
                  {currency.name}
                </p>
              </div>
            ))}
          </div>
          <button
            ref={currencyButtonRef}
            onClick={handleCurrencyMenu}
            className={
              isCurrencyMenuOpened
                ? "languages-menu__cancel-button languages-menu__cancel-button--opened"
                : "languages-menu__cancel-button languages-menu__cancel-button--closed"
            }
          >
            Cancel
          </button>
        </>
      )}
    </>
  );
}
