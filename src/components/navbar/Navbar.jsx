import React, { useState } from "react";

import useWindowSize from "../../utils/useWindowSize";
import DesktopMenu from "./desktop-menu/DesktopMenu";
import MobileMenu from "./mobile-menu/MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import tradingLogo from "../../assets/logo_trade.svg";
import SignInSteamButton from "../sign in with steam/signInSteamButton";

export default function Navbar() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const { width } = useWindowSize();
  const handleMobileMenu = () => {
    setIsMobileMenuOpened((prev) => !prev);
  };

  return (
    <div className="navbar">
      {width > 900 ? (
        <DesktopMenu width={width} />
      ) : (
        <div className="navbar__mobile">
          <div className="navbar__mobile__left">
            <GiHamburgerMenu
              onClick={handleMobileMenu}
              className="navbar__mobile__left__icon"
            />
            <img src={tradingLogo} alt="trading logo" />
          </div>
          <SignInSteamButton />
        </div>
      )}

      <MobileMenu
        handleMobileMenu={handleMobileMenu}
        isMobileMenuOpened={isMobileMenuOpened}
      />
    </div>
  );
}
