import React from "react";
import "./lease-period-input-range.styles.scss";

const InputRangeLeasePeriod = ({ ...props }) => {
  return (
    <input
      className="lease-period-input-range-container"
      {...props}
      type="range"
    />
  );
};

export default InputRangeLeasePeriod;
