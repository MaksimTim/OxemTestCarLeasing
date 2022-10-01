import React from 'react';
import './lease-period.styles.scss';

const LeasePeriod = ({children}) => {
  return (
    <div className='lease-period-container'>
      {children}
    </div>
  );
};

export default LeasePeriod;