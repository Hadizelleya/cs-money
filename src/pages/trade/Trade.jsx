import React from "react";
import Trade_sideBar from "../../components/trade sidebar/Trade_sideBar";
import useWindowSize from "../../utils/useWindowSize";
import Offers from "../../components/your offers/Offers";
export default function Trade() {
  const { width } = useWindowSize();
  return (
    <div className="trade-page">
      {width > 900 && <Trade_sideBar />}
      <div className="trade-page__content">
        <div className="trade-page__content__header">header</div>
        <div className="trade-page__content__body">
          <Offers />

          <Offers />
        </div>
      </div>
    </div>
  );
}
