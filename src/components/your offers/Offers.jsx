import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { BsFilterRight } from "react-icons/bs";
import { BsFilterLeft } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import emptyCart from "../../assets/empty-cart.svg";
import { FaWallet } from "react-icons/fa6";
import { useClickOutside } from "../../utils/useClickOutside";
export default function Offers() {
  const [isFilteringMenuOpened, setIsFilteringMenuOpened] = useState(false);
  const filteringMenuRef = useRef();
  const handleFilteringMenu = () => {
    setIsFilteringMenuOpened((prev) => !prev);
  };
  useClickOutside(filteringMenuRef, handleFilteringMenu, isFilteringMenuOpened);

  return (
    <div className="offers">
      {/* offers header section */}
      <div className="offers__header">
        <div className="offers__header__left-section">
          <MdOutlineKeyboardArrowDown className="offers__header__left-section__icon" />
          <p className="offers__header__left-section__text">You Offer</p>
        </div>
        <div className="offers__header__right-section">
          <p className="offers__header__right-section__text">$ 0</p>
          <FaCartShopping className="offers__header__right-section__icon" />
        </div>
      </div>

      {/* offers body section */}
      <div className="offers__body">
        {/* offers body header */}
        <div className="offers__body__header">
          <div className="offers__body__header__search">
            <IoSearchSharp className="offers__body__header__search__icon" />
            <input
              type="search"
              className="offers__body__header__search__input"
              placeholder="Search..."
            />
          </div>
          <div className="offers__body__header__list-filtering">
            <div className="offers__body__header__list-filtering__left">
              <div
                ref={filteringMenuRef}
                onClick={handleFilteringMenu}
                className="offers__body__header__list-filtering__left__default"
              >
                <BsFilterRight className="offers__body__header__list-filtering__left__icon" />
                <p className="offers__body__header__list-filtering__left__text">
                  Price: Max
                </p>
                <MdOutlineKeyboardArrowDown className="offers__body__header__list-filtering__left__icon" />
              </div>

              <div
                className={
                  isFilteringMenuOpened
                    ? "offers__body__header__list-filtering__left__dropdown offers__body__header__list-filtering__left__dropdown--opened"
                    : "offers__body__header__list-filtering__left__dropdown offers__body__header__list-filtering__left__dropdown--closed"
                }
              >
                <div className="offers__body__header__list-filtering__left__dropdown__option">
                  <BsFilterRight />
                  <p>Price: Max</p>
                </div>
                <div className="offers__body__header__list-filtering__left__dropdown__option">
                  <BsFilterLeft />
                  <p>Price: Min</p>
                </div>
                <div className="offers__body__header__list-filtering__left__dropdown__option">
                  <BsFilterRight />
                  <p>Float: Max</p>
                </div>
                <div className="offers__body__header__list-filtering__left__dropdown__option">
                  <BsFilterLeft />
                  <p>Float: Max</p>
                </div>
              </div>
            </div>
            <div className="offers__body__header__list-filtering__right">
              <IoMdRefresh className="offers__body__header__list-filtering__right__icon" />
            </div>
          </div>
        </div>

        {/* offers body content */}
        <div className="offers__body_content">
          <div className="offers__body__content__wrapper">
            <div className="offers__body__content__wrapper__message"></div>
            <div className="offers__body__content__wrapper__inventory">
              <div className="offers__body__content__wrapper__inventory__image-container">
                <img
                  className="offers__body__content__wrapper__inventory__image-container__image"
                  src={emptyCart}
                  alt="empty image"
                />
                <div className="offers__body__content__wrapper__inventory__title">
                  You Don't Have Any Items
                </div>
              </div>

              <div className="offers__body__content__wrapper__inventory__divider"></div>
              <button className="offers__body__content__wrapper__inventory__button">
                <FaWallet />
                Top Up Balance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
