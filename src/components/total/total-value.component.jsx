import React from "react";
import "./total-value.styles.scss";

const TotalValue = ({ children }) => {
  return <h1 className="total-value-container">{children}</h1>;
};

export default TotalValue;
