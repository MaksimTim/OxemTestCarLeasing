import React from "react";
import "./car-price-input-range.styles.scss";

const InputRangeCarPrice = ({...props}) => {
  return <input className="car-price-input-range-container" {...props} type="range" />;
};

export default InputRangeCarPrice;