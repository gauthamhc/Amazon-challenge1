import React from "react";
import "./CheckOut.css";
import Subtotal from "./Subtotal";

const CheckOut = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/IBD9thJune/D23214784_IN_HETV_TV_Upgrade_Days_10th_to_12th_May_ILM_640x45._CB667801639_.jpg"
          alt="ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default CheckOut;
