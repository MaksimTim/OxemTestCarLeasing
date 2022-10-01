import React from "react";
import './percent-block.styles.scss'

const PercentBlock = ({ children }) => {
  return (
    <div className='percent-block-container'>
      <h3 className='percent-block-text'>{children}</h3>
    </div>
  );
};

export default PercentBlock;