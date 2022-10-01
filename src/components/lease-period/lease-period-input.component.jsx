import React from "react";
import "./lease-period-input.styles.scss";

const InputLeasePeriod = ({ ...props }) => {
  return (
    <input className="lease-period-input-container" {...props} type="number" />
  );
};

export default InputLeasePeriod;
