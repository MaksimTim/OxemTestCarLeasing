import React from "react";
import "./initial-fee-input-range.styles.scss";

const InputRangeInitialFee = ({ ...props }) => {
  return (
    <input
      className="initial-fee-input-range-container"
      {...props}
      type="range"
    />
  );
};

export default InputRangeInitialFee;