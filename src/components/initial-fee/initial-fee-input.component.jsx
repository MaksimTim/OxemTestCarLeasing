import React from "react";
import "./initial-fee-input.styles.scss";

const InputInitialFee = ({ ...props }) => {
  return (
    <input className="initial-fee-input-container" {...props} type="number" />
  );
};

export default InputInitialFee;
