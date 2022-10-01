import React from "react";
import "./car-price-input.styles.scss";

const InputCarPrice = ({ ...props }) => {
  return (
    <input className="car-price-input-container" {...props} type="number" />
  );
};

export default InputCarPrice;
