import React, { useState, useRef } from "react";
import Logo from "../logo/Logo";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import en from "../../../assets/language images/en.svg";
import { languageData } from "../../../data/langaugeData";
import { currencyData } from "../../../data/currency";
import SignInSteamButton from "../../sign in with steam/signInSteamButton";
import { useClickOutside } from "../../../utils/useClickOutside";
export default function DesktopMenu({ width }) {
  const [isLanguageMenuOpened, setIsLanguageMenuOpened] = useState(false);
  const [isCurrencyMenuOpened, setIsCurrencyMenuOpened] = useState(false);
  const languageMenuRef = useRef(null);
  const currencyMenuRef = useRef(null);

  const handleLanguageMenu = () => {
    setIsLanguageMenuOpened((prev) => !prev);
  };
  const handleCurrencyMenu = () => {
    setIsCurrencyMenuOpened((prev) => !prev);
  };
  useClickOutside(languageMenuRef, handleLanguageMenu, isLanguageMenuOpened);
  useClickOutside(currencyMenuRef, handleCurrencyMenu, isCurrencyMenuOpened);
  return (
    <div className="desktop-navbar">
      <div className="desktop-navbar__left-side">
        <Logo />
        <div className="desktop-navbar__left-side__menu">
          <Link className="desktop-navbar__left-side__menu__menu-item" to={"/"}>
            Trade
          </Link>
          <Link className="desktop-navbar__left-side__menu__menu-item" to={"/"}>
            Market
          </Link>
          <Link className="desktop-navbar__left-side__menu__menu-item" to={"/"}>
            FAQ
          </Link>
          {width > 1200 && (
            <Link
              className="desktop-navbar__left-side__menu__menu-item desktop-navbar__left-side__menu__menu-item--sell-button"
              to={"/"}
            >
              <BsFillLightningChargeFill className="desktop-navbar__left-side__menu__menu-item--sell-button__icon" />
              <h4 className="desktop-navbar__left-side__menu__menu-item--sell-button__title">
                INSTANT SELL
              </h4>
            </Link>
          )}
        </div>
      </div>
      <div className="desktop-navbar__right-side">
        <div className="desktop-navbar__right-side__dropdown-wrapper">
          <div
            ref={languageMenuRef}
            onClick={handleLanguageMenu}
            className="desktop-navbar__right-side__dropdown-wrapper__label"
          >
            <div className="desktop-navbar__right-side__dropdown-wrapper__label__image-box">
              <img
                className="desktop-navbar__right-side__dropdown-wrapper__label__image-box__image"
                src={en}
                alt="langauge image"
              />
            </div>
            <IoIosArrowUp
              className={
                isLanguageMenuOpened
                  ? "desktop-navbar__right-side__dropdown-wrapper__label__arrow desktop-navbar__right-side__dropdown-wrapper__label__arrow--opened"
                  : "desktop-navbar__right-side__dropdown-wrapper__label__arrow"
              }
            />
          </div>

          <div
            className={
              isLanguageMenuOpened
                ? "desktop-navbar__right-side__dropdown-wrapper__language-menu desktop-navbar__right-side__dropdown-wrapper__language-menu--opened"
                : "desktop-navbar__right-side__dropdown-wrapper__language-menu desktop-navbar__right-side__dropdown-wrapper__language-menu--closed"
            }
          >
            {languageData.map((language, index) => (
              <div
                key={index}
                className="desktop-navbar__right-side__dropdown-wrapper__language-menu__language"
              >
                <img
                  className="desktop-navbar__right-side__dropdown-wrapper__language-menu__language__image"
                  src={language.img}
                  alt="language image"
                />
                <p className="desktop-navbar__right-side__dropdown-wrapper__language-menu__language__name">
                  {language.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="desktop-navbar__right-side__dropdown-wrapper">
          <div
            ref={currencyMenuRef}
            onClick={handleCurrencyMenu}
            className="desktop-navbar__right-side__dropdown-wrapper__label"
          >
            <div className="desktop-navbar__right-side__dropdown-wrapper__label__currency">
              <p className="desktop-navbar__right-side__dropdown-wrapper__label__currency__text">
                $
              </p>
              <p className="desktop-navbar__right-side__dropdown-wrapper__label__currency__text">
                USD
              </p>
            </div>
            <IoIosArrowUp
              className={
                isCurrencyMenuOpened
                  ? "desktop-navbar__right-side__dropdown-wrapper__label__arrow desktop-navbar__right-side__dropdown-wrapper__label__arrow--opened"
                  : "desktop-navbar__right-side__dropdown-wrapper__label__arrow"
              }
            />
          </div>

          <div
            className={
              isCurrencyMenuOpened
                ? "desktop-navbar__right-side__dropdown-wrapper__language-menu desktop-navbar__right-side__dropdown-wrapper__language-menu--opened"
                : "desktop-navbar__right-side__dropdown-wrapper__language-menu desktop-navbar__right-side__dropdown-wrapper__language-menu--closed"
            }
          >
            {currencyData.map((currency, index) => (
              <div
                key={index}
                className="desktop-navbar__right-side__dropdown-wrapper__language-menu__language"
              >
                <p className="desktop-navbar__right-side__dropdown-wrapper__language-menu__language__name">
                  {currency.currency}
                </p>
                <p className="desktop-navbar__right-side__dropdown-wrapper__language-menu__language__name">
                  {currency.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <SignInSteamButton />
      </div>
    </div>
  );
}
