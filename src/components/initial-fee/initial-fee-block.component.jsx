import React from "react";
import "./initial-fee-block.styles.scss";

const InitialFeeBlock = ({ children }) => {
  return (
    <div className="initial-fee-block-container">
      <h2 className="initial-fee-block-text">{children}</h2>
    </div>
  );
};

export default InitialFeeBlock;
