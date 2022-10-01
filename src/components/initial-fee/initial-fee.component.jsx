import React from 'react';
import './initial-fee.styles.scss'

const InitialFee = ({children}) => {
  return (
    <div className='initial-fee-container'>
      {children}
    </div>
  );
};

export default InitialFee;