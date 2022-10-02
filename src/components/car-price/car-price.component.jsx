import React from "react";
import "./car-price.styles.scss";

const CarPrice = ({ children }) => {
  return <div className="car-price-container">{children}</div>;
};

export default CarPrice;